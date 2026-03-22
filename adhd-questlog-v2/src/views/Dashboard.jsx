// ============================================================
// DASHBOARD — Quest board: today's tasks, stats, quick-add
// ============================================================

import React, { useState, useMemo } from 'react';
import TaskCard from '../components/TaskCard';
import AddTaskModal from '../components/AddTaskModal';
import DailyQuestsPanel from '../components/DailyQuestsPanel';
import { sortTasks } from '../utils/rewards';

export default function Dashboard({
  user, tasks, onComplete, onToggleSubtask, onSnooze, onDelete, onAddTask, onStartFocus, dailyQuests,
}) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [filter, setFilter] = useState('all');
  const [quickTitle, setQuickTitle] = useState('');

  const pendingTasks = useMemo(() => sortTasks(tasks.filter(t => t.status === 'pending')), [tasks]);
  const overdueTasks = pendingTasks.filter(t => t.isOverdue || (t.dueAt && new Date(t.dueAt) < new Date()));
  const upcomingTasks = pendingTasks.filter(t => !t.isOverdue && !(t.dueAt && new Date(t.dueAt) < new Date()));

  const filteredTasks = useMemo(() => {
    if (filter === 'overdue') return overdueTasks;
    if (filter === 'high') return pendingTasks.filter(t => ['HIGH', 'URGENT'].includes(t.priority));
    return pendingTasks;
  }, [filter, pendingTasks, overdueTasks]);

  function handleQuickAdd(e) {
    e.preventDefault();
    if (!quickTitle.trim()) return;
    onAddTask({ title: quickTitle.trim(), priority: 'MEDIUM', effort: 'S' });
    setQuickTitle('');
  }

  // The "next best action" — top priority task
  const nextTask = pendingTasks[0];

  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 5)  return 'Good night';
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    if (h < 21) return 'Good evening';
    return 'Good night';
  })();

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title font-display">
            {greeting}, {user.displayName}
          </h1>
          <div className="dashboard-subtitle">
            {pendingTasks.length === 0
              ? '🎉 All clear! You\'re on top of everything.'
              : `You have ${pendingTasks.length} quest${pendingTasks.length !== 1 ? 's' : ''} pending.`
            }
            {overdueTasks.length > 0 && (
              <span className="overdue-warning"> · {overdueTasks.length} overdue</span>
            )}
          </div>
        </div>
        <button className="btn btn-primary add-quest-btn" onClick={() => setShowAddModal(true)}>
          ⚔ New Quest
        </button>
      </div>

      {/* Next best action spotlight */}
      {nextTask && (
        <div className="next-action-spotlight">
          <div className="next-action-label">
            <span className="pulse-dot" />
            NEXT BEST ACTION
          </div>
          <div className="next-action-content">
            <div className="next-action-title">{nextTask.title}</div>
            <div className="next-action-meta">
              {nextTask.effort && (
                <span>~{nextTask.effort === 'XS' ? '5' : nextTask.effort === 'S' ? '15' : nextTask.effort === 'M' ? '30' : nextTask.effort === 'L' ? '60' : '120'}min</span>
              )}
              {nextTask.dueAt && (
                <span>· due {new Date(nextTask.dueAt).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</span>
              )}
            </div>
          </div>
          <div className="next-action-btns">
            <button className="btn btn-primary" onClick={() => onStartFocus(nextTask)}>
              🔮 Start Focus
            </button>
            <button className="btn btn-success" onClick={() => onComplete(nextTask.id)}>
              ✓ Complete
            </button>
          </div>
        </div>
      )}

      {/* Daily quests */}
      {dailyQuests && (
        <DailyQuestsPanel
          quests={dailyQuests.quests}
          onClaim={dailyQuests.claimQuest}
          justCompleted={dailyQuests.justCompleted}
        />
      )}

      {/* Quick-add bar */}
      <form onSubmit={handleQuickAdd} className="quick-add-bar">
        <input
          type="text"
          placeholder="Quick add a task… (press Enter)"
          value={quickTitle}
          onChange={e => setQuickTitle(e.target.value)}
          className="quick-add-input"
        />
        <button type="submit" className="btn btn-secondary">Add</button>
        <button type="button" className="btn btn-primary" onClick={() => setShowAddModal(true)}>
          + Details
        </button>
      </form>

      {/* Daily quests */}
      {dailyQuests && (
        <DailyQuestsPanel
          quests={dailyQuests.quests}
          onClaim={dailyQuests.claimQuest}
          justCompleted={dailyQuests.justCompleted}
        />
      )}

      {/* Filter tabs */}
      <div className="filter-tabs">
        {[
          { id: 'all', label: `All (${pendingTasks.length})` },
          { id: 'high', label: `High Priority (${pendingTasks.filter(t => ['HIGH','URGENT'].includes(t.priority)).length})` },
          { id: 'overdue', label: `Overdue (${overdueTasks.length})`, danger: overdueTasks.length > 0 },
        ].map(tab => (
          <button
            key={tab.id}
            className={`filter-tab ${filter === tab.id ? 'active' : ''} ${tab.danger ? 'danger' : ''}`}
            onClick={() => setFilter(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Task list */}
      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🌟</div>
            <div className="empty-title">Nothing here!</div>
            <div className="empty-sub">
              {filter === 'overdue' ? 'No overdue tasks — great work!' : 'Add your first quest to get started.'}
            </div>
          </div>
        ) : (
          filteredTasks.map((task, i) => (
            <TaskCard
              key={task.id}
              task={task}
              userTalents={user.unlockedTalents}
              onComplete={onComplete}
              onToggleSubtask={onToggleSubtask}
              onSnooze={onSnooze}
              onDelete={onDelete}
              onFocus={onStartFocus}
              index={i}
            />
          ))
        )}
      </div>

      {/* Add task modal */}
      {showAddModal && (
        <AddTaskModal onAdd={onAddTask} onClose={() => setShowAddModal(false)} />
      )}

      <style>{`
        .dashboard {
          padding: var(--space-8);
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
        }

        .dashboard-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--space-4);
          flex-wrap: wrap;
        }

        .dashboard-title {
          font-size: 1.6rem;
          color: var(--text-primary);
          letter-spacing: 0.02em;
        }

        .dashboard-subtitle {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-top: var(--space-1);
        }

        .overdue-warning {
          color: var(--coral);
          font-weight: 700;
        }

        .add-quest-btn {
          flex-shrink: 0;
          padding: var(--space-3) var(--space-5);
          font-size: 0.9rem;
        }

        /* Next best action spotlight */
        .next-action-spotlight {
          background: linear-gradient(135deg, var(--bg-elevated), #1E1B40);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-xl);
          padding: var(--space-5) var(--space-6);
          display: flex;
          align-items: center;
          gap: var(--space-5);
          flex-wrap: wrap;
          box-shadow: 0 0 20px rgba(245,200,66,0.08);
          animation: fadeInDown 0.4s var(--ease-out);
        }

        .next-action-label {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--gold);
          font-family: var(--font-display);
          white-space: nowrap;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--gold);
          animation: pulse-gold 1.5s infinite;
          display: inline-block;
        }

        .next-action-content {
          flex: 1;
          min-width: 0;
        }

        .next-action-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .next-action-meta {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 2px;
          display: flex;
          gap: var(--space-2);
        }

        .next-action-btns {
          display: flex;
          gap: var(--space-2);
          flex-shrink: 0;
        }

        /* Quick-add bar */
        .quick-add-bar {
          display: flex;
          gap: var(--space-2);
        }

        .quick-add-input {
          flex: 1;
        }

        /* Filter tabs */
        .filter-tabs {
          display: flex;
          gap: var(--space-2);
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: var(--space-3);
        }

        .filter-tab {
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-md);
          background: transparent;
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 700;
          font-family: var(--font-body);
          cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.15s;
        }

        .filter-tab:hover {
          background: var(--bg-elevated);
          color: var(--text-secondary);
        }

        .filter-tab.active {
          background: var(--bg-elevated);
          color: var(--text-primary);
          border-color: var(--border-default);
        }

        .filter-tab.danger.active {
          background: var(--coral-dim);
          color: var(--coral);
          border-color: rgba(255,101,132,0.3);
        }

        /* Task list */
        .task-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        /* Empty state */
        .empty-state {
          text-align: center;
          padding: var(--space-8) var(--space-4);
          border: 1px dashed var(--border-default);
          border-radius: var(--radius-xl);
          animation: fadeInUp 0.3s var(--ease-out);
        }

        .empty-icon { font-size: 2.5rem; margin-bottom: var(--space-3); }
        .empty-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-secondary);
          font-family: var(--font-display);
        }
        .empty-sub {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin-top: var(--space-2);
        }

        @media (max-width: 600px) {
          .dashboard { padding: var(--space-4); }
          .next-action-spotlight { flex-direction: column; }
          .quick-add-bar { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
