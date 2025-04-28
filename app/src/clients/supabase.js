import { createClient } from "@supabase/supabase-js";


const supabaseURL = import.meta.env.VITE_SUPAURL;
const supabaseKEY = import.meta.env.VITE_SUPAKEY;

export const supabase = createClient(supabaseURL, supabaseKEY)

export default supabase