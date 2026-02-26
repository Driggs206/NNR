// ═══════════════════════════════════════ CORE: SAVE ════════════════════════

const SAVE_KEY = 'nibblenight_save_v1';

let _save = {
  gold:       0,
  town:       {},
  bestTime:   0,
  totalKills: 0,
  totalRuns:  0,
};

export function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) _save = Object.assign(_save, JSON.parse(raw));
  } catch (_) {}
}

export function persistSave() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(_save));
    showToast('Progress saved');
  } catch (_) {}
}

export function getSaveData()   { return _save; }
export function setSaveGold(v)  { _save.gold = v; }
export function addTownRank(id) { _save.town[id] = (_save.town[id] || 0) + 1; }
export function getTownRank(id) { return _save.town[id] || 0; }

export function recordRun(timeSeconds, kills) {
  _save.totalRuns  += 1;
  _save.totalKills += kills;
  if (timeSeconds > _save.bestTime) _save.bestTime = timeSeconds;
}

// ── Toast helper (shared utility, lives here for simplicity) ──────────────────
let _toastTimer = null;
export function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 1600);
}
