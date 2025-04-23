// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Use your actual project URL and anon key here
const supabaseUrl = 'https://your-project-id.supabase.co'
const supabaseAnonKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
import { supabase } from '@/lib/supabaseClient'

const signUp = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: 'test@example.com',
    password: 'supersecure123',
  })

  if (error) {
    console.error('Signup failed:', error.message)
  } else {
    console.log('Signed up:', data)
  }
}
