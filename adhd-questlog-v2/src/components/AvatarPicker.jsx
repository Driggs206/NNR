// ============================================================
// AVATAR PICKER — Profile picture selection modal
// Shows 8 default + unlockable avatars locked with hint
// ============================================================

import React, { useState } from 'react';
import { AVATARS, getUnlockedAvatars, getAvatarGroups } from '../data/avatars';

function AvatarTile({ avatar, selected, unlocked, onSelect }) {
  return (
    <div
      className={`av-tile ${selected ? 'selected' : ''} ${!unlocked ? 'locked' : ''}`}
      onClick={() => unlocked && onSelect(avatar.id)}
      title={unlocked ? avatar.description : `🔒 ${avatar.unlockHint}`}
    >
      {/* Art or emoji */}
      <div className="av-tile-icon">
        {avatar.art
          ? <img src={avatar.art} alt={avatar.name} className="av-tile-img" />
          : <span className="av-tile-emoji">{avatar.icon}</span>
        }
        {!unlocked && <div className="av-tile-lock">🔒</div>}
        {selected && <div className="av-tile-check">✓</div>}
      </div>
      <div className="av-tile-name">{avatar.name}</div>
      {!unlocked && (
        <div className="av-tile-hint">{avatar.unlockHint}</div>
      )}
    </div>
  );
}

