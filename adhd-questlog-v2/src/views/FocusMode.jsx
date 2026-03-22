// ============================================================
// FOCUS MODE — Full-screen minimal Pomodoro timer
// ============================================================

import React, { useState } from 'react';
import { EFFORT } from '../store/initialState';

const PRESETS = [
  { label: '5 min', minutes: 5, emoji: '⚡' },
  { label: '15 min', minutes: 15, emoji: '🌊' },
  { label: '25 min', minutes: 25, emoji: '🔮' },
  { label: '45 min', minutes: 45, emoji: '🌙' },
  { label: '60 min', minutes: 60, emoji: '⭐' },
];

export default function FocusMode({ session, onStart, onPause, onResume, onStop, formatTime, tasks, lastBoost }) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedMinutes, setSelectedMinutes] = useState(25);

  const progress = session
    ? 1 - session.secondsLeft / session.totalSeconds
    : 0;

  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset = circumference * (1 - progress);

  if (!session) {
    return (
      <div className="focus-setup">
        <div className="focus-setup-inner">
          <div className="focus-icon-big">🔮</div>
          <h1 className="font-display focus-heading">Focus Session</h1>
          <p className="focus-subtitle">
            Clear your mind. One task. One timer.<br/>
            Earn bonus XP for every focused minute.
          </p>

          {/* Task picker */}
          {tasks.length > 0 && (
            <div className="focus-section">
              <div className="focus-section-label">Working on</div>
              <div className="task-picker">
                <button
                  className={`task-pick-option ${!selectedTask ? 'active' : ''}`}
                  onClick={() => setSelectedTask(null)}
                >
                  Free focus (no task)
                </button>
                {tasks.slice(0, 5).map(t => (
                  <button
                    key={t.id}
                    className={`task-pick-option ${selectedTask?.id === t.id ? 'active' : ''}`}
                    onClick={() => setSelectedTask(t)}
                  >
                    {t.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Duration picker */}
          <div className="focus-section">
            <div className="focus-section-label">Duration</div>
            <div className="preset-grid">
              {PRESETS.map(p => (
                <button
                  key={p.minutes}
                  className={`preset-btn ${selectedMinutes === p.minutes ? 'active' : ''}`}
                  onClick={() => setSelectedMinutes(p.minutes)}
                >
                  <span className="preset-emoji">{p.emoji}</span>
                  <span className="preset-label">{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            className="btn btn-primary focus-start-btn"
            onClick={() => onStart(selectedTask || { id: 'free', title: 'Free Focus' }, selectedMinutes)}
          >
            🔮 Begin Session
          </button>

          <div className="focus-tip">
            💡 Tip: Each minute focused earns 2.5 XP. Complete the session for a 25% bonus.
          </div>
        </div>

        <style>{`
          .focus-setup {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: var(--space-8);
          }

          .focus-setup-inner {
            max-width: 480px;
            width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: var(--space-6);
            align-items: center;
            animation: fadeInUp 0.4s var(--ease-out);
          }

          .focus-icon-big {
            font-size: 3.5rem;
            filter: drop-shadow(0 0 20px rgba(179,157,219,0.5));
          }

          .focus-heading {
            font-size: 2rem;
            background: linear-gradient(135deg, var(--purple), var(--xp-blue));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .focus-subtitle {
            color: var(--text-secondary);
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .focus-section {
            width: 100%;
            text-align: left;
          }

          .focus-section-label {
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-muted);
            font-weight: 700;
            margin-bottom: var(--space-3);
          }

          .task-picker {
            display: flex;
            flex-direction: column;
            gap: var(--space-2);
          }

          .task-pick-option {
            padding: var(--space-3) var(--space-4);
            border-radius: var(--radius-md);
            background: var(--bg-elevated);
            border: 1px solid var(--border-subtle);
            color: var(--text-secondary);
            font-size: 0.85rem;
            font-weight: 600;
            font-family: var(--font-body);
            text-align: left;
            cursor: pointer;
            transition: all 0.15s;
          }
          .task-pick-option:hover { border-color: var(--border-default); color: var(--text-primary); }
          .task-pick-option.active {
            background: var(--purple-dim);
            border-color: rgba(179,157,219,0.4);
            color: var(--purple);
          }

          .preset-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: var(--space-2);
          }

          @media (max-width: 400px) {
            .preset-grid { grid-template-columns: repeat(3, 1fr); }
            .focus-setup-inner { gap: var(--space-4); }
            .focus-start-btn { width: 100%; justify-content: center; }
          }

          .preset-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-1);
            padding: var(--space-3) var(--space-2);
            border-radius: var(--radius-lg);
            background: var(--bg-elevated);
            border: 1px solid var(--border-subtle);
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.15s;
          }
          .preset-btn:hover { border-color: var(--border-default); transform: translateY(-2px); }
          .preset-btn.active {
            background: var(--xp-blue-dim);
            border-color: rgba(79,195,247,0.4);
            color: var(--xp-blue);
            box-shadow: 0 0 12px rgba(79,195,247,0.15);
          }

          .preset-emoji { font-size: 1.2rem; }
          .preset-label { font-size: 0.72rem; font-weight: 700; }

          .focus-start-btn {
            padding: var(--space-4) var(--space-8);
            font-size: 1rem;
            border-radius: var(--radius-xl);
          }

          .focus-tip {
            font-size: 0.78rem;
            color: var(--text-muted);
            background: var(--bg-elevated);
            border-radius: var(--radius-md);
            padding: var(--space-3) var(--space-4);
            border: 1px solid var(--border-subtle);
            width: 100%;
          }
        `}</style>
      </div>
    );
  }

  // Active session
  const minutes = Math.floor(session.secondsLeft / 60);
  const seconds = session.secondsLeft % 60;
  const elapsed = Math.round((session.totalSeconds - session.secondsLeft) / 60);
  const xpPreview = Math.round(elapsed * 2.5);

  return (
    <div className="focus-active">

      {/* Boost overlay — dramatic full-screen pulse when boosted */}
      {lastBoost && (
        <div className="focus-boost-overlay">
          {/* Particle burst */}
          <div className="fbo-particles">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="fbo-particle" style={{
                '--angle': `${i * 30}deg`,
                '--delay': `${i * 0.04}s`,
                '--color': i % 3 === 0 ? '#4FC3F7' : i % 3 === 1 ? '#B39DDB' : '#F5C842',
              }} />
            ))}
          </div>
          <div className="fbo-content">
            {/* Avatar */}
            <div className="fbo-avatar-ring">
              <div className="fbo-avatar-inner">
                {lastBoost.avatarIcon ? (
                  <img src={lastBoost.avatarIcon} alt={lastBoost.name} className="fbo-avatar-img" />
                ) : (
                  <span className="fbo-avatar-emoji">💙</span>
                )}
              </div>
            </div>
            <div className="fbo-hearts">💙</div>
            <div className="fbo-name">{lastBoost.name}</div>
            <div className="fbo-msg">is cheering you on!</div>
            <div className="fbo-sub">+15% XP this session ⚡</div>
            <div className="fbo-tagline">You've got this. Keep going.</div>
          </div>
        </div>
      )}

      <div className="focus-active-inner">
        {/* Task name */}
        <div className="focus-task-name">{session.taskTitle}</div>

        {/* Circular timer */}
        <div className="timer-ring-wrapper">
          <svg viewBox="0 0 280 280" className="timer-ring" xmlns="http://www.w3.org/2000/svg">
            {/* Background circle */}
            <circle
              cx="140" cy="140" r="120"
              fill="none"
              stroke="var(--bg-elevated)"
              strokeWidth="12"
            />
            {/* Progress circle */}
            <circle
              cx="140" cy="140" r="120"
              fill="none"
              stroke={session.paused ? 'var(--amber)' : 'var(--xp-blue)'}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 140 140)"
              style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.3s' }}
            />
          </svg>

          <div className="timer-display">
            <div className="timer-digits">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
            <div className="timer-status">
              {session.paused ? '⏸ paused' : '● focusing'}
            </div>
            <div className="timer-xp-preview">+{xpPreview} XP earned so far</div>
          </div>
        </div>

        {/* Controls */}
        <div className="focus-controls">
          {session.paused ? (
            <button className="btn btn-primary focus-ctrl-btn" onClick={onResume}>▶ Resume</button>
          ) : (
            <button className="btn btn-secondary focus-ctrl-btn" onClick={onPause}>⏸ Pause</button>
          )}
          <button className="btn btn-success focus-ctrl-btn" onClick={() => onStop(true)}>
            ✓ Complete
          </button>
          <button className="btn btn-ghost focus-ctrl-btn" onClick={() => onStop(false)}>
            ✕ End early
          </button>
        </div>

        <div className="focus-reminder">
          Put your phone down. You've got this. 💙
        </div>
      </div>

      <style>{`
        .focus-active {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-8);
          background: radial-gradient(ellipse at center, rgba(79,195,247,0.05) 0%, transparent 70%);
          position: relative;
          overflow: hidden;
        }

        /* ── Boost overlay ── */
        .focus-boost-overlay {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          pointer-events: none;
          animation: boostOverlayIn 0.4s ease forwards,
                     boostOverlayOut 0.5s ease 5.5s forwards;
        }

        .focus-boost-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(79,195,247,0.15) 0%, transparent 65%);
          animation: boostPulse 1.2s ease infinite alternate;
        }

        @keyframes boostOverlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes boostOverlayOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }

        @keyframes boostPulse {
          from { opacity: 0.5; transform: scale(0.95); }
          to   { opacity: 1;   transform: scale(1.05); }
        }

        /* Particles */
        .fbo-particles {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .fbo-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color);
          animation: particleBurst 1.4s var(--delay) ease-out forwards;
          opacity: 0;
        }

        @keyframes particleBurst {
          0%   { opacity: 1; transform: rotate(var(--angle)) translateY(0) scale(1); }
          80%  { opacity: 0.8; transform: rotate(var(--angle)) translateY(-180px) scale(0.6); }
          100% { opacity: 0; transform: rotate(var(--angle)) translateY(-220px) scale(0); }
        }

        .fbo-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-3);
          background: rgba(10, 8, 28, 0.92);
          border: 2px solid rgba(79,195,247,0.5);
          border-radius: var(--radius-xl);
          padding: var(--space-8) var(--space-12);
          box-shadow: 0 0 60px rgba(79,195,247,0.25), 0 0 120px rgba(79,195,247,0.1);
          backdrop-filter: blur(16px);
          animation: boostCardBounce 0.6s var(--ease-spring);
          text-align: center;
          position: relative;
          z-index: 1;
        }

        @keyframes boostCardBounce {
          0%   { transform: translateY(-40px) scale(0.85); opacity: 0; }
          60%  { transform: translateY(8px) scale(1.03); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        .fbo-avatar-ring {
          width: 88px;
          height: 88px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #4FC3F7, #B39DDB, #F5C842, #4FC3F7);
          padding: 3px;
          animation: ringRotate 3s linear infinite;
        }

        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .fbo-avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--bg-elevated);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .fbo-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .fbo-avatar-emoji { font-size: 2.5rem; }

        .fbo-hearts {
          font-size: 2.5rem;
          animation: heartBeat 0.5s ease infinite alternate;
        }

        @keyframes heartBeat {
          from { transform: scale(1); }
          to   { transform: scale(1.2); }
        }

        .fbo-name {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 800;
          color: #4FC3F7;
          text-shadow: 0 0 20px rgba(79,195,247,0.6);
        }

        .fbo-msg {
          font-size: 1rem;
          color: var(--text-secondary);
          font-style: italic;
        }

        .fbo-sub {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--gold);
          background: var(--gold-dim);
          border-radius: var(--radius-full);
          padding: 4px 14px;
          border: 1px solid rgba(245,200,66,0.3);
          margin-top: var(--space-2);
        }

        .fbo-tagline {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-style: italic;
          margin-top: 2px;
        }

        .focus-active-inner {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-6);
          animation: fadeInUp 0.4s var(--ease-out);
        }

        .focus-task-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-secondary);
          max-width: 400px;
          font-style: italic;
        }

        .timer-ring-wrapper {
          position: relative;
          width: min(280px, 75vw);
          height: min(280px, 75vw);
        }

        .timer-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 16px rgba(79,195,247,0.3));
        }

        .timer-display {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--space-1);
        }

        .timer-digits {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: 0.05em;
          line-height: 1;
        }

        .timer-status {
          font-size: 0.78rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .timer-xp-preview {
          font-size: 0.8rem;
          color: var(--xp-blue);
          font-weight: 700;
        }

        .focus-controls {
          display: flex;
          gap: var(--space-3);
          flex-wrap: wrap;
          justify-content: center;
        }

        .focus-ctrl-btn {
          padding: var(--space-3) var(--space-6);
          font-size: 0.95rem;
          border-radius: var(--radius-xl);
        }

        .focus-reminder {
          color: var(--text-muted);
          font-size: 0.85rem;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
