import { createClient } from '@supabase/supabase-js'

const supabaseURL = import.meta.enc.VITE_SUPAURL
const supabaseKEY = import.meta.enc.VITE_SUPAKEY

export const supabase = createClient(supabaseURL, supabaseKEY)