export default function AvatarPicker({ currentAvatar, earnedBadgeIds = [], onSelect, onClose }) {
  const [selected, setSelected] = useState(currentAvatar);
  const [tab, setTab] = useState('unlocked');

  const allAvatars   = Object.values(AVATARS);
  const unlocked     = allAvatars.filter(a => a.unlocked || earnedBadgeIds.includes(a.unlockCondition));
  const locked       = allAvatars.filter(a => !a.unlocked && !earnedBadgeIds.includes(a.unlockCondition));
  const groups       = getAvatarGroups(earnedBadgeIds);
  const unlockedGroups = Object.entries(groups).filter(([, avs]) => avs.some(a => a.isUnlocked));
  const lockedGroups   = Object.entries(groups).filter(([, avs]) => avs.every(a => !a.isUnlocked));

  function handleConfirm() {
    onSelect(selected);
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="avp-modal scale-in">
        <div className="avp-header">
          <div>
            <div className="avp-title font-display">Choose Your Avatar</div>
            <div className="avp-subtitle">{unlocked.length} unlocked · {locked.length} to discover</div>
          </div>
          <button className="btn btn-ghost avp-close" onClick={onClose}>✕</button>
        </div>

        {/* Tabs */}
        <div className="avp-tabs">
          <button className={`filter-tab ${tab === 'unlocked' ? 'active' : ''}`} onClick={() => setTab('unlocked')}>
            Unlocked ({unlocked.length})
          </button>
          <button className={`filter-tab ${tab === 'locked' ? 'active' : ''}`} onClick={() => setTab('locked')}>
            🔒 Locked ({locked.length})
          </button>
        </div>

        {/* Preview of selected */}
        {tab === 'unlocked' && (
          <div className="avp-preview">
            {(() => {
              const av = AVATARS[selected];
              return av ? (
                <>
                  <div className="avp-preview-icon">
                    {av.art
                      ? <img src={av.art} alt={av.name} />
                      : <span>{av.icon}</span>
                    }
                  </div>
                  <div className="avp-preview-info">
                    <div className="avp-preview-name">{av.name}</div>
                    <div className="avp-preview-desc">{av.description}</div>
                  </div>
                </>
              ) : null;
            })()}
          </div>
        )}

        {/* Grouped grid — pairs side by side */}
        <div className="avp-groups">
          {(tab === 'unlocked' ? unlockedGroups : lockedGroups).map(([archetype, avs]) => (
            <div key={archetype} className="avp-group">
              <div className="avp-group-label">{archetype}</div>
              <div className="avp-group-pair">
                {avs.map(av => (
                  <AvatarTile
                    key={av.id}
                    avatar={av}
                    selected={selected === av.id}
                    unlocked={av.isUnlocked}
                    onSelect={av.isUnlocked ? setSelected : () => {}}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Confirm */}
        {tab === 'unlocked' && (
          <button
            className="btn btn-primary avp-confirm"
            onClick={handleConfirm}
            disabled={selected === currentAvatar}
          >
            {selected === currentAvatar ? 'Already selected' : `✓ Use ${AVATARS[selected]?.name || 'this avatar'}`}
          </button>
        )}
      </div>

      <style>{`
        .avp-modal {
          background: var(--bg-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-xl);
          padding: var(--space-5);
          width: 100%;
          max-width: 520px;
          max-height: 88dvh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          box-shadow: var(--shadow-lg);
        }

        .avp-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .avp-title    { font-size: 1.3rem; color: var(--text-primary); }
        .avp-subtitle { font-size: 0.78rem; color: var(--text-muted); margin-top: 2px; }
        .avp-close    { color: var(--text-muted); padding: 4px 8px; }

        .avp-tabs {
          display: flex;
          gap: var(--space-2);
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: var(--space-2);
        }

        /* Preview strip */
        .avp-preview {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          background: var(--bg-card);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-lg);
          padding: var(--space-3) var(--space-4);
          min-height: 64px;
        }

        .avp-preview-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--purple), var(--xp-blue));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          flex-shrink: 0;
          box-shadow: 0 0 16px rgba(179,157,219,0.3);
          overflow: hidden;
        }

        .avp-preview-icon img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avp-preview-name { font-size: 0.95rem; font-weight: 700; color: var(--gold); }
        .avp-preview-desc { font-size: 0.78rem; color: var(--text-muted); margin-top: 3px; font-style: italic; }

        /* Grid */
        .avp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-3);
        }

        /* Grouped layout */
        .avp-groups {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          max-height: 420px;
          overflow-y: auto;
          padding-right: 2px;
        }

        .avp-group { display: flex; flex-direction: column; gap: var(--space-2); }

        .avp-group-label {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          padding: 0 2px;
        }

        .avp-group-pair {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-2);
        }

        .av-tile {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-3) var(--space-2);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
          cursor: pointer;
          transition: all 0.15s var(--ease-spring);
          text-align: center;
          position: relative;
        }

        .av-tile:hover:not(.locked) {
          transform: translateY(-3px);
          border-color: var(--purple);
          box-shadow: 0 4px 12px rgba(179,157,219,0.2);
        }

        .av-tile.selected {
          border-color: var(--gold);
          background: var(--gold-dim);
          box-shadow: 0 0 16px var(--gold-glow);
        }

        .av-tile.locked {
          opacity: 0.5;
          cursor: default;
          filter: grayscale(0.4);
        }

        .av-tile-icon {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--purple), var(--xp-blue));
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .av-tile-emoji { font-size: 1.5rem; }

        .av-tile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .av-tile-lock {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(13,12,29,0.65);
          font-size: 1rem;
          border-radius: 50%;
        }

        .av-tile-check {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(245,200,66,0.35);
          color: var(--gold);
          font-size: 1.1rem;
          font-weight: 900;
          border-radius: 50%;
        }

        .av-tile-name {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-secondary);
          line-height: 1.2;
        }

        .av-tile-hint {
          font-size: 0.55rem;
          color: var(--text-muted);
          font-style: italic;
          line-height: 1.3;
        }

        .avp-confirm {
          width: 100%;
          justify-content: center;
          padding: var(--space-4);
          font-size: 0.95rem;
        }

        @media (max-width: 480px) {
          .avp-modal {
            border-radius: var(--radius-xl) var(--radius-xl) 0 0;
            max-height: 92dvh;
            position: fixed;
            bottom: 0; left: 0; right: 0;
            max-width: 100%;
          }
          .modal-overlay { align-items: flex-end; }
          .avp-grid { grid-template-columns: repeat(4, 1fr); gap: var(--space-2); }
          .av-tile-icon { width: 40px; height: 40px; }
          .av-tile-emoji { font-size: 1.2rem; }
        }
      `}</style>
    </div>
  );
}
