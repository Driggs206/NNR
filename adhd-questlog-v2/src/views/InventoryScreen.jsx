// ============================================================
// INVENTORY SCREEN
// • Bag items open a comparison drawer showing stat diffs
// • Sell items from bag or equipped slots
// • Mobile-first: comparison drawer slides up from bottom
// ============================================================

import React, { useState, useCallback, useRef } from 'react';
import { EQUIPMENT_SLOTS, ITEMS, RARITY_COLORS, getEquipmentStats, getSellPrice } from '../data/items';
import { calcDisplayDPS, getPlayerStats } from '../engine/combatEngine';
import { useDragDrop } from '../hooks/useDragDrop';
import Avatar from '../components/Avatar';

// ─── Drag ghost — follows cursor/finger ──────────────────
function DragGhost({ item, pos }) {
  if (!item) return null;
  const rarity = RARITY_COLORS[item.rarity] || RARITY_COLORS.common;
  return (
    <div style={{
      position: 'fixed',
      left: pos.x,
      top:  pos.y,
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      zIndex: 9999,
      background: rarity.bg,
      border: `2px solid ${rarity.color}`,
      borderRadius: '12px',
      padding: '8px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: `0 0 20px ${rarity.color}60, 0 4px 16px rgba(0,0,0,0.6)`,
      opacity: 0.92,
      backdropFilter: 'blur(4px)',
      minWidth: '120px',
    }}>
      <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
      <div>
        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: rarity.color }}>{item.name}</div>
        <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)', textTransform: 'capitalize' }}>{item.slot}</div>
      </div>
    </div>
  );
}

// ─── Stat formatter ───────────────────────────────────────
function fmtStat(stat, val) {
  if (val === undefined || val === null) return '—';
  const pct = ['critChance', 'critDamage', 'speed'];
  return pct.includes(stat)
    ? `${val >= 0 ? '+' : ''}${(val * 100).toFixed(0)}%`
    : `${val >= 0 ? '+' : ''}${val}`;
}

const STAT_LABELS = {
  attack:     { label: 'Attack',     icon: '⚔' },
  speed:      { label: 'Atk Speed',  icon: '⚡' },
  critChance: { label: 'Crit Chance',icon: '🎯' },
  critDamage: { label: 'Crit Dmg',   icon: '💥' },
  focus:      { label: 'Focus',      icon: '🔮' },
  resilience: { label: 'Resilience', icon: '🛡' },
};

// ─── Stat diff row ────────────────────────────────────────
function StatDiffRow({ stat, oldVal = 0, newVal = 0 }) {
  const diff = newVal - oldVal;
  const isPercent = ['critChance', 'critDamage', 'speed'].includes(stat);
  const meta = STAT_LABELS[stat] || { label: stat, icon: '•' };

  const diffStr = diff === 0 ? '=' :
    isPercent ? `${diff > 0 ? '+' : ''}${(diff * 100).toFixed(0)}%` :
    `${diff > 0 ? '+' : ''}${diff}`;

  const diffColor = diff > 0 ? 'var(--green)' : diff < 0 ? 'var(--coral)' : 'var(--text-muted)';
  const diffBg    = diff > 0 ? 'var(--green-dim)' : diff < 0 ? 'var(--coral-dim)' : 'var(--bg-elevated)';
  const chevron   = diff > 0 ? '▲' : diff < 0 ? '▼' : null;

  return (
    <div className="diff-row">
      <span className="diff-icon">{meta.icon}</span>
      <span className="diff-label">{meta.label}</span>
      <span className="diff-old">{fmtStat(stat, oldVal)}</span>
      <span className="diff-arrow">→</span>
      <span className="diff-new">{fmtStat(stat, newVal)}</span>
      <span className="diff-delta" style={{ color: diffColor, background: diffBg }}>
        {chevron && (
          <span className="diff-chevron" style={{ color: diffColor }}>{chevron}</span>
        )}
        {diffStr}
      </span>
    </div>
  );
}

