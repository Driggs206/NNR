// ============================================================
// CONTENT FILTER
// Simple profanity + toxic content filter for wall posts.
// Add words to BLOCKED_TERMS to extend the list.
// To disable entirely: set FILTER_ENABLED = false
// ============================================================

export const FILTER_ENABLED = true;

// ── Blocked terms ─────────────────────────────────────────
// Keep this list in a separate constant so it's easy to audit/extend.
// Words are matched as whole words or substrings depending on STRICT_MODE.
const BLOCKED_TERMS = [
  // Profanity (common)
  'fuck', 'shit', 'cunt', 'bitch', 'asshole', 'bastard', 'damn',
  'piss', 'cock', 'dick', 'pussy', 'whore', 'slut',
  // Slurs (partial list — extend as needed)
  'nigger', 'nigga', 'faggot', 'retard', 'spastic',
  // Harassment patterns
  'kys', 'kill yourself', 'go die', 'i hate you',
  // Spam patterns
  'click here', 'buy now', 'free money', 'OnlyFans',
];

// Leet-speak substitutions to catch basic evasion
const LEET_MAP = {
  '@': 'a', '4': 'a', '3': 'e', '1': 'i', '!': 'i',
  '0': 'o', '5': 's', '7': 't', '+': 't',
};

function normalise(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/gi, c => LEET_MAP[c] || c)
    .replace(/(.)\1{2,}/g, '$1$1'); // collapse repeated chars (fuuuck → fuuck)
}

/**
 * Returns true if the text contains blocked content.
 */
export function containsBlockedContent(text) {
  if (!FILTER_ENABLED || !text) return false;
  const normalised = normalise(text);
  return BLOCKED_TERMS.some(term => normalised.includes(normalise(term)));
}

/**
 * Replaces blocked words with asterisks. 
 * Use for display — prefer blocking submission entirely.
 */
export function censorText(text) {
  if (!FILTER_ENABLED || !text) return text;
  let result = text;
  BLOCKED_TERMS.forEach(term => {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(escaped, 'gi');
    result = result.replace(re, m => '*'.repeat(m.length));
  });
  return result;
}

/**
 * Full validation for a wall post.
 * Returns { ok: true } or { ok: false, reason: string }
 */
export function validateWallPost(text) {
  if (!text || !text.trim()) {
    return { ok: false, reason: 'Message cannot be empty.' };
  }
  if (text.trim().length > 500) {
    return { ok: false, reason: 'Message must be 500 characters or less.' };
  }
  if (containsBlockedContent(text)) {
    return { ok: false, reason: 'Your message contains content that isn\'t allowed.' };
  }
  return { ok: true };
}
