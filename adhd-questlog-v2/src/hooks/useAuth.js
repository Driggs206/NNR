// ============================================================
// useAuth — Supabase auth session management
// ============================================================

import { useState, useEffect } from 'react';
import { supabase, isSupabaseReady } from '../lib/supabase';

export function useAuth() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  // Detect recovery mode from URL hash immediately on load
  const hashIsRecovery = typeof window !== 'undefined' &&
    window.location.hash.includes('access_token') &&
    !window.location.hash.includes('error=');

  const [isRecovery, setIsRecovery] = useState(hashIsRecovery);

  // Extract error from URL hash (e.g. expired link)
  const hashError = typeof window !== 'undefined' && window.location.hash.includes('error=')
    ? decodeURIComponent((window.location.hash.match(/error_description=([^&]*)/) || [])[1] || 'Link expired').replace(/\+/g, ' ')
    : null;

  useEffect(() => {
    if (!isSupabaseReady) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setLoading(false);
        setError(null);
        if (event === 'PASSWORD_RECOVERY') {
          setIsRecovery(true);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  async function signUp(email, password, displayName) {
    setError(null);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { display_name: displayName } },
    });
    if (error) { setError(error.message); return 'error'; }
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

  async function updatePassword(newPassword) {
    setError(null);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) { setError(error.message); return false; }
    setIsRecovery(false);
    return true;
  }

  return {
    session,
    user:       session?.user ?? null,
    userId:     session?.user?.id ?? null,
    isLoggedIn: !!session,
    loading,
    error:      error || hashError,
    isRecovery,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
    isSupabaseReady,
  };
}