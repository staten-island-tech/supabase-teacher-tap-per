import { ref } from 'vue'
import { supabase } from '../clients/supabase'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)

  async function fetchSession() {
    const { data } = await supabase.auth.getSession()
    user.value = data.session?.user || null
  }

  supabase.auth.onAuthStateChange((_event, session) => {
    user.value = session?.user || null
  })

  async function signOut() {
    await supabase.auth.signOut()
    user.value = null
  }

  return { user, fetchSession, signOut }
})
