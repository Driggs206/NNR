// ============================================================
// TASK CARD — Individual task with subtasks, completion, focus
// ============================================================

import React, { useState } from 'react';
import { PRIORITIES, EFFORT, TAG_COLORS } from '../store/initialState';
import { formatDueTime, calculateTaskReward } from '../utils/rewards';

export default function TaskCard({
  task,
  userTalents = [],
  onComplete,
  onToggleSubtask,
  onSnooze,
  onDelete,
  onFocus,
  index = 0,
}) {
  const [expanded, setExpanded] = useState(false);
  const [completing, setCompleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const priority = PRIORITIES[task.priority] || PRIORITIES.MEDIUM;
  const effort = EFFORT[task.effort] || EFFORT.M;
  const dueLabel = formatDueTime(task.dueAt);
  const isOverdue = task.isOverdue || (task.dueAt && new Date(task.dueAt) < new Date());
  const subtasksDone = task.subtasks.filter(s => s.done).length;
  const subtasksTotal = task.subtasks.length;
  const { xp, gold } = calculateTaskReward(task, userTalents);

  function handleComplete() {
    setCompleting(true);
    setTimeout(() => onComplete(task.id), 400);
  }

  return (
    <div
      className={`task-card ${completing ? 'completing' : ''} ${isOverdue ? 'overdue' : ''}`}
      style={{
        animationDelay: `${index * 60}ms`,
        '--priority-color': priority.color,
      }}
    >
      {/* Priority stripe */}
      <div className="priority-stripe" style={{ background: priority.color }} />

      <div className="task-card-inner">
        {/* Row 1: Checkbox + title + complete btn */}
        <div className="task-main-row">
          <button
            className={`task-checkbox ${completing ? 'completing' : ''}`}
            onClick={handleComplete}
            title="Mark complete"
            aria-label="Complete task"
          >
            {completing && <span style={{color: 'white', fontSize: '0.75rem'}}>✓</span>}
          </button>

          <div className="task-title-block" onClick={() => setExpanded(e => !e)}>
            <div className="task-title">{task.title}</div>
            {task.notes && !expanded && (
              <div className="task-notes-preview">{task.notes}</div>
            )}
          </div>

          <div className="task-actions-inline">
            {onFocus && (
              <button className="btn btn-ghost task-action-btn" onClick={() => onFocus(task)} title="Start focus session">
                🔮
              </button>
            )}
            <button
              className={`task-expand-btn ${expanded ? 'open' : ''}`}
              onClick={() => setExpanded(e => !e)}
              aria-label="Toggle details"
            >
              ▾
            </button>
          </div>
        </div>

        {/* Row 2: Metadata chips */}
        <div className="task-meta-row">
          {/* Priority */}
          <span className="badge" style={{
            background: `${priority.color}18`,
            color: priority.color,
            border: `1px solid ${priority.color}30`,
          }}>
            {priority.icon} {priority.label}
          </span>

          {/* Effort */}
          <span className="badge" style={{
            background: 'var(--bg-elevated)',
            color: 'var(--text-secondary)',
            border: '1px solid var(--border-subtle)',
          }}>
            ⏱ {effort.label}
          </span>

          {/* Due time */}
          {dueLabel && (
            <span className={`badge ${isOverdue ? 'overdue-badge' : 'due-badge'}`}>
              {isOverdue ? '⚠ ' : '📅 '}{dueLabel}
            </span>
          )}

          {/* Tags */}
          {task.tags?.map(tag => (
            <span key={tag} className="tag-chip" style={{
              background: `${TAG_COLORS[tag] || '#888'}20`,
              color: TAG_COLORS[tag] || '#888',
              border: `1px solid ${TAG_COLORS[tag] || '#888'}30`,
            }}>
              {tag}
            </span>
          ))}

          {/* Subtask progress */}
          {subtasksTotal > 0 && (
            <span className="badge" style={{
              background: subtasksDone === subtasksTotal ? 'var(--green-dim)' : 'var(--bg-elevated)',
              color: subtasksDone === subtasksTotal ? 'var(--green)' : 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)',
            }}>
              ☑ {subtasksDone}/{subtasksTotal}
            </span>
          )}

          {/* Reward preview */}
          <span className="reward-preview">
            +{xp} XP · +{gold} 💰
          </span>
        </div>

        {/* Expanded: notes + subtasks + actions */}
        {expanded && (
          <div className="task-expanded animate-in">
            {/* Notes */}
            {task.notes && (
              <div className="task-notes">{task.notes}</div>
            )}

            {/* Subtasks */}
            {subtasksTotal > 0 && (
              <div className="subtask-list">
                <div className="subtask-header">Steps</div>
                {task.subtasks.map(subtask => (
                  <div
                    key={subtask.id}
                    className={`subtask-item ${subtask.done ? 'done' : ''}`}
                    onClick={() => onToggleSubtask(task.id, subtask.id)}
                  >
                    <span className="subtask-check">
                      {subtask.done ? '✓' : '○'}
                    </span>
                    <span className="subtask-title">{subtask.title}</span>
                    {!subtask.done && (
                      <span className="subtask-xp">+12 XP</span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Recovery / overdue actions */}
            {isOverdue && (
              <div className="recovery-banner">
                <span>🌱</span>
                <div>
                  <div className="recovery-title">No worries — let's get back on track.</div>
                  <div className="recovery-subtitle">Completing it still earns you {Math.round(xp * 0.6)} XP. Or reschedule if needed.</div>
                </div>
              </div>
            )}

            {/* Action row */}
            <div className="task-action-row">
              <button className="btn btn-success" onClick={handleComplete}>
                ✓ Complete (+{xp} XP)
              </button>
              {onFocus && (
                <button className="btn btn-secondary" onClick={() => onFocus(task)}>
                  🔮 Focus
                </button>
              )}
              <button className="btn btn-ghost" onClick={() => onSnooze(task.id, 2)}>
                ⏰ Snooze 2h
              </button>
              {!confirmDelete ? (
                <button className="btn btn-ghost" onClick={() => setConfirmDelete(true)} style={{marginLeft: 'auto'}}>
                  🗑
                </button>
              ) : (
                <div style={{marginLeft: 'auto', display: 'flex', gap: 8}}>
                  <button className="btn btn-danger" onClick={() => onDelete(task.id)}>Delete</button>
                  <button className="btn btn-ghost" onClick={() => setConfirmDelete(false)}>Cancel</button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .task-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          transition: all 0.2s var(--ease-out);
          animation: fadeInUp 0.3s var(--ease-out) both;
          position: relative;
          /* Touch-friendly — no hover lift on mobile */
          -webkit-tap-highlight-color: transparent;
        }

        .task-card:hover {
          border-color: var(--border-default);
          background: var(--bg-card-hover);
          box-shadow: var(--shadow-sm);
          transform: translateY(-1px);
        }

        .task-card.overdue {
          border-color: rgba(255, 101, 132, 0.25);
          background: rgba(255, 101, 132, 0.04);
        }

        .task-card.completing {
          animation: taskComplete 0.4s var(--ease-out) forwards;
          pointer-events: none;
        }

        .priority-stripe {
          width: 4px;
          flex-shrink: 0;
          opacity: 0.8;
        }

        .task-card-inner {
          flex: 1;
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          min-width: 0;
        }

        .task-main-row {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
        }

        .task-title-block {
          flex: 1;
          cursor: pointer;
          min-width: 0;
        }

        .task-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .task-notes-preview {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 2px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .task-actions-inline {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          flex-shrink: 0;
        }

        .task-action-btn {
          padding: var(--space-1) var(--space-2);
          font-size: 0.9rem;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        .task-action-btn:hover { opacity: 1; }

        .task-expand-btn {
          background: transparent;
          color: var(--text-muted);
          font-size: 0.9rem;
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          transition: transform 0.2s;
        }
        .task-expand-btn:hover { color: var(--text-primary); }
        .task-expand-btn.open { transform: rotate(180deg); }

        .task-meta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-2);
        }

        .overdue-badge {
          background: var(--coral-dim);
          color: var(--coral);
          border: 1px solid rgba(255,101,132,0.3);
        }

        .due-badge {
          background: var(--amber-dim);
          color: var(--amber);
          border: 1px solid rgba(245,166,35,0.3);
        }

        .reward-preview {
          font-size: 0.72rem;
          color: var(--gold);
          font-weight: 700;
          margin-left: auto;
          opacity: 0.7;
        }

        .task-expanded {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          padding-top: var(--space-2);
          border-top: 1px solid var(--border-subtle);
        }

        .task-notes {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          background: var(--bg-elevated);
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-4);
          border: 1px solid var(--border-subtle);
        }

        .subtask-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .subtask-header {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          font-weight: 700;
          margin-bottom: 4px;
        }

        .subtask-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-2) var(--space-3);
          border-radius: var(--radius-md);
          cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.15s;
        }

        .subtask-item:hover {
          background: var(--bg-elevated);
          border-color: var(--border-subtle);
        }

        .subtask-item.done {
          opacity: 0.5;
        }

        .subtask-item.done .subtask-title {
          text-decoration: line-through;
          color: var(--text-muted);
        }

        .subtask-check {
          color: var(--green);
          font-size: 0.85rem;
          font-weight: 700;
          width: 16px;
          flex-shrink: 0;
        }

        .subtask-title {
          flex: 1;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .subtask-xp {
          font-size: 0.7rem;
          color: var(--xp-blue);
          font-weight: 700;
          opacity: 0.7;
        }

        .recovery-banner {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          background: var(--green-dim);
          border: 1px solid rgba(92,221,139,0.2);
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-4);
        }

        .recovery-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--green);
        }

        .recovery-subtitle {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        .task-action-row {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          align-items: center;
        }

        @media (max-width: 480px) {
          .task-action-row { gap: var(--space-1); }
          .task-action-row .btn { font-size: 0.78rem; padding: var(--space-2) var(--space-3); }
          .task-meta-row { gap: var(--space-1); }
          .reward-preview { display: none; }
        }
      `}</style>
    </div>
  );
}
