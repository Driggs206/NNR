// ============================================================
// SETTINGS SCREEN
// Avatar, display name, preferences, account, sign out
// ============================================================

import React, { useState, useCallback } from 'react';
import Avatar from '../components/Avatar';
import AvatarPicker from '../components/AvatarPicker';
import { updateDisplayName, updateAvatar } from '../lib/db';
import { isSupabaseReady } from '../lib/supabase';

// ── Section wrapper ───────────────────────────────────────
function Section({ title, children }) {
  return (
    <div className="settings-section">
      <div className="settings-section-title">{title}</div>
      <div className="settings-section-body">{children}</div>
    </div>
  );
}

// ── Row ───────────────────────────────────────────────────
function SettingsRow({ icon, label, sublabel, onClick, value, danger }) {
  return (
    <div className={`settings-row ${danger ? 'danger' : ''} ${onClick ? 'clickable' : ''}`} onClick={onClick}>
      <span className="settings-row-icon">{icon}</span>
      <div className="settings-row-text">
        <div className="settings-row-label">{label}</div>
        {sublabel && <div className="settings-row-sub">{sublabel}</div>}
      </div>
      {value && <div className="settings-row-value">{value}</div>}
      {onClick && !danger && <span className="settings-row-chevron">›</span>}
    </div>
  );
}

// ── Toggle row ────────────────────────────────────────────
function ToggleRow({ icon, label, sublabel, checked, onChange }) {
  return (
    <div className="settings-row clickable" onClick={() => onChange(!checked)}>
      <span className="settings-row-icon">{icon}</span>
      <div className="settings-row-text">
        <div className="settings-row-label">{label}</div>
        {sublabel && <div className="settings-row-sub">{sublabel}</div>}
      </div>
      <div className={`settings-toggle ${checked ? 'on' : ''}`}>
        <div className="settings-toggle-knob" />
      </div>
    </div>
  );
}

