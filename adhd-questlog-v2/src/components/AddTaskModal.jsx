// ============================================================
// ADD TASK MODAL — Quick-add with progressive disclosure
// ============================================================

import React, { useState, useRef, useEffect } from 'react';
import { PRIORITIES, EFFORT } from '../store/initialState';
import { uid } from '../utils/rewards';

const DEFAULT_FORM = {
  title: '',
  notes: '',
  priority: 'MEDIUM',
  effort: 'S',
  dueAt: '',
  tags: [],
  subtasks: [],
};

export default function AddTaskModal({ onAdd, onClose }) {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [advanced, setAdvanced] = useState(false);
  const [newSubtask, setNewSubtask] = useState('');
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim()) return;
    onAdd({
      ...form,
      dueAt: form.dueAt ? new Date(form.dueAt).toISOString() : null,
      subtasks: form.subtasks,
    });
    onClose();
  }

  function addSubtask() {
    if (!newSubtask.trim()) return;
    setForm(f => ({
      ...f,
      subtasks: [...f.subtasks, { id: uid(), title: newSubtask.trim(), done: false }],
    }));
    setNewSubtask('');
  }

  function removeSubtask(id) {
    setForm(f => ({ ...f, subtasks: f.subtasks.filter(s => s.id !== id) }));
  }

  function toggleTag(tag) {
    setForm(f => ({
      ...f,
      tags: f.tags.includes(tag) ? f.tags.filter(t => t !== tag) : [...f.tags, tag],
    }));
  }

  const TAGS = ['work', 'personal', 'health', 'errands', 'comms', 'school'];

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box">
        <div className="modal-header">
          <h2 className="font-display" style={{color: 'var(--gold)'}}>⚔ New Quest</h2>
          <button className="btn btn-ghost" onClick={onClose} style={{fontSize: '1.2rem'}}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="add-task-form">
          {/* Title */}
          <div className="form-group">
            <input
              ref={titleRef}
              type="text"
              placeholder="What needs to be done?"
              value={form.title}
              onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              className="title-input"
              required
            />
          </div>

          {/* Priority selector */}
          <div className="form-group">
            <label className="form-label">Priority</label>
            <div className="priority-selector">
              {Object.entries(PRIORITIES).map(([key, p]) => (
                <button
                  key={key}
                  type="button"
                  className={`priority-option ${form.priority === key ? 'active' : ''}`}
                  style={{ '--pcolor': p.color }}
                  onClick={() => setForm(f => ({ ...f, priority: key }))}
                >
                  <span>{p.icon}</span>
                  <span>{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Effort selector */}
          <div className="form-group">
            <label className="form-label">How long will this take?</label>
            <div className="effort-selector">
              {Object.entries(EFFORT).map(([key, e]) => (
                <button
                  key={key}
                  type="button"
                  className={`effort-option ${form.effort === key ? 'active' : ''}`}
                  onClick={() => setForm(f => ({ ...f, effort: key }))}
                >
                  {e.label}
                </button>
              ))}
            </div>
          </div>

          {/* Advanced toggle */}
          <button
            type="button"
            className="advanced-toggle"
            onClick={() => setAdvanced(a => !a)}
          >
            <span>{advanced ? '▾' : '▸'}</span>
            <span>{advanced ? 'Fewer options' : 'More options (notes, due date, subtasks, tags)'}</span>
          </button>

          {advanced && (
            <div className="advanced-section animate-in">
              {/* Notes */}
              <div className="form-group">
                <label className="form-label">Notes</label>
                <textarea
                  placeholder="Any details or context..."
                  value={form.notes}
                  onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                  rows={3}
                />
              </div>

              {/* Due date */}
              <div className="form-group">
                <label className="form-label">Due date</label>
                <input
                  type="datetime-local"
                  value={form.dueAt}
                  onChange={e => setForm(f => ({ ...f, dueAt: e.target.value }))}
                />
              </div>

              {/* Tags */}
              <div className="form-group">
                <label className="form-label">Tags</label>
                <div className="tag-selector">
                  {TAGS.map(tag => (
                    <button
                      key={tag}
                      type="button"
                      className={`tag-option ${form.tags.includes(tag) ? 'active' : ''}`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subtasks */}
              <div className="form-group">
                <label className="form-label">Break it down (subtasks)</label>
                <div className="subtask-add-row">
                  <input
                    type="text"
                    placeholder="Add a step..."
                    value={newSubtask}
                    onChange={e => setNewSubtask(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addSubtask(); } }}
                  />
                  <button type="button" className="btn btn-secondary" onClick={addSubtask}>+ Add</button>
                </div>
                {form.subtasks.length > 0 && (
                  <div className="subtask-preview-list">
                    {form.subtasks.map(s => (
                      <div key={s.id} className="subtask-preview-item">
                        <span>○</span>
                        <span style={{flex: 1}}>{s.title}</span>
                        <button type="button" className="btn btn-ghost" onClick={() => removeSubtask(s.id)}>×</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Submit */}
          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" disabled={!form.title.trim()}>
              ⚔ Add Quest
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-6);
        }

        @media (max-width: 600px) {
          /* Full-screen modal on mobile */
          .modal-overlay {
            align-items: flex-end;
            padding: 0;
          }
          .modal-box {
            border-radius: var(--radius-xl) var(--radius-xl) 0 0;
            max-height: 92dvh;
            padding: var(--space-6) var(--space-5);
          }
        }

        .add-task-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .form-label {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-muted);
        }

        .title-input {
          font-size: 1.05rem !important;
          font-weight: 600 !important;
        }

        .priority-selector, .effort-selector {
          display: flex;
          gap: var(--space-2);
          flex-wrap: wrap;
        }

        .priority-option, .effort-option {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-3);
          border-radius: var(--radius-md);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-size: 0.82rem;
          font-weight: 700;
          font-family: var(--font-body);
          cursor: pointer;
          transition: all 0.15s;
        }

        .priority-option:hover, .effort-option:hover {
          border-color: var(--border-default);
          color: var(--text-primary);
        }

        .priority-option.active {
          background: color-mix(in srgb, var(--pcolor) 15%, transparent);
          border-color: color-mix(in srgb, var(--pcolor) 40%, transparent);
          color: var(--pcolor);
        }

        .effort-option.active {
          background: var(--gold-dim);
          border-color: var(--gold-glow);
          color: var(--gold);
        }

        .advanced-toggle {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          background: transparent;
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 600;
          font-family: var(--font-body);
          cursor: pointer;
          padding: var(--space-2) 0;
          transition: color 0.15s;
        }
        .advanced-toggle:hover { color: var(--text-secondary); }

        .advanced-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          padding: var(--space-4);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .tag-selector {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
        }

        .tag-option {
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-size: 0.78rem;
          font-weight: 700;
          font-family: var(--font-body);
          cursor: pointer;
          transition: all 0.15s;
        }
        .tag-option:hover { border-color: var(--border-default); color: var(--text-primary); }
        .tag-option.active {
          background: var(--purple-dim);
          border-color: rgba(179,157,219,0.4);
          color: var(--purple);
        }

        .subtask-add-row {
          display: flex;
          gap: var(--space-2);
        }

        .subtask-preview-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: var(--space-2);
        }

        .subtask-preview-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.85rem;
          color: var(--text-secondary);
          padding: var(--space-2) var(--space-3);
          background: var(--bg-card);
          border-radius: var(--radius-sm);
        }

        .form-actions {
          display: flex;
          gap: var(--space-3);
          justify-content: flex-end;
          padding-top: var(--space-4);
          border-top: 1px solid var(--border-subtle);
        }
      `}</style>
    </div>
  );
}
