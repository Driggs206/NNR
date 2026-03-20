// ============================================================
// AVATAR — Reusable avatar display
// Shows art if available, falls back to emoji, then initials
// ============================================================

import React from 'react';
import { getAvatar } from '../data/avatars';

export default function Avatar({ avatarId, displayName = '?', size = 40, onClick, className = '' }) {
  const avatar  = getAvatar(avatarId);
  const baseUrl = import.meta.env.BASE_URL || '/';
  const artSrc  = avatar?.art ? `${baseUrl}${avatar.art.replace(/^\//, '')}` : null;
  const initial = displayName?.[0]?.toUpperCase() || '?';

  return (
    <div
      className={`avatar-display ${className} ${onClick ? 'clickable' : ''}`}
      style={{ width: size, height: size, borderRadius: '50%', flexShrink: 0 }}
      onClick={onClick}
      title={avatar?.name || displayName}
    >
      {artSrc ? (
        <img
          src={artSrc}
          alt={avatar.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
        />
      ) : avatar?.icon ? (
        <span className="avatar-emoji" style={{ fontSize: size * 0.45 }}>
          {avatar.icon}
        </span>
      ) : (
        <span className="avatar-initial" style={{ fontSize: size * 0.4 }}>
          {initial}
        </span>
      )}

      <style>{`
        .avatar-display {
          background: linear-gradient(135deg, var(--purple), var(--xp-blue));
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 0 12px rgba(179,157,219,0.2);
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .avatar-display.clickable { cursor: pointer; }
        .avatar-display.clickable:hover {
          transform: scale(1.06);
          box-shadow: 0 0 18px rgba(179,157,219,0.35);
        }
        .avatar-emoji, .avatar-initial {
          color: white;
          font-weight: 800;
          line-height: 1;
          user-select: none;
        }
      `}</style>
    </div>
  );
}