// ── Main screen ───────────────────────────────────────────
export default function SettingsScreen({
  user, userId, earnedBadgeIds = [],
  onAvatarChange, onDisplayNameChange,
  onSignOut, isSupabaseConnected,
}) {
  const [showAvatarPicker, setShowAvatarPicker]   = useState(false);
  const [editingName, setEditingName]             = useState(false);
  const [nameInput, setNameInput]                 = useState(user.displayName);
  const [nameSaving, setNameSaving]               = useState(false);
  const [nameError, setNameError]                 = useState('');
  const [nameSaved, setNameSaved]                 = useState(false);

  // Preferences stored in localStorage
  const [reducedMotion, setReducedMotion]   = useState(() => localStorage.getItem('dq_reduced_motion') === 'true');
  const [soundEnabled, setSoundEnabled]     = useState(() => localStorage.getItem('dq_sound') !== 'false');
  const [combatToasts, setCombatToasts]     = useState(() => localStorage.getItem('dq_combat_toasts') !== 'false');
  const [friendNotifs, setFriendNotifs]     = useState(() => localStorage.getItem('dq_friend_notifs') !== 'false');

  function setPref(key, value, setter) {
    setter(value);
    localStorage.setItem(key, String(value));
  }

  async function handleSaveName() {
    const trimmed = nameInput.trim();
    if (!trimmed) { setNameError('Name cannot be empty.'); return; }
    if (trimmed.length > 24) { setNameError('Max 24 characters.'); return; }
    if (trimmed === user.displayName) { setEditingName(false); return; }
    setNameSaving(true);
    setNameError('');
    if (isSupabaseReady) await updateDisplayName(userId, trimmed);
    onDisplayNameChange(trimmed);
    setNameSaving(false);
    setNameSaved(true);
    setEditingName(false);
    setTimeout(() => setNameSaved(false), 3000);
  }

  const handleAvatarSelect = useCallback(async (avatarId) => {
    onAvatarChange(avatarId);
    if (isSupabaseReady && userId) await updateAvatar(userId, avatarId);
  }, [onAvatarChange, userId]);

  const xpPercent = Math.round((user.xp / user.xpToNext) * 100);

  return (
    <div className="settings-screen">
      {/* Profile hero */}
      <div className="settings-hero">
        <div className="settings-avatar-wrap" onClick={() => setShowAvatarPicker(true)}>
          <Avatar avatarId={user.avatarId} displayName={user.displayName} size={80} />
          <div className="settings-avatar-edit">✎</div>
          <div className="settings-level-badge font-display">{user.level}</div>
        </div>
        <div className="settings-hero-info">
          {editingName ? (
            <div className="settings-name-edit">
              <input
                className="settings-name-input"
                value={nameInput}
                onChange={e => { setNameInput(e.target.value); setNameError(''); }}
                maxLength={24}
                autoFocus
                onKeyDown={e => { if (e.key === 'Enter') handleSaveName(); if (e.key === 'Escape') setEditingName(false); }}
              />
              {nameError && <div className="settings-name-error">{nameError}</div>}
              <div className="settings-name-actions">
                <button className="btn btn-primary settings-name-save" onClick={handleSaveName} disabled={nameSaving}>
                  {nameSaving ? '⟳' : '✓ Save'}
                </button>
                <button className="btn btn-ghost settings-name-cancel" onClick={() => { setEditingName(false); setNameInput(user.displayName); }}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="settings-name-row">
              <div className="settings-display-name">{user.displayName}</div>
              <button className="settings-name-edit-btn" onClick={() => setEditingName(true)} title="Edit display name">✎</button>
              {nameSaved && <span className="settings-name-saved">✓ Saved</span>}
            </div>
          )}
          <div className="settings-title-text">{user.title}</div>
          <div className="settings-xp-bar">
            <div className="settings-xp-fill" style={{ width: `${xpPercent}%` }} />
          </div>
          <div className="settings-xp-label">{user.xp} / {user.xpToNext} XP to Level {user.level + 1}</div>
        </div>
      </div>

      {/* Avatar section */}
      <Section title="🧙 Avatar">
        <SettingsRow
          icon={<Avatar avatarId={user.avatarId} displayName={user.displayName} size={32} />}
          label="Change Avatar"
          sublabel={`${earnedBadgeIds.length > 0 ? earnedBadgeIds.length + ' extra avatars unlocked' : '8 avatars available · earn more through badges'}`}
          onClick={() => setShowAvatarPicker(true)}
        />
      </Section>

      {/* Gameplay preferences */}
      <Section title="🎮 Gameplay">
        <ToggleRow
          icon="💬"
          label="Combat Toast Notifications"
          sublabel="Show damage, XP, and crit notifications"
          checked={combatToasts}
          onChange={v => setPref('dq_combat_toasts', v, setCombatToasts)}
        />
        <ToggleRow
          icon="👥"
          label="Friend Activity Notifications"
          sublabel="Alert when friends start focusing"
          checked={friendNotifs}
          onChange={v => setPref('dq_friend_notifs', v, setFriendNotifs)}
        />
      </Section>

      {/* Accessibility */}
      <Section title="♿ Accessibility">
        <ToggleRow
          icon="✨"
          label="Reduced Motion"
          sublabel="Fewer animations and transitions"
          checked={reducedMotion}
          onChange={v => setPref('dq_reduced_motion', v, setReducedMotion)}
        />
        <ToggleRow
          icon="🔊"
          label="Sound Effects"
          sublabel="Coming soon"
          checked={soundEnabled}
          onChange={v => setPref('dq_sound', v, setSoundEnabled)}
        />
      </Section>

      {/* Account */}
      <Section title="🔐 Account">
        {isSupabaseConnected ? (
          <>
            <SettingsRow
              icon="📧"
              label="Signed in"
              sublabel={user.displayName}
              value={<span className="settings-connected-badge">● Connected</span>}
            />
            <SettingsRow
              icon="🚪"
              label="Sign Out"
              sublabel="You'll need to sign back in to sync"
              onClick={onSignOut}
              danger
            />
          </>
        ) : (
          <SettingsRow
            icon="🔌"
            label="Not connected"
            sublabel="Add Supabase keys to .env to enable sync and social features"
            value={<span className="settings-offline-badge">Offline</span>}
          />
        )}
      </Section>

      {/* App info */}
      <Section title="ℹ️ About">
        <SettingsRow icon="🧠" label="Dopamine Quest" sublabel="Turn tasks into victories." value="v1.0" />
        <SettingsRow icon="💙" label="Built for ADHD brains" sublabel="Named by someone without ADHD." />
      </Section>

      {/* Avatar picker modal */}
      {showAvatarPicker && (
        <AvatarPicker
          currentAvatar={user.avatarId || 'the_planner'}
          earnedBadgeIds={earnedBadgeIds}
          onSelect={handleAvatarSelect}
          onClose={() => setShowAvatarPicker(false)}
        />
      )}

      <style>{`
        .settings-screen {
          padding: var(--space-6) var(--space-6) var(--space-8);
          max-width: 640px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
        }

        /* Hero */
        .settings-hero {
          display: flex;
          align-items: center;
          gap: var(--space-5);
          background: linear-gradient(135deg, var(--bg-elevated), #1E1B40);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-xl);
          padding: var(--space-5) var(--space-6);
          box-shadow: 0 0 30px rgba(245,200,66,0.06);
        }

        .settings-avatar-wrap {
          position: relative;
          width: 80px;
          height: 80px;
          flex-shrink: 0;
          cursor: pointer;
        }

        .settings-avatar-wrap:hover .settings-avatar-edit {
          opacity: 1;
        }

        .settings-avatar-edit {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(13,12,29,0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: var(--gold);
          opacity: 0;
          transition: opacity 0.15s;
        }

        .settings-level-badge {
          position: absolute;
          bottom: -4px;
          right: -4px;
          background: linear-gradient(135deg, var(--gold), var(--amber));
          color: var(--text-inverse);
          font-size: 0.8rem;
          font-weight: 800;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--bg-elevated);
          box-shadow: 0 0 8px var(--gold-glow);
        }

        .settings-hero-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          min-width: 0;
        }

        .settings-name-row {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .settings-display-name {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .settings-name-edit-btn {
          background: transparent;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          padding: 2px 8px;
          font-size: 0.7rem;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.15s;
        }
        .settings-name-edit-btn:hover {
          color: var(--purple);
          border-color: rgba(179,157,219,0.4);
          background: var(--purple-dim);
        }

        .settings-name-saved {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--green);
        }

        .settings-name-edit {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .settings-name-input {
          background: var(--bg-card);
          border: 1px solid var(--purple);
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-3);
          color: var(--text-primary);
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          outline: none;
          width: 100%;
          box-shadow: 0 0 0 3px rgba(179,157,219,0.2);
        }

        .settings-name-error {
          font-size: 0.72rem;
          color: var(--coral);
        }

        .settings-name-actions {
          display: flex;
          gap: var(--space-2);
        }

        .settings-name-save   { font-size: 0.78rem; padding: var(--space-1) var(--space-4); }
        .settings-name-cancel { font-size: 0.78rem; padding: var(--space-1) var(--space-3); }

        .settings-title-text {
          font-size: 0.78rem;
          color: var(--purple);
          font-style: italic;
        }

        .settings-xp-bar {
          height: 6px;
          background: var(--bg-card);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .settings-xp-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--purple), var(--xp-blue));
          border-radius: var(--radius-full);
          transition: width 0.6s var(--ease-out);
        }

        .settings-xp-label {
          font-size: 0.68rem;
          color: var(--text-muted);
        }

        /* Sections */
        .settings-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .settings-section-title {
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          padding: 0 var(--space-2);
        }

        .settings-section-body {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        /* Rows */
        .settings-row {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-4) var(--space-4);
          border-bottom: 1px solid var(--border-subtle);
          transition: background 0.15s;
        }

        .settings-row:last-child { border-bottom: none; }

        .settings-row.clickable { cursor: pointer; }
        .settings-row.clickable:hover { background: var(--bg-card-hover); }

        .settings-row.danger .settings-row-label { color: var(--coral); }
        .settings-row.danger .settings-row-icon  { filter: none; }
        .settings-row.danger:hover { background: var(--coral-dim); }

        .settings-row-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
          width: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .settings-row-text { flex: 1; min-width: 0; }

        .settings-row-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .settings-row-sub {
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-top: 2px;
          line-height: 1.4;
        }

        .settings-row-value {
          font-size: 0.78rem;
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .settings-row-chevron {
          color: var(--text-muted);
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        /* Toggle */
        .settings-toggle {
          width: 44px;
          height: 24px;
          border-radius: var(--radius-full);
          background: var(--bg-elevated);
          border: 1px solid var(--border-default);
          position: relative;
          flex-shrink: 0;
          transition: all 0.2s var(--ease-spring);
        }

        .settings-toggle.on {
          background: var(--purple);
          border-color: var(--purple);
          box-shadow: 0 0 8px rgba(179,157,219,0.3);
        }

        .settings-toggle-knob {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--text-muted);
          transition: all 0.2s var(--ease-spring);
        }

        .settings-toggle.on .settings-toggle-knob {
          left: 22px;
          background: white;
        }

        /* Badges */
        .settings-connected-badge {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--green);
          background: var(--green-dim);
          border-radius: var(--radius-full);
          padding: 2px 8px;
          border: 1px solid rgba(92,221,139,0.3);
        }

        .settings-offline-badge {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--text-muted);
          background: var(--bg-elevated);
          border-radius: var(--radius-full);
          padding: 2px 8px;
          border: 1px solid var(--border-subtle);
        }

        @media (max-width: 600px) {
          .settings-screen { padding: var(--space-4) var(--space-4) var(--space-8); }
          .settings-hero { flex-direction: column; text-align: center; gap: var(--space-4); }
          .settings-name-row { justify-content: center; }
          .settings-avatar-wrap { margin: 0 auto; }
          .settings-xp-bar { width: 100%; }
        }
      `}</style>
    </div>
  );
}
