// ============================================================
// SUPABASE CLIENT
// Reads from .env — copy .env.example → .env and fill in your keys
// ============================================================

import { createClient } from '@supabase/supabase-js';

const supabaseUrl  = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnon) {
  console.error(
    '[Dopamine Quest] Missing Supabase env vars.\n' +
    'Copy .env.example → .env and add your project URL and anon key.\n' +
    'Get them from: Supabase Dashboard → Project Settings → API'
  );
}

export const supabase = createClient(supabaseUrl || '', supabaseAnon || '', {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

// ── Convenience: is Supabase configured? ──────────────────
// Returns false if env vars are missing — app falls back to localStorage only
export const isSupabaseReady = !!(supabaseUrl && supabaseAnon);
