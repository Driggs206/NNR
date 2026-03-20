// ============================================================
// COMBAT STRIP — Persistent top-of-screen idle combat bar
// ============================================================

import React, { useState, useEffect } from 'react';
import { calcDisplayDPS } from '../engine/combatEngine';
import { CombatLog } from './CombatToasts';
import Avatar from './Avatar';

export default function CombatStrip({
  monster,
  currentHp,
  playerStats,
  activeBuffs = [],
  floatingNumbers = [],
  momentumMult = 1,
  lowEnergyMode = false,
  monstersKilled = 0,
  onToggleLowEnergy,
  combatLog = [],
  user,
}) {
  const [shake, setShake] = useState(false);
  const hpPercent = Math.max(0, (currentHp / monster.max_hp) * 100);
  const dps = calcDisplayDPS(playerStats);

  // Shake the monster on recent float spawns
  useEffect(() => {
    if (floatingNumbers.length > 0) {
      setShake(true);
      const t = setTimeout(() => setShake(false), 200);
      return () => clearTimeout(t);
    }
  }, [floatingNumbers.length]);

  // HP bar color
  const hpColor = hpPercent > 50 ? '#5CDD8B' : hpPercent > 25 ? '#F5A623' : '#FF3860';

  // Phase warning
  const isPhaseTransition = monster.phases?.some(p =>
    Math.abs(hpPercent / 100 - p.hp_threshold) < 0.08
  );

  return (
    <div className={`combat-strip ${lowEnergyMode ? 'low-energy' : ''}`}>
      {/* Monster section */}
      <div className="combat-monster-section">
        <div className="combat-monster-info">
          <div className="combat-monster-name" style={{ color: monster.color }}>
            {monster.name}
            {monster.isBoss && <span className="boss-tag">BOSS</span>}
          </div>
          <div className="combat-hp-row">
            <div className="combat-hp-bar-track">
              <div
                className="combat-hp-bar-fill"
                style={{ width: `${hpPercent}%`, background: hpColor, boxShadow: `0 0 8px ${hpColor}60` }}
              />
              {isPhaseTransition && <div className="phase-warn-line" style={{ left: `${monster.phases?.[0]?.hp_threshold * 100}%` }} />}
            </div>
            <div className="combat-hp-text">
              {currentHp.toLocaleString()} / {monster.max_hp.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Monster sprite (placeholder art) */}
        <div className={`combat-arena ${shake ? 'shake' : ''}`}>
          {/* Player sprite */}
          <div className="player-sprite">
            <div className="sprite-figure player-figure">
              <Avatar avatarId={user?.avatarId} displayName={user?.displayName} size={48} />
            </div>
            <div className="sprite-label">You</div>
            {activeBuffs.length > 0 && (
              <div className="buff-indicators">
                {activeBuffs.map(b => (
                  <span key={b.id} className="buff-pip" title={b.label}>{b.icon}</span>
                ))}
              </div>
            )}
          </div>

          {/* Attack arrows */}
          <div className="attack-arrows">
            <div className="arrow-row">
              <div className="attack-arrow" style={{ animationDelay: '0ms' }}>→</div>
              <div className="attack-arrow" style={{ animationDelay: '300ms' }}>→</div>
              <div className="attack-arrow" style={{ animationDelay: '600ms' }}>→</div>
            </div>
          </div>

          {/* Monster sprite */}
          <div className="monster-sprite">
            <div className={`sprite-figure monster-figure ${shake ? 'monster-hit' : ''}`}
              style={{ fontSize: monster.isBoss ? '2.2rem' : '1.8rem' }}>
              {monster.sprite}
            </div>
            <div className="sprite-label" style={{ color: monster.color }}>
              {monster.isBoss ? '⚡ BOSS' : `Tier ${monster.tier}`}
            </div>
          </div>

          {/* Floating damage numbers */}
          {floatingNumbers.map(f => (
            <div
              key={f.id}
              className={`float-dmg ${f.isCrit ? 'crit' : ''} ${f.isOffline ? 'offline' : ''}`}
              style={{ left: `${f.x}%` }}
            >
              {f.isOffline ? `+${f.value} (idle)` : f.isCrit ? `${f.value}!` : f.value}
            </div>
          ))}
        </div>
      </div>

      {/* Right: stats panel */}
      <div className="combat-stats-panel">
        <div className="combat-stat-row">
          <span className="cs-label">⚔ DPS</span>
          <span className="cs-value">{dps}</span>
        </div>
        <div className="combat-stat-row">
          <span className="cs-label">💥 ATK</span>
          <span className="cs-value">{Math.round(playerStats.attack)}</span>
        </div>
        <div className="combat-stat-row">
          <span className="cs-label">🎯 Crit</span>
          <span className="cs-value">{Math.round(playerStats.critChance * 100)}%</span>
        </div>
        {momentumMult > 1 && (
          <div className="combat-stat-row momentum">
            <span className="cs-label">🔥 Momentum</span>
            <span className="cs-value">{momentumMult.toFixed(1)}×</span>
          </div>
        )}
        <div className="combat-stat-row muted">
          <span className="cs-label">☠ Kills</span>
          <span className="cs-value">{monstersKilled}</span>
        </div>
        <div className="combat-log-row">
          <button
            className={`low-energy-btn ${lowEnergyMode ? 'active' : ''}`}
            onClick={onToggleLowEnergy}
            title="Low Energy Mode"
          >
            {lowEnergyMode ? '💙 Low E' : '💙 Low E'}
          </button>
          <CombatLog log={combatLog} />
        </div>
      </div>

      <style>{`
        .combat-strip {
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-subtle);
          padding: 10px 20px;
          display: flex;
          gap: 16px;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 50;
          min-height: 88px;
          overflow: hidden;
        }

        .combat-strip.low-energy {
          border-bottom-color: rgba(79,195,247,0.3);
          background: linear-gradient(90deg, var(--bg-surface), rgba(79,195,247,0.03));
        }

        /* Monster section */
        .combat-monster-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 0;
        }

        .combat-monster-info {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .combat-monster-name {
          font-family: var(--font-display);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        .boss-tag {
          display: inline-block;
          background: var(--gold-dim);
          color: var(--gold);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-full);
          padding: 1px 6px;
          font-size: 0.62rem;
          font-weight: 800;
          margin-left: 6px;
          letter-spacing: 0.08em;
          vertical-align: middle;
        }

        .combat-hp-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          min-width: 120px;
        }

        .combat-hp-bar-track {
          flex: 1;
          height: 10px;
          background: var(--bg-elevated);
          border-radius: var(--radius-full);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
          position: relative;
        }

        .combat-hp-bar-fill {
          height: 100%;
          border-radius: var(--radius-full);
          transition: width 0.5s ease, background 0.5s ease;
        }

        .phase-warn-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--gold);
          opacity: 0.6;
        }

        .combat-hp-text {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 700;
          white-space: nowrap;
          font-variant-numeric: tabular-nums;
        }

        /* Arena */
        .combat-arena {
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          height: 52px;
        }

        .combat-arena.shake {
          animation: combatShake 0.15s ease;
        }

        @keyframes combatShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }

        .player-sprite, .monster-sprite {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          position: relative;
        }

        .sprite-figure {
          font-size: 1.8rem;
          line-height: 1;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
          transition: transform 0.1s;
        }

        .monster-figure.monster-hit {
          filter: drop-shadow(0 0 8px #FF3860) brightness(1.3);
          transform: scale(0.9);
        }

        .sprite-label {
          font-size: 0.6rem;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .buff-indicators {
          position: absolute;
          top: -4px;
          right: -8px;
          display: flex;
          gap: 2px;
        }

        .buff-pip {
          font-size: 0.7rem;
          filter: drop-shadow(0 0 4px rgba(245,200,66,0.6));
        }

        /* Attack arrows */
        .attack-arrows {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .arrow-row {
          display: flex;
          gap: 4px;
        }

        .attack-arrow {
          color: var(--xp-blue);
          font-size: 0.9rem;
          opacity: 0;
          animation: arrowSlide 1.5s ease-in-out infinite;
          font-weight: 700;
        }

        @keyframes arrowSlide {
          0%   { opacity: 0; transform: translateX(-6px); }
          30%  { opacity: 0.8; }
          70%  { opacity: 0.8; }
          100% { opacity: 0; transform: translateX(6px); }
        }

        /* Floating damage numbers */
        .float-dmg {
          position: absolute;
          top: 4px;
          pointer-events: none;
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
          text-shadow: 0 0 8px rgba(0,0,0,0.8);
          animation: floatDmg 1.3s ease-out forwards;
          z-index: 10;
          white-space: nowrap;
        }

        .float-dmg.crit {
          color: var(--gold);
          font-size: 1.05rem;
          text-shadow: 0 0 12px var(--gold-glow);
        }

        .float-dmg.offline {
          color: var(--xp-blue);
          font-size: 0.75rem;
        }

        @keyframes floatDmg {
          0%   { opacity: 1; transform: translateY(0) scale(1); }
          20%  { transform: translateY(-8px) scale(1.1); }
          100% { opacity: 0; transform: translateY(-32px) scale(0.8); }
        }

        /* Stats panel */
        .combat-stats-panel {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 110px;
          flex-shrink: 0;
          border-left: 1px solid var(--border-subtle);
          padding-left: 14px;
        }

        .combat-stat-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
        }

        .combat-stat-row.momentum .cs-value { color: var(--amber); }
        .combat-stat-row.muted .cs-label,
        .combat-stat-row.muted .cs-value { opacity: 0.5; }

        .cs-label {
          font-size: 0.65rem;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        .cs-value {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-primary);
          font-variant-numeric: tabular-nums;
        }

        .low-energy-btn { margin-top: 0; }

        .combat-log-row {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 4px;
        }
          font-weight: 700;
          font-family: var(--font-body);
          letter-spacing: 0.03em;
          padding: 3px 8px;
          border-radius: var(--radius-full);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.15s;
          white-space: nowrap;
        }

        .low-energy-btn:hover { border-color: var(--border-default); color: var(--xp-blue); }
        .low-energy-btn.active {
          background: var(--xp-blue-dim);
          border-color: rgba(79,195,247,0.4);
          color: var(--xp-blue);
        }

        @media (max-width: 600px) {
          .combat-stats-panel { display: none; }
          .combat-strip { padding: 8px 12px; min-height: 70px; }
          .combat-monster-name { font-size: 0.75rem; }
          .combat-hp-text { display: none; }
          /* Keep log toggle visible on mobile */
          .combat-log-row { margin-top: 2px; }
          .log-toggle { font-size: 0.6rem; padding: 2px 6px; }
        }
      `}</style>
    </div>
  );
}
