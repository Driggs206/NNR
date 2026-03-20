// ============================================================
// AUTH SCREEN — Login / Sign up / Reset password
// ============================================================

import React, { useState } from 'react';

export default function AuthScreen({ onSignIn, onSignUp, onReset, onUpdatePassword, isRecovery, error, loading }) {
  const [mode, setMode]               = useState('login');
  const [email, setEmail]             = useState('');
  const [password, setPassword]       = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [resetSent, setResetSent]     = useState(false);
  const [passwordUpdated, setPasswordUpdated] = useState(false);

  const [localLoading, setLocalLoading] = useState(false);
  const [successMsg, setSuccessMsg]     = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLocalLoading(true);
    setSuccessMsg('');
    if (mode === 'login') {
      await onSignIn(email, password);
    } else if (mode === 'signup') {
      const result = await onSignUp(email, password, displayName);
      if (result === 'confirm_email') {
        setMode('confirm');
      } else if (result === 'ok') {
        setSuccessMsg('Account created! Logging you in...');
      }
    } else if (mode === 'reset') {
      const ok = await onReset(email);
      if (ok) setResetSent(true);
    }
    setLocalLoading(false);
  }

  const isLoading = loading || localLoading;

  const recoveryStyles = `
    .auth-screen { min-height: 100dvh; display: flex; align-items: center; justify-content: center; padding: 16px; background: var(--bg-base); }
    .auth-card { background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-xl); padding: 32px; width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 20px; }
    .auth-logo { display: flex; align-items: center; gap: 12px; }
    .auth-logo-icon { font-size: 1.8rem; }
    .auth-logo-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: var(--text-primary); }
    .auth-logo-sub { font-size: 0.75rem; color: var(--text-muted); }
    .auth-tagline { font-size: 0.9rem; color: var(--text-secondary); }
    .auth-field { display: flex; flex-direction: column; gap: 6px; }
    .auth-label { font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }
    .auth-input { background: var(--bg-card); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 10px 14px; color: var(--text-primary); font-family: var(--font-body); font-size: 0.95rem; outline: none; width: 100%; }
    .auth-input:focus { border-color: var(--gold); box-shadow: 0 0 0 3px var(--gold-dim); }
    .auth-error { font-size: 0.78rem; color: var(--coral); background: var(--coral-dim); border-radius: var(--radius-md); padding: 8px 12px; }
    .auth-submit { width: 100%; justify-content: center; padding: 14px; font-size: 1rem; }
    .auth-submit:disabled { opacity: 0.7; cursor: not-allowed; }
    .auth-confirm-screen { display: flex; flex-direction: column; align-items: center; gap: 16px; text-align: center; }
    .auth-confirm-icon { font-size: 3rem; }
    .auth-confirm-title { font-size: 1.2rem; color: var(--green); }
    .auth-confirm-body { font-size: 0.85rem; color: var(--text-muted); }
  `;

  // ── Password recovery mode ─────────────────────────────
  if (isRecovery) {
    return (
      <div className="auth-screen">
        <div className="auth-card">
          <div className="auth-logo">
            <div className="auth-logo-icon">⚔</div>
            <div>
              <div className="auth-logo-title">Dopamine Quest</div>
              <div className="auth-logo-sub">Turn tasks into victories.</div>
            </div>
          </div>

          {passwordUpdated ? (
            <div className="auth-confirm-screen">
              <div className="auth-confirm-icon">✅</div>
              <div className="auth-confirm-title font-display">Password updated!</div>
              <div className="auth-confirm-body">You're now signed in. Close this and start questing.</div>
            </div>
          ) : (
            <form onSubmit={async (e) => {
              e.preventDefault();
              if (newPassword.length < 6) return;
              setLocalLoading(true);
              const ok = await onUpdatePassword(newPassword);
              setLocalLoading(false);
              if (ok) setPasswordUpdated(true);
            }}>
              <div className="auth-tagline">Set your new password.</div>
              <div className="auth-field">
                <label className="auth-label">New Password</label>
                <input
                  type="password"
                  className="auth-input"
                  placeholder="At least 6 characters"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  minLength={6}
                  required
                  autoFocus
                />
              </div>
              {error && <div className="auth-error">⚠ {error}</div>}
              <button
                type="submit"
                className="btn btn-primary auth-submit"
                disabled={localLoading || newPassword.length < 6}
              >
                {localLoading ? '⟳ Saving...' : '✓ Set New Password'}
              </button>
            </form>
          )}
        </div>
        <style>{recoveryStyles}</style>
      </div>
    );
  }

  const loginBg = `${import.meta.env.BASE_URL}art/login-bg.png`;

  return (
    <div className="auth-screen" style={{ '--login-bg': `url('${loginBg}')` }}>
      <div className="auth-card">
        {/* Logo */}
        <div className="auth-logo">
          <div className="auth-logo-icon">⚔</div>
          <div>
            <div className="auth-logo-title">Dopamine Quest</div>
            <div className="auth-logo-sub">Turn tasks into victories.</div>
          </div>
        </div>

        <div className="auth-tagline">
          {mode === 'login'   && 'Welcome back, adventurer.'}
          {mode === 'signup'  && 'Begin your journey.'}
          {mode === 'reset'   && 'Reset your password.'}
          {mode === 'confirm' && 'Almost there!'}
        </div>

        {mode === 'confirm' ? (
          <div className="auth-confirm-screen">
            <div className="auth-confirm-icon">📧</div>
            <div className="auth-confirm-title font-display">Check your email</div>
            <div className="auth-confirm-body">
              We sent a confirmation link to <strong>{email}</strong>.
              Click it to activate your account — <strong>check your spam folder</strong> if you don't see it.
            </div>
            <div className="auth-confirm-hint">
              Once you've confirmed, come back here and sign in.
            </div>
            <button
              className="btn btn-primary auth-submit"
              onClick={() => setMode('login')}
            >
              ⚔ Go to Sign In
            </button>
            <button className="auth-link" onClick={() => onSignUp(email, 'resend')}>
              Resend confirmation email
            </button>
          </div>
        ) : resetSent ? (
          <div className="auth-success">
            📧 Check your email for a reset link!
            <button className="auth-link" onClick={() => { setResetSent(false); setMode('login'); }}>
              Back to login
            </button>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <div className="auth-field">
                <label className="auth-label">Display Name</label>
                <input
                  type="text"
                  placeholder="Choose your hero name"
                  value={displayName}
                  onChange={e => setDisplayName(e.target.value)}
                  required
                  autoFocus
                  maxLength={30}
                />
              </div>
            )}

            <div className="auth-field">
              <label className="auth-label">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoFocus={mode !== 'signup'}
              />
            </div>

            {mode !== 'reset' && (
              <div className="auth-field">
                <label className="auth-label">Password</label>
                <input
                  type="password"
                  placeholder={mode === 'signup' ? 'Min. 6 characters' : 'Your password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
            )}

            {error && (
              <div className="auth-error">⚠ {error}</div>
            )}

            {successMsg && (
              <div className="auth-success-inline">✓ {successMsg}</div>
            )}

            <button
              type="submit"
              className="btn btn-primary auth-submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="auth-spinner">⟳ {mode === 'signup' ? 'Creating account...' : mode === 'login' ? 'Signing in...' : 'Sending...'}</span>
              ) : (
                mode === 'login'  ? '⚔ Enter the Quest' :
                mode === 'signup' ? '✨ Create Account' :
                '📧 Send Reset Link'
              )}
            </button>
          </form>
        )}

        {/* Mode switcher */}
        {!resetSent && (
          <div className="auth-footer">
            {mode === 'login' && (
              <>
                <span className="text-muted text-sm">No account yet?</span>
                <button className="auth-link" onClick={() => setMode('signup')}>Sign up</button>
                <span className="auth-dot">·</span>
                <button className="auth-link" onClick={() => setMode('reset')}>Forgot password</button>
              </>
            )}
            {mode === 'signup' && (
              <>
                <span className="text-muted text-sm">Already have an account?</span>
                <button className="auth-link" onClick={() => setMode('login')}>Sign in</button>
              </>
            )}
            {mode === 'reset' && (
              <>
                <button className="auth-link" onClick={() => setMode('login')}>← Back to login</button>
              </>
            )}
          </div>
        )}

        {/* Local-only note */}
        <div className="auth-local-note">
          🔒 Your data is stored in your Supabase database.<br/>
          Progress syncs across all your devices.
        </div>
      </div>

      <style>{`
        .auth-screen {
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-4);
          position: relative;
          overflow: hidden;
          /* Hero background image */
          background-image: var(--login-bg);
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }

        /* Dark overlay so the login card stays readable */
        .auth-screen::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(10, 8, 26, 0.55);
          pointer-events: none;
          z-index: 0;
        }

        .auth-card {
          background: rgba(8, 6, 22, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 2px solid rgba(10, 8, 26, 0.6);
          border-radius: 50% / 55%;
          padding: var(--space-8) var(--space-6);
          width: 100%;
          max-width: 460px;
          min-height: 520px;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow:
            inset 0 0 60px rgba(0,0,0,0.8),
            0 0 40px rgba(0,0,0,0.6),
            inset 0 0 120px rgba(10,6,30,0.9);
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
          box-shadow: var(--shadow-lg), 0 0 60px rgba(79,195,247,0.06);
          animation: scaleIn 0.3s var(--ease-spring);
          position: relative;
          z-index: 1;
        }

        .auth-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-3);
        }

        .auth-logo-icon {
          width: 48px;
          height: 48px;
          background: var(--gold-dim);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-family: var(--font-display);
          color: var(--gold);
          box-shadow: 0 0 20px var(--gold-glow);
          flex-shrink: 0;
        }

        .auth-logo-title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--gold);
          letter-spacing: 0.05em;
        }

        .auth-logo-sub {
          font-size: 0.68rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .auth-tagline {
          font-family: var(--font-display);
          font-size: 1rem;
          color: var(--text-secondary);
          font-style: italic;
          text-align: center;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
        }

        .auth-field {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .auth-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-muted);
        }

        .auth-submit {
          width: 100%;
          justify-content: center;
          padding: var(--space-4);
          font-size: 0.95rem;
          margin-top: var(--space-2);
          border-radius: var(--radius-lg);
        }

        .auth-error {
          font-size: 0.82rem;
          color: var(--coral);
          background: var(--coral-dim);
          border: 1px solid rgba(255,101,132,0.3);
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-4);
        }

        .auth-success {
          font-size: 0.85rem;
          color: var(--green);
          background: var(--green-dim);
          border: 1px solid rgba(92,221,139,0.3);
          border-radius: var(--radius-md);
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-3);
          text-align: center;
        }

        .auth-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: var(--space-2);
          padding-top: var(--space-2);
          border-top: 1px solid var(--border-subtle);
        }

        .auth-link {
          background: none;
          border: none;
          color: var(--xp-blue);
          font-size: 0.82rem;
          font-weight: 700;
          font-family: var(--font-body);
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 2px;
          padding: 0;
          transition: color 0.15s;
        }
        .auth-link:hover { color: var(--purple); }

        .auth-dot {
          color: var(--text-muted);
          font-size: 0.7rem;
        }

        .auth-confirm-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-4);
          text-align: center;
          padding: var(--space-2) 0;
          animation: scaleIn 0.25s var(--ease-spring);
        }

        .auth-confirm-icon { font-size: 3rem; }

        .auth-confirm-title {
          font-size: 1.2rem;
          color: var(--xp-blue);
        }

        .auth-confirm-body {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          background: var(--xp-blue-dim);
          border: 1px solid rgba(79,195,247,0.25);
          border-radius: var(--radius-md);
          padding: var(--space-4);
          width: 100%;
        }

        .auth-confirm-body strong { color: var(--text-primary); }

        .auth-confirm-hint {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .auth-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none !important;
        }

        .auth-spinner {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          animation: spinSlow 1s linear infinite;
        }

        .auth-success-inline {
          font-size: 0.82rem;
          color: var(--green);
          background: var(--green-dim);
          border: 1px solid rgba(92,221,139,0.3);
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-4);
          text-align: center;
          animation: scaleIn 0.2s var(--ease-spring);
        }
          font-size: 0.68rem;
          color: var(--text-muted);
          text-align: center;
          line-height: 1.6;
          padding: var(--space-3) var(--space-4);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        @media (max-width: 480px) {
          .auth-card {
            padding: var(--space-6) var(--space-5);
            border-radius: var(--radius-xl) var(--radius-xl) 0 0;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            max-width: 100%;
            border-bottom: none;
          }
          .auth-screen { align-items: flex-end; }
        }
      `}</style>
    </div>
  );
}
