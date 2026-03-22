// ============================================================
// DEV CONFIG — Flip DEV_MODE to false before shipping
// ============================================================

export const DEV_MODE = true;

// OFFLINE_MODE is controlled by .env — never hardcode true here
// Add VITE_OFFLINE_MODE=true to your local .env to bypass auth
// GitHub never has this variable so it always stays false in production
export const OFFLINE_MODE = import.meta.env.VITE_OFFLINE_MODE === 'true';

export const DEV_CHEATS = {
  goldSmall:   500,
  goldLarge:   5000,
  instantKill: true,
};
