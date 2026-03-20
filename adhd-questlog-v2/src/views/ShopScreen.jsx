// ============================================================
// SHOP SCREEN — Static starter shop + rotating daily shop
// ============================================================

import React, { useState, useEffect } from 'react';
import { ITEMS, RARITY_COLORS } from '../data/items';
import { STATIC_SHOP, getDailyPool, msUntilRefresh, ROTATING_POOLS } from '../data/shop';

const REFRESH_COST = 50;

function formatCountdown(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  return `${h}h ${m}m`;
}

function itemArtSrc(item) {
  if (!item?.art) return null;
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${item.art.replace(/^\//, '')}`;
}

function ShopItem({ itemId, price, currency, userGold, onBuy, owned }) {
  const item = ITEMS[itemId];
  if (!item) return null;
  const rarity = RARITY_COLORS[item.rarity] || RARITY_COLORS.common;
  const canAfford = userGold >= price;
  const [buying, setBuying] = useState(false);
  const [bought, setBought] = useState(false);

  function handleBuy() {
    if (!canAfford || buying || bought) return;
    setBuying(true);
    const success = onBuy(itemId, price);
    if (success) {
      setBought(true);
    }
    setTimeout(() => setBuying(false), 300);
  }

  return (
    <div className={`shop-item ${bought ? 'bought' : ''} ${!canAfford ? 'cant-afford' : ''}`}
      style={{ '--rc': rarity.color, borderColor: bought ? 'var(--green)' : rarity.color }}>
      <div className="shop-item-top">
        {itemArtSrc(item) ? (
          <div className="shop-item-art-wrap">
            <img src={itemArtSrc(item)} alt={item.name} className="shop-item-art" draggable={false} />
          </div>
        ) : (
          <span className="shop-item-icon">{item.icon}</span>
        )}
        <div className="shop-item-header">
          <div className="shop-item-name" style={{ color: rarity.color }}>{item.name}</div>
          <span className="rarity-badge" style={{ background: rarity.bg, color: rarity.color }}>
            {rarity.label}
          </span>
        </div>
      </div>

      <div className="shop-item-stats">
        {Object.entries(item.stats || {}).map(([stat, val]) => (
          <span key={stat} className="shop-stat-chip">
            <span className="ssc-name">{stat}</span>
            <span className="ssc-val">
              {stat === 'critChance' || stat === 'critDamage' || stat === 'speed'
                ? `+${(val * 100).toFixed(0)}%`
                : `+${val}`}
            </span>
          </span>
        ))}
      </div>

      {item.flavor && (
        <div className="shop-item-flavor">"{item.flavor}"</div>
      )}

      <div className="shop-item-footer">
        <div className={`shop-price ${canAfford ? '' : 'unaffordable'}`}>
          💰 {price} gold
        </div>
        {bought ? (
          <div className="shop-bought-badge">✓ Added to bag</div>
        ) : (
          <button
            className={`btn ${canAfford ? 'btn-primary' : 'btn-secondary'} shop-buy-btn`}
            onClick={handleBuy}
            disabled={!canAfford || buying}
          >
            {buying ? '...' : canAfford ? 'Buy' : 'Need gold'}
          </button>
        )}
      </div>
    </div>
  );
}

export default function ShopScreen({ userGold, onBuy, onRefreshSpend }) {
  const [timeLeft, setTimeLeft] = useState(msUntilRefresh());
  const [manualOffset, setManualOffset] = useState(0); // shifts pool index
  const [refreshFlash, setRefreshFlash] = useState(false);

  const dailyPool = (() => {
    const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    return ROTATING_POOLS[(dayIndex + manualOffset) % ROTATING_POOLS.length];
  })();

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(msUntilRefresh()), 60_000);
    return () => clearInterval(t);
  }, []);

  function handleManualRefresh() {
    if (userGold < REFRESH_COST) return;
    onRefreshSpend(REFRESH_COST);
    setManualOffset(o => o + 1);
    setRefreshFlash(true);
    setTimeout(() => setRefreshFlash(false), 600);
  }

  return (
    <div className="shop-screen">
      <div className="shop-header">
        <div>
          <h1 className="font-display shop-title">🛒 Shop</h1>
          <div className="shop-subtitle">Gear up. The monsters aren't getting weaker.</div>
        </div>
        <div className="gold-display">
          <span>💰</span>
          <span className="gold-amount">{userGold}</span>
          <span className="gold-label">gold</span>
        </div>
      </div>

      {/* Daily rotating shop */}
      <div className="shop-section">
        <div className="shop-section-header">
          <div className="shop-section-title">
            <span className="section-icon">⭐</span>
            <span className="font-display">Daily Arrivals</span>
            <span className="recommended-tag">RECOMMENDED</span>
          </div>
          <div className="refresh-row">
            <div className="refresh-countdown">
              🔄 Free in {formatCountdown(timeLeft)}
            </div>
            <button
              className={`refresh-btn ${refreshFlash ? 'flash' : ''} ${userGold < REFRESH_COST ? 'cant-afford' : ''}`}
              onClick={handleManualRefresh}
              disabled={userGold < REFRESH_COST}
              title={`Spend ${REFRESH_COST} gold to refresh the shop now`}
            >
              💰 {REFRESH_COST}g — Refresh now
            </button>
          </div>
        </div>
        <div className={`shop-items-grid ${refreshFlash ? 'flash-grid' : ''}`}>
          {dailyPool.map(entry => (
            <ShopItem
              key={entry.item_id}
              itemId={entry.item_id}
              price={entry.price}
              currency={entry.currency}
              userGold={userGold}
              onBuy={onBuy}
            />
          ))}
        </div>
      </div>

      {/* Static shop */}
      <div className="shop-section">
        <div className="shop-section-header">
          <div className="shop-section-title">
            <span className="section-icon">🛍</span>
            <span className="font-display">General Store</span>
            <span className="always-tag">ALWAYS OPEN</span>
          </div>
        </div>
        <div className="shop-items-grid">
          {STATIC_SHOP.items.map(entry => (
            <ShopItem
              key={entry.item_id}
              itemId={entry.item_id}
              price={entry.price}
              currency={entry.currency}
              userGold={userGold}
              onBuy={onBuy}
            />
          ))}
        </div>
      </div>

      <div className="shop-tip">
        💡 Items go directly to your bag. Equip them in the Equipment screen.
      </div>

      <style>{`
        .shop-screen {
          padding: var(--space-8);
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .shop-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--space-4);
          flex-wrap: wrap;
        }

        .shop-title {
          font-size: 1.8rem;
          background: linear-gradient(135deg, var(--gold), var(--amber));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .shop-subtitle { color: var(--text-secondary); font-size: 0.88rem; margin-top: 4px; }

        .gold-display {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--gold-dim);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-full);
          padding: var(--space-3) var(--space-5);
        }

        .gold-amount { font-size: 1.2rem; font-weight: 800; color: var(--gold); font-family: var(--font-display); }
        .gold-label  { font-size: 0.75rem; color: var(--gold); opacity: 0.7; }

        .shop-section { display: flex; flex-direction: column; gap: var(--space-4); }

        .shop-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: var(--space-2);
        }

        .shop-section-title {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 1rem;
          color: var(--text-primary);
        }

        .section-icon { font-size: 1.1rem; }

        .recommended-tag {
          font-size: 0.6rem; font-weight: 800; letter-spacing: 0.1em;
          background: var(--gold-dim); color: var(--gold);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-full); padding: 2px 8px;
        }

        .always-tag {
          font-size: 0.6rem; font-weight: 800; letter-spacing: 0.1em;
          background: var(--green-dim); color: var(--green);
          border: 1px solid rgba(92,221,139,0.3);
          border-radius: var(--radius-full); padding: 2px 8px;
        }

        .refresh-row {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }

        .refresh-btn {
          font-size: 0.72rem;
          font-weight: 700;
          font-family: var(--font-body);
          padding: 5px 12px;
          border-radius: var(--radius-full);
          background: var(--gold-dim);
          border: 1px solid var(--gold-glow);
          color: var(--gold);
          cursor: pointer;
          transition: all 0.15s;
          white-space: nowrap;
        }
        .refresh-btn:hover:not(:disabled) {
          background: rgba(245,200,66,0.25);
          transform: translateY(-1px);
        }
        .refresh-btn:disabled, .refresh-btn.cant-afford {
          opacity: 0.4;
          cursor: not-allowed;
          transform: none;
        }
        .refresh-btn.flash {
          background: var(--green-dim);
          border-color: rgba(92,221,139,0.4);
          color: var(--green);
          animation: scaleIn 0.25s var(--ease-spring);
        }
        .flash-grid {
          animation: fadeInUp 0.3s var(--ease-out);
        }
          font-size: 0.72rem;
          color: var(--text-muted);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          padding: 3px 10px;
        }

        .shop-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: var(--space-3);
        }

        .shop-item {
          background: var(--bg-card);
          border: 1px solid;
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          transition: all 0.2s var(--ease-out);
        }

        .shop-item:hover:not(.bought):not(.cant-afford) {
          background: var(--bg-card-hover);
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .shop-item.bought {
          border-color: var(--green) !important;
          background: var(--green-dim);
        }

        .shop-item.cant-afford { opacity: 0.65; }

        .shop-item-top {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
        }

        .shop-item-icon { font-size: 1.6rem; flex-shrink: 0; }

        .shop-item-art-wrap {
          width: 56px;
          flex-shrink: 0;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .shop-item-art {
          width: 100%;
          display: block;
          object-fit: cover;
          pointer-events: none;
        }

        .shop-item-header { flex: 1; }
        .shop-item-name { font-size: 0.9rem; font-weight: 700; line-height: 1.2; margin-bottom: 4px; }

        .shop-item-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .shop-stat-chip {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 0.7rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 2px 6px;
        }

        .ssc-name { color: var(--text-muted); text-transform: capitalize; }
        .ssc-val  { color: var(--green); font-weight: 800; }

        .shop-item-flavor {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-style: italic;
          line-height: 1.4;
        }

        .shop-item-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-2);
          padding-top: var(--space-2);
          border-top: 1px solid var(--border-subtle);
        }

        .shop-price { font-size: 0.88rem; font-weight: 800; color: var(--gold); }
        .shop-price.unaffordable { color: var(--text-muted); }

        .shop-buy-btn { font-size: 0.78rem; padding: var(--space-1) var(--space-4); }

        .shop-bought-badge {
          font-size: 0.78rem; font-weight: 800; color: var(--green);
        }

        .shop-tip {
          font-size: 0.78rem;
          color: var(--text-muted);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-4);
        }

        @media (max-width: 600px) {
          .shop-screen { padding: var(--space-4); }
          .shop-items-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
