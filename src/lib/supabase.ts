import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create a fallback client that won't crash the app
let supabase: any

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.')
  
  // Create a mock client to prevent app crashes
  supabase = {
    auth: {
      signUp: async () => ({ error: { message: 'Supabase not configured. Please set environment variables.' } }),
      signInWithPassword: async () => ({ error: { message: 'Supabase not configured. Please set environment variables.' } }),
      signOut: async () => ({ error: null }),
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
    }
  }
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export { supabase }