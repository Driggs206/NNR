// ============================================================
// useAuth — Supabase auth session management
// ============================================================

import { useState, useEffect } from 'react';
import { supabase, isSupabaseReady } from '../lib/supabase';

export function useAuth() {
  const [session, setSession]   = useState(null);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    if (!isSupabaseReady) {
      // No Supabase configured — skip auth, run in local-only mode
      setLoading(false);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setLoading(false);
        setError(null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  async function signUp(email, password, displayName) {
    setError(null);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: displayName },
      },
    });
    if (error) { setError(error.message); return 'error'; }
    // Email confirmation enabled: session is null but no error
    if (data?.user && !data?.session) return 'confirm_email';
    return 'ok';
  }

  async function signIn(email, password) {
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    return !error;
  }

  async function signOut() {
    await supabase.auth.signOut();
    // Clear local game state on sign out
    localStorage.removeItem('dq_user');
    localStorage.removeItem('dq_tasks');
    localStorage.removeItem('dq_history');
    localStorage.removeItem('dq_combat');
  }

  async function resetPassword(email) {
    setError(null);
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) setError(error.message);
    return !error;
  }

  return {
    session,
    user:       session?.user ?? null,
    userId:     session?.user?.id ?? null,
    isLoggedIn: !!session,
    loading,
    error,
    signUp,
    signIn,
    signOut,
    resetPassword,
    isSupabaseReady,
  };
}
