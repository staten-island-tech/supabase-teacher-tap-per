import { ref } from 'vue'
import { supabase } from '../clients/supabase'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const userGrade = ref(null)

  async function fetchSession() {
    const { data } = await supabase.auth.getSession()
    user.value = data.session?.user || null
    if (user.value?.email) {
      await fetchGrade(user.value.email)
    }
  }

  async function fetchGrade(email) {
    const { data, error } = await supabase.from('users').select('grade').eq('email', email).single()

    if (error) {
      console.error('Error fetching grade:', error)
      userGrade.value = null
    } else {
      userGrade.value = data.grade
    }
  }

  supabase.auth.onAuthStateChange((_event, session) => {
    user.value = session?.user || null
    if (user.value?.email) {
      fetchGrade(user.value.email)
    }
  })

  async function signOut() {
    await supabase.auth.signOut()
    user.value = null
    userGrade.value = null
  }

  return { user, userGrade, fetchSession, signOut }
})
