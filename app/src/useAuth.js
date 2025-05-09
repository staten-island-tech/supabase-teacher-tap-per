import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

export const user = ref(null)

export function useAuth() {
  onMounted(async () => {
    const { data } = await supabase.auth.getSession()
    user.value = data.session?.user || null

    supabase.auth.onAuthStateChange((_event, session) => {
      user.value = session?.user || null
    })
  })

  async function signOut() {
    await supabase.auth.signOut()
    user.value = null
  }

  return { user, signOut }
}