// ─── Item art helpers ─────────────────────────────────────
function itemArtSrc(item) {
  if (!item?.art) return null;
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${item.art.replace(/^\//, '')}`;
}

// Small square icon for bag tiles and paper doll
function itemIconSrc(item) {
  if (!item) return null;
  // Use dedicated icon art if available, fall back to full card art
  const path = item.artIcon || item.art;
  if (!path) return null;
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\//, '')}`;
}

// ─── Item card display — shows art if available ───────────
function ItemCardArt({ item, className = '', style = {} }) {
  const rarity  = RARITY_COLORS[item.rarity] || RARITY_COLORS.common;
  const artSrc  = itemArtSrc(item);
  return (
    <div className={`item-card-art ${className}`} style={style}>
      {artSrc ? (
        <img
          src={artSrc}
          alt={item.name}
          className="ica-img"
          draggable={false}
        />
      ) : (
        <div className="ica-fallback" style={{ background: rarity.bg }}>
          <span className="ica-emoji">{item.icon}</span>
          <div className="ica-rarity-dot" style={{ background: rarity.color }} />
        </div>
      )}
    </div>
  );
}

// ─── Compact item tile for the bag grid ───────────────────
function BagTile({ item, inventoryIndex, onSelect, onSell, onMouseDragStart, onTouchDragStart, isDragging }) {
  const rarity  = RARITY_COLORS[item.rarity] || RARITY_COLORS.common;
  const iconSrc = itemIconSrc(item);

  return (
    <div
      className={`bag-tile ${isDragging ? 'dragging' : ''}`}
      style={{ '--rc': rarity.color, borderColor: rarity.color + '66', opacity: isDragging ? 0.4 : 1 }}
      onClick={() => !isDragging && onSelect(item, inventoryIndex)}
      onMouseDown={e => { if (e.button === 0) onMouseDragStart(item, inventoryIndex, e); }}
      onTouchStart={e => onTouchDragStart(item, inventoryIndex, e)}
    >
      {/* Illustration area — art crop or emoji fallback, always same size */}
      <div className="bt-thumb" style={{ background: iconSrc ? 'transparent' : rarity.bg }}>
        {iconSrc ? (
          <img src={iconSrc} alt={item.name} className="bt-thumb-img" draggable={false} />
        ) : (
          <span className="bt-thumb-emoji">{item.icon}</span>
        )}
      </div>
      {/* Item name + rarity dot */}
      <div className="bt-footer">
        <span className="bt-rarity-dot" style={{ background: rarity.color }} />
        <span className="bt-name" style={{ color: rarity.color }}>{item.name}</span>
      </div>
    </div>
  );
}

// ─── Equipped slot card ────────────────────────────────────
function EquippedCard({ slotMeta, item, onUnequip, onSell }) {
  const rarity = item ? (RARITY_COLORS[item.rarity] || RARITY_COLORS.common) : null;
  const sellPrice = item ? getSellPrice(item) : 0;

  return (
    <div className={`equip-slot-card ${item ? 'has-item' : 'empty'}`}
      style={ item ? { borderColor: rarity.color + '55' } : {} }>
      <div className="esc-slot-label">{slotMeta.icon} {slotMeta.label}</div>
      {item ? (
        <>
          <div className="esc-item-top">
            <span className="esc-item-icon">{item.icon}</span>
            <div className="esc-item-info">
              <div className="esc-item-name" style={{ color: rarity.color }}>{item.name}</div>
              <span className="rarity-badge" style={{ background: rarity.bg, color: rarity.color }}>
                {rarity.label}
              </span>
            </div>
          </div>
          <div className="esc-stats">
            {Object.entries(item.stats || {}).map(([s, v]) => (
              <span key={s} className="esc-stat-chip">
                {STAT_LABELS[s]?.icon} {fmtStat(s, v)}
              </span>
            ))}
          </div>
          {item.flavor && <div className="esc-flavor">"{item.flavor}"</div>}
          <div className="esc-actions">
            <button className="btn btn-ghost esc-btn" onClick={() => onUnequip()}>Unequip</button>
            <button className="btn btn-secondary esc-btn sell-btn" onClick={() => onSell()}>
              💰 Sell {sellPrice}g
            </button>
          </div>
        </>
      ) : (
        <div className="esc-empty">Empty slot</div>
      )}
    </div>
  );
}

// ─── Comparison drawer ────────────────────────────────────
function CompareDrawer({ item, inventoryIndex, equipped, onEquip, onSell, onClose }) {
  if (!item) return null;

  const rarity = RARITY_COLORS[item.rarity] || RARITY_COLORS.common;
  const sellPrice = getSellPrice(item);

  // Determine target slot
  const targetSlot = item.slot === 'ring'
    ? (equipped.ring ? (equipped.ring2 ? 'ring' : 'ring2') : 'ring')
    : item.slot;

  const currentItemId = equipped[targetSlot];
  const currentItem   = currentItemId ? ITEMS[currentItemId] : null;
  const currentRarity = currentItem ? (RARITY_COLORS[currentItem.rarity] || RARITY_COLORS.common) : null;
  const isDuplicate   = currentItemId === item.id;

  // Build unified stat set for comparison
  const allStats = new Set([
    ...Object.keys(item.stats || {}),
    ...Object.keys(currentItem?.stats || {}),
  ]);

  // DPS change preview
  const newStats    = item.stats || {};
  const oldStats    = currentItem?.stats || {};
  const attackDiff  = (newStats.attack || 0) - (oldStats.attack || 0);
  const speedDiff   = (newStats.speed || 0) - (oldStats.speed || 0);
  const isUpgrade   = attackDiff > 0 || speedDiff > 0 ||
    Object.keys(newStats).some(s => (newStats[s] || 0) > (oldStats[s] || 0));

  return (
    <>
      {/* Backdrop */}
      <div className="drawer-backdrop" onClick={onClose} />

      {/* Drawer panel */}
      <div className="compare-drawer">
        {/* Handle bar */}
        <div className="drawer-handle" onClick={onClose} />

        <div className="cd-header">
          {/* Full card art — uncropped */}
          {itemArtSrc(item) && (
            <div className="cd-card-art-wrap">
              <img
                src={itemArtSrc(item)}
                alt={item.name}
                className="cd-card-art"
                draggable={false}
              />
            </div>
          )}
          <div className="cd-header-row">
          <div className="cd-new-item">
            <span className="cd-item-icon" style={{ background: rarity.bg }}>{item.icon}</span>
            <div>
              <div className="cd-item-name" style={{ color: rarity.color }}>{item.name}</div>
              <div className="cd-slot-hint">
                <span className="rarity-badge" style={{ background: rarity.bg, color: rarity.color }}>
                  {rarity.label}
                </span>
                <span className="slot-badge">→ {targetSlot}</span>
                {isDuplicate
                  ? <span className="duplicate-badge">⧉ DUPLICATE</span>
                  : isUpgrade && <span className="upgrade-badge">▲ UPGRADE</span>
                }
              </div>
            </div>
          </div>
          <button className="drawer-close btn btn-ghost" onClick={onClose}>✕</button>
          </div>
        </div>

        {/* Stat comparison table */}
        <div className="cd-compare-section">
          {isDuplicate ? (
            <div className="cd-duplicate-notice">
              <span className="cdn-icon">{item.icon}</span>
              <div>
                <div className="cdn-title">Already equipped</div>
                <div className="cdn-sub">You're wearing this exact item. {item.slot === 'ring' ? 'Equipping will move it to the second ring slot, or you can sell this copy.' : 'Sell this copy for gold, or unequip the current one first.'}</div>
              </div>
            </div>
          ) : (
            <>
              <div className="cd-compare-headers">
                <div className="cd-col-current">
                  {currentItem ? (
                    <div className="cd-equipped-label">
                      <span className="cd-equipped-icon" style={{ color: currentRarity.color }}>
                        {currentItem.icon}
                      </span>
                      <span style={{ color: currentRarity.color }}>{currentItem.name}</span>
                      <span className="cd-equipped-tag">Equipped</span>
                    </div>
                  ) : (
                    <div className="cd-equipped-label cd-empty-slot">
                      <span>— Empty slot —</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="cd-diff-rows">
                {[...allStats].map(stat => (
                  <StatDiffRow
                    key={stat}
                    stat={stat}
                    oldVal={currentItem?.stats?.[stat] || 0}
                    newVal={item.stats?.[stat] || 0}
                  />
                ))}
              </div>
            </>
          )}

          {/* Effect bonuses */}
          {(item.effects || []).length > 0 && (
            <div className="cd-effects">
              <div className="cd-effects-label">✦ Special Effects</div>
              {(item.effects || []).map((e, i) => (
                <div key={i} className="cd-effect-row">
                  <span>{e.type === 'task_xp_bonus' ? '📚 Task XP' : e.type === 'focus_session_bonus' ? '🔮 Focus XP' : e.type}</span>
                  <span style={{ color: 'var(--green)', fontWeight: 800 }}>+{(e.value * 100).toFixed(0)}%</span>
                </div>
              ))}
            </div>
          )}

          {/* Flavor */}
          {item.flavor && (
            <div className="cd-flavor">"{item.flavor}"</div>
          )}
        </div>

        {/* Actions */}
        <div className="cd-actions">
          <button
            className="btn btn-primary cd-equip-btn"
            onClick={() => onEquip(item, inventoryIndex, targetSlot)}
          >
            ⚔ Equip
          </button>
          <button
            className="btn btn-secondary cd-sell-btn"
            onClick={() => onSell(item, inventoryIndex, sellPrice)}
          >
            💰 Sell for {sellPrice}g
          </button>
        </div>

        <style>{`
          .drawer-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(3px);
            z-index: 150;
            animation: fadeIn 0.2s ease;
          }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

          .compare-drawer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 160;
            background: var(--bg-elevated);
            border-top: 1px solid var(--border-default);
            border-radius: var(--radius-xl) var(--radius-xl) 0 0;
            padding: 12px 20px 24px;
            max-height: 85dvh;
            overflow-y: auto;
            box-shadow: var(--shadow-lg);
            animation: slideUp 0.28s var(--ease-spring);
            padding-bottom: calc(24px + env(safe-area-inset-bottom, 0px));
          }

          @keyframes slideUp {
            from { transform: translateY(100%); }
            to   { transform: translateY(0); }
          }

          @media (min-width: 600px) {
            .compare-drawer {
              left: 50%;
              transform: translateX(-50%);
              width: min(560px, 100vw);
              border-radius: var(--radius-xl);
              bottom: 24px;
              max-height: 80dvh;
              animation: scaleIn 0.25s var(--ease-spring);
            }
            .drawer-backdrop { backdrop-filter: blur(4px); }
          }

          .drawer-handle {
            width: 36px;
            height: 4px;
            background: var(--border-strong);
            border-radius: var(--radius-full);
            margin: 0 auto 16px;
            cursor: pointer;
          }

          @media (min-width: 600px) { .drawer-handle { display: none; } }

          .cd-header {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 16px;
          }

          .cd-card-art-wrap {
            width: 100%;
            border-radius: var(--radius-lg);
            overflow: hidden;
            border: 1px solid var(--border-subtle);
            background: var(--bg-card);
          }

          .cd-card-art {
            width: 100%;
            display: block;
            object-fit: contain;
            object-position: center top;
            pointer-events: none;
          }

          .cd-header-row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
          }

          .cd-new-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            flex: 1;
            min-width: 0;
          }

          .cd-item-icon {
            font-size: 2rem;
            width: 52px;
            height: 52px;
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .cd-item-name {
            font-size: 1rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 4px;
          }

          .cd-slot-hint {
            display: flex;
            align-items: center;
            gap: 5px;
            flex-wrap: wrap;
          }

          .upgrade-badge {
            font-size: 0.6rem;
            font-weight: 800;
            background: var(--green-dim);
            color: var(--green);
            border: 1px solid rgba(92,221,139,0.3);
            border-radius: var(--radius-full);
            padding: 1px 7px;
            letter-spacing: 0.06em;
          }

          .duplicate-badge {
            font-size: 0.6rem;
            font-weight: 800;
            background: var(--amber-dim);
            color: var(--amber);
            border: 1px solid rgba(245,166,35,0.3);
            border-radius: var(--radius-full);
            padding: 1px 7px;
            letter-spacing: 0.06em;
          }

          .cd-duplicate-notice {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            background: var(--amber-dim);
            border: 1px solid rgba(245,166,35,0.25);
            border-radius: var(--radius-md);
            padding: 14px 16px;
          }

          .cdn-icon { font-size: 1.8rem; flex-shrink: 0; }
          .cdn-title {
            font-size: 0.88rem;
            font-weight: 800;
            color: var(--amber);
            margin-bottom: 4px;
          }
          .cdn-sub {
            font-size: 0.78rem;
            color: var(--text-secondary);
            line-height: 1.5;
          }

          .drawer-close {
            flex-shrink: 0;
            font-size: 1rem;
            padding: 4px 8px;
            color: var(--text-muted);
          }

          /* Comparison section */
          .cd-compare-section {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .cd-equipped-label {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 0.78rem;
            font-weight: 700;
            padding: 8px 12px;
            background: var(--bg-card);
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-md);
          }

          .cd-equipped-icon { font-size: 1rem; }

          .cd-equipped-tag {
            font-size: 0.62rem;
            background: var(--amber-dim);
            color: var(--amber);
            border: 1px solid rgba(245,166,35,0.3);
            border-radius: var(--radius-full);
            padding: 1px 6px;
            font-weight: 800;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }

          .cd-empty-slot { color: var(--text-muted); font-style: italic; justify-content: center; }

          .cd-diff-rows {
            background: var(--bg-card);
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-md);
            overflow: hidden;
          }

          .diff-row {
            display: grid;
            grid-template-columns: 20px 1fr 52px 18px 52px 46px;
            align-items: center;
            gap: 6px;
            padding: 7px 12px;
            border-bottom: 1px solid var(--border-subtle);
            font-size: 0.78rem;
          }
          .diff-row:last-child { border-bottom: none; }

          .diff-icon  { font-size: 0.85rem; text-align: center; }
          .diff-label { color: var(--text-secondary); font-weight: 600; }
          .diff-old   { color: var(--text-muted); text-align: right; font-variant-numeric: tabular-nums; }
          .diff-arrow { color: var(--text-muted); text-align: center; font-size: 0.65rem; }
          .diff-new   { color: var(--text-primary); font-weight: 700; text-align: right; font-variant-numeric: tabular-nums; }
          .diff-delta {
            font-size: 0.7rem;
            font-weight: 800;
            padding: 2px 5px;
            border-radius: var(--radius-full);
            text-align: center;
            font-variant-numeric: tabular-nums;
            display: inline-flex;
            align-items: center;
            gap: 2px;
          }

          .diff-chevron {
            font-size: 0.55rem;
            line-height: 1;
          }

          .cd-effects {
            background: var(--bg-card);
            border: 1px solid rgba(92,221,139,0.2);
            border-radius: var(--radius-md);
            padding: 8px 12px;
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .cd-effects-label {
            font-size: 0.68rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--green);
            margin-bottom: 2px;
          }

          .cd-effect-row {
            display: flex;
            justify-content: space-between;
            font-size: 0.78rem;
            color: var(--text-secondary);
          }

          .cd-flavor {
            font-size: 0.72rem;
            color: var(--text-muted);
            font-style: italic;
            text-align: center;
            padding: 6px 0;
          }

          /* Actions */
          .cd-actions {
            display: flex;
            gap: 10px;
            margin-top: 16px;
            padding-top: 14px;
            border-top: 1px solid var(--border-subtle);
          }

          .cd-equip-btn {
            flex: 1;
            justify-content: center;
            padding: 12px;
            font-size: 0.9rem;
          }

          .cd-sell-btn {
            flex-shrink: 0;
            padding: 12px 16px;
            font-size: 0.82rem;
          }
        `}</style>
      </div>
    </>
  );
}

// ─── Paper Doll ───────────────────────────────────────────
function PaperDollSlot({ slotMeta, itemId, onUnequip, onSell, isOver, isDragCompatible }) {
  const [hover, setHover] = useState(false);
  const item   = itemId ? ITEMS[itemId] : null;
  const rarity = item ? (RARITY_COLORS[item.rarity] || RARITY_COLORS.common) : null;

  let slotStyle = item
    ? { '--rc': rarity.color, borderColor: rarity.color + '70', background: rarity.bg }
    : {};

  if (isOver && isDragCompatible) {
    slotStyle = { ...slotStyle, borderColor: 'var(--green)', boxShadow: '0 0 16px rgba(92,221,139,0.5)', background: 'rgba(92,221,139,0.1)' };
  } else if (isOver && !isDragCompatible) {
    slotStyle = { ...slotStyle, borderColor: 'var(--coral)', boxShadow: '0 0 16px rgba(255,101,132,0.4)' };
  }

  return (
    <div
      className={`pd-slot ${item ? 'filled' : 'empty'} ${isOver && isDragCompatible ? 'drop-ready' : ''}`}
      style={slotStyle}
      data-drop-slot={slotMeta.id}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      title={item ? item.name : `${slotMeta.label} — empty`}
    >
      <div className="pd-slot-label">{slotMeta.label}</div>
      {item ? (
        itemIconSrc(item) ? (
          <img src={itemIconSrc(item)} alt={item.name} className="pd-slot-art" draggable={false} />
        ) : (
          <span className="pd-slot-icon">{item.icon}</span>
        )
      ) : (
        <span className="pd-slot-icon">{slotMeta.icon}</span>
      )}
      {item && (
        <div className="pd-slot-name" style={{ color: rarity.color }}>
          {item.name}
        </div>
      )}
      {item && hover && (
        <div className="pd-slot-actions">
          <button className="pd-action-btn unequip" onClick={e => { e.stopPropagation(); onUnequip(); }} title="Unequip">↩</button>
          <button className="pd-action-btn sell"    onClick={e => { e.stopPropagation(); onSell();    }} title={`Sell for ${getSellPrice(item)}g`}>💰</button>
        </div>
      )}
      {!item && (
        <div className="pd-empty-label">Empty</div>
      )}
    </div>
  );
}

function PaperDoll({ equipped, onUnequip, onSell, playerStats, overSlot, draggingItem, user }) {
  const dps = calcDisplayDPS(playerStats);
  const leftSlots  = ['head', 'body', 'legs', 'boots'];
  const rightSlots = ['gloves', 'ring', 'ring2', 'necklace'];
  const slotMeta = Object.fromEntries(EQUIPMENT_SLOTS.map(s => [s.id, s]));

  function isCompatible(slotId) {
    if (!draggingItem) return false;
    const itemSlot = draggingItem.slot;
    // rings can go in ring or ring2
    if (itemSlot === 'ring') return slotId === 'ring' || slotId === 'ring2';
    return itemSlot === slotId;
  }

  return (
    <div className="paper-doll">
      {/* Left column */}
      <div className="pd-column pd-left">
        {leftSlots.map(slotId => (
          <PaperDollSlot
            key={slotId}
            slotMeta={slotMeta[slotId]}
            itemId={equipped[slotId]}
            onUnequip={() => onUnequip(slotId)}
            onSell={() => onSell(slotId)}
            isOver={overSlot === slotId}
            isDragCompatible={isCompatible(slotId)}
          />
        ))}
      </div>

      {/* Character silhouette */}
      <div className="pd-character">
        <div className="pd-char-figure">
          <div className="pd-char-glow" />
          <Avatar
            avatarId={user?.avatarId}
            displayName={user?.displayName}
            size={64}
          />
        </div>
        <div className="pd-char-stats">
          <div className="pd-char-dps">⚔ {dps} DPS</div>
          <div className="pd-char-slots">
            {Object.values(equipped).filter(Boolean).length}/8
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="pd-column pd-right">
        {rightSlots.map(slotId => (
          <PaperDollSlot
            key={slotId}
            slotMeta={slotMeta[slotId]}
            itemId={equipped[slotId]}
            onUnequip={() => onUnequip(slotId)}
            onSell={() => onSell(slotId)}
            isOver={overSlot === slotId}
            isDragCompatible={isCompatible(slotId)}
          />
        ))}
      </div>

      <style>{`
        .paper-doll {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: var(--space-3);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xl);
          padding: var(--space-4);
          align-items: center;
        }

        .pd-column {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        /* Slot tile */
        .pd-slot {
          position: relative;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-2) var(--space-1);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          min-height: 90px;
          transition: all 0.15s var(--ease-out);
          cursor: default;
          overflow: hidden;
        }

        .pd-slot.filled {
          cursor: pointer;
          box-shadow: 0 0 8px rgba(0,0,0,0.3);
        }

        .pd-slot.filled:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.4);
        }

        .pd-slot.empty {
          opacity: 0.45;
          border-style: dashed;
        }

        .pd-slot.drop-ready {
          animation: pulseSlot 0.5s ease infinite alternate;
        }

        @keyframes pulseSlot {
          from { transform: scale(1); }
          to   { transform: scale(1.08); }
        }

        .bag-tile {
          user-select: none;
          cursor: grab;
        }
        .bag-tile:active { cursor: grabbing; }
        .bag-tile.dragging {
          opacity: 0.35;
          transform: scale(0.92);
          transition: all 0.1s;
        }

        .pd-slot-label {
          font-size: 0.55rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-muted);
          line-height: 1;
        }

        .pd-slot-icon {
          font-size: 1.4rem;
          line-height: 1;
          filter: drop-shadow(0 1px 3px rgba(0,0,0,0.4));
        }

        .pd-slot-name {
          font-size: 0.58rem;
          font-weight: 700;
          text-align: center;
          line-height: 1.2;
          max-width: 80px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .pd-empty-label {
          font-size: 0.55rem;
          color: var(--text-muted);
          font-style: italic;
        }

        /* Hover actions */
        .pd-slot-actions {
          position: absolute;
          inset: 0;
          background: rgba(13,12,29,0.85);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          animation: fadeIn 0.1s ease;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .pd-action-btn {
          font-size: 0.85rem;
          padding: 5px 9px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-default);
          background: var(--bg-elevated);
          cursor: pointer;
          transition: all 0.15s;
          font-family: var(--font-body);
          color: var(--text-secondary);
        }
        .pd-action-btn:hover { transform: scale(1.1); }
        .pd-action-btn.unequip:hover { background: var(--bg-card); color: var(--text-primary); }
        .pd-action-btn.sell:hover    { background: var(--gold-dim); border-color: var(--gold-glow); }

        /* Character center */
        .pd-character {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-3);
          padding: 0 var(--space-2);
        }

        .pd-char-figure {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pd-char-glow {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(179,157,219,0.2) 0%, transparent 70%);
          animation: pulse-gold 3s infinite;
        }

        .pd-char-sprite {
          font-size: 3rem;
          filter: drop-shadow(0 0 12px rgba(179,157,219,0.4));
          position: relative;
          z-index: 1;
        }

        .pd-char-stats {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
        }

        .pd-char-dps {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--coral);
          background: var(--coral-dim);
          border: 1px solid rgba(255,101,132,0.3);
          border-radius: var(--radius-full);
          padding: 2px 10px;
          white-space: nowrap;
          font-family: var(--font-display);
        }

        .pd-char-slots {
          font-size: 0.65rem;
          color: var(--text-muted);
          font-weight: 700;
        }

        @media (max-width: 480px) {
          .paper-doll {
            grid-template-columns: 1fr auto 1fr;
            gap: var(--space-2);
            padding: var(--space-3) var(--space-2);
          }
          .pd-slot { min-height: 60px; }
          .pd-slot-icon { font-size: 1.1rem; }
          .pd-char-sprite { font-size: 2.2rem; }
          .pd-char-figure { width: 60px; height: 60px; }
          .pd-slot-name { display: none; }
        }
      `}</style>
    </div>
  );
}

// ─── Main screen ──────────────────────────────────────────
export default function InventoryScreen({ combat, userLevel, onGoldEarned, user }) {
  const [comparing, setComparing] = useState(null);
  const [sellFlash, setSellFlash] = useState('');

  const { equipped, inventory, equipItem, unequipItem, sellItem, sellEquipped, playerStats } = combat;
  const { stats: gearBonuses } = getEquipmentStats(equipped);
  const dps = calcDisplayDPS(playerStats);

  const inventoryItems = inventory.map((id, idx) => ({ item: ITEMS[id], idx })).filter(e => e.item);

  // ── Drag and drop ─────────────────────────────────────────
  const handleDrop = useCallback(({ item, inventoryIndex }, targetSlot) => {
    // Check compatibility
    const compatible = item.slot === targetSlot ||
      (item.slot === 'ring' && (targetSlot === 'ring' || targetSlot === 'ring2'));
    if (!compatible) return;
    equipItem(item.id, targetSlot);
    // Close comparison drawer if it was open for this item
    setComparing(null);
  }, [equipItem]);

  const { dragging, dragPos, overSlot, onMouseDragStart, onTouchDragStart } = useDragDrop({ onDrop: handleDrop });

  function handleSelectBagItem(item, inventoryIndex) {
    setComparing({ item, inventoryIndex });
  }

  // equipItem already handles: removing item from bag + swapping old equipped item back to bag
  function handleEquip(item, inventoryIndex, slot) {
    equipItem(item.id, slot);
    setComparing(null);
  }

  function handleEquipFromDrawer(item, inventoryIndex, slot) {
    equipItem(item.id, slot);
    setComparing(null);
  }

  function handleSellFromDrawer(item, inventoryIndex, price) {
    sellItem(item.id, inventoryIndex, () => {
      if (onGoldEarned) onGoldEarned(price);
    });
    setSellFlash(`Sold ${item.name} for ${price}g`);
    setTimeout(() => setSellFlash(''), 2500);
    setComparing(null);
  }

  function handleSellEquipped(slotId) {
    const itemId = equipped[slotId];
    if (!itemId) return;
    const item = ITEMS[itemId];
    const price = getSellPrice(item);
    sellEquipped(slotId, () => {
      if (onGoldEarned) onGoldEarned(price);
    });
    setSellFlash(`Sold ${item.name} for ${price}g`);
    setTimeout(() => setSellFlash(''), 2500);
  }

  function handleUnequip(slotId) {
    unequipItem(slotId);
  }

  const equippedCount = Object.values(equipped).filter(Boolean).length;

  return (
    <div className="inventory-screen">
      {/* Header */}
      <div className="inv-header">
        <div>
          <h1 className="font-display inv-title">Bag</h1>
          <div className="inv-subtitle">{inventory.length} item{inventory.length !== 1 ? 's' : ''} · {equippedCount}/8 slots equipped</div>
        </div>
        <div className="inv-dps-badge">
          <span>⚔</span>
          <span>{dps} DPS</span>
        </div>
      </div>

      {/* Sell flash */}
      {sellFlash && (
        <div className="sell-flash animate-in">💰 {sellFlash}</div>
      )}

      {/* Drag ghost */}
      {dragging && <DragGhost item={dragging.item} pos={dragPos} />}

      {/* Paper doll — visual equipment layout */}
      <PaperDoll
        equipped={equipped}
        playerStats={playerStats}
        onUnequip={handleUnequip}
        onSell={handleSellEquipped}
        overSlot={overSlot}
        draggingItem={dragging?.item || null}
        user={user}
      />

      {/* Bag items */}
      <div className="inv-bag animate-in">
        {inventoryItems.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🎒</div>
            <div className="empty-title">Bag is empty</div>
            <div className="empty-sub">Defeat monsters or buy from the Shop to earn gear.</div>
          </div>
        ) : (
          <>
            <div className="bag-hint">Tap to compare · Drag to equip</div>
            <div className="bag-grid">
              {inventoryItems.map(({ item, idx }) => (
                <BagTile
                  key={`${item.id}-${idx}`}
                  item={item}
                  inventoryIndex={idx}
                  onSelect={handleSelectBagItem}
                  onSell={(it) => handleSellFromDrawer(it, idx, getSellPrice(it))}
                  onMouseDragStart={onMouseDragStart}
                  onTouchDragStart={onTouchDragStart}
                  isDragging={dragging?.inventoryIndex === idx && dragging?.item?.id === item.id}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Comparison drawer */}
      {comparing && (
        <CompareDrawer
          item={comparing.item}
          inventoryIndex={comparing.inventoryIndex}
          equipped={equipped}
          onEquip={handleEquipFromDrawer}
          onSell={handleSellFromDrawer}
          onClose={() => setComparing(null)}
        />
      )}

      <style>{`
        .inventory-screen {
          padding: var(--space-6) var(--space-6) var(--space-8);
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .inv-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--space-4);
        }

        .inv-title {
          font-size: 1.6rem;
          background: linear-gradient(135deg, var(--amber), var(--gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .inv-subtitle {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .inv-dps-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--coral-dim);
          color: var(--coral);
          border: 1px solid rgba(255,101,132,0.3);
          border-radius: var(--radius-full);
          padding: var(--space-2) var(--space-4);
          font-size: 0.9rem;
          font-weight: 800;
          font-family: var(--font-display);
          flex-shrink: 0;
        }

        .sell-flash {
          background: var(--gold-dim);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-4);
          color: var(--gold);
          font-size: 0.85rem;
          font-weight: 700;
          text-align: center;
        }

        .gear-summary {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-4);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .gear-stat-chip {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 3px 10px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          font-size: 0.72rem;
        }

        .gs-icon  { font-size: 0.8rem; }
        .gs-name  { color: var(--text-muted); font-weight: 600; }
        .gs-val   { color: var(--green); font-weight: 800; }

        .inv-tabs {
          display: flex;
          gap: var(--space-2);
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: var(--space-3);
        }

        /* ── Bag grid ── */
        .inv-bag { display: flex; flex-direction: column; gap: var(--space-3); }

        .bag-hint {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-style: italic;
        }

        .bag-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
          gap: var(--space-2);
        }

        .bag-tile {
          display: flex;
          flex-direction: column;
          background: var(--bg-card);
          border: 1px solid;
          border-radius: var(--radius-lg);
          overflow: hidden;
          cursor: grab;
          transition: all 0.15s var(--ease-out);
          user-select: none;
        }

        .bag-tile:active { cursor: grabbing; }

        .bag-tile:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.4);
        }

        .bt-thumb {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bt-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 42%;
          display: block;
          pointer-events: none;
          transition: transform 0.2s;
        }

        .bag-tile:hover .bt-thumb-img { transform: scale(1.06); }

        .bt-thumb-emoji { font-size: 2.2rem; line-height: 1; }

        .bt-footer {
          padding: 4px 6px;
          display: flex;
          align-items: center;
          gap: 5px;
          background: var(--bg-elevated);
          min-height: 28px;
        }

        .bt-rarity-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .bt-name {
          font-size: 0.62rem;
          font-weight: 700;
          line-height: 1.2;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        /* ── Item card art ── */
        .item-card-art {
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          position: relative;
        }
        .ica-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: var(--radius-md);
        }
        .ica-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
          position: relative;
        }
        .ica-emoji { font-size: 1.6rem; }
        .ica-rarity-dot {
          position: absolute; bottom: 3px; right: 3px;
          width: 7px; height: 7px; border-radius: 50%;
          border: 1.5px solid rgba(0,0,0,0.4);
        }



        /* ── Paper doll slot art ── */
        .pd-slot-art {
          width: 56px;
          height: 56px;
          object-fit: contain;
          border-radius: var(--radius-sm);
          display: block;
          pointer-events: none;
        }

        .bt-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
        }

        .bt-icon { font-size: 1.6rem; }

        .bt-rarity-dot {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1.5px solid var(--bg-card);
        }

        .bt-info { flex: 1; min-width: 0; }
        .bt-name {
          font-size: 0.88rem;
          font-weight: 700;
          line-height: 1.2;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .bt-slot {
          font-size: 0.68rem;
          color: var(--text-muted);
          text-transform: capitalize;
          margin-top: 2px;
        }

        .bt-sell-preview {
          font-size: 0.72rem;
          color: var(--gold);
          font-weight: 700;
          opacity: 0.6;
          flex-shrink: 0;
        }

        /* ── Equipped slots ── */
        .slots-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: var(--space-3);
        }

        .equip-slot-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .equip-slot-card.has-item { border-color: var(--border-default); }
        .equip-slot-card.empty { opacity: 0.55; }

        .esc-slot-label {
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .esc-empty {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-style: italic;
          text-align: center;
          padding: var(--space-3);
          border: 1px dashed var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .esc-item-top {
          display: flex;
          align-items: flex-start;
          gap: var(--space-2);
        }

        .esc-item-icon { font-size: 1.5rem; flex-shrink: 0; }
        .esc-item-name { font-size: 0.85rem; font-weight: 700; margin-bottom: 3px; }

        .esc-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .esc-stat-chip {
          font-size: 0.68rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 2px 6px;
          color: var(--text-secondary);
          font-weight: 700;
        }

        .esc-flavor {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-style: italic;
          line-height: 1.4;
        }

        .esc-actions {
          display: flex;
          gap: var(--space-2);
          padding-top: var(--space-2);
          border-top: 1px solid var(--border-subtle);
        }

        .esc-btn {
          font-size: 0.72rem;
          padding: var(--space-1) var(--space-3);
        }

        .sell-btn {
          color: var(--gold);
          border-color: var(--gold-glow);
          background: var(--gold-dim);
        }
        .sell-btn:hover {
          background: rgba(245,200,66,0.25);
          transform: none;
        }

        /* Shared badges */
        .rarity-badge {
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          padding: 1px 6px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .slot-badge {
          font-size: 0.6rem;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: var(--radius-full);
          background: var(--bg-elevated);
          color: var(--text-muted);
          border: 1px solid var(--border-subtle);
          text-transform: capitalize;
        }

        @media (max-width: 600px) {
          .inventory-screen { padding: var(--space-4) var(--space-4) var(--space-8); }
          .slots-grid { grid-template-columns: 1fr; }
          .inv-title { font-size: 1.3rem; }
        }
      `}</style>
    </div>
  );
}
