<template>
  <div class="flex items-start justify-center bg-white">
    <div class="text-center border p-8 rounded shadow mt-16">
      <h1 class="text-4xl mb-4">Teacher Clicker</h1>
      <h2 class="text-xl mb-1">Create an account</h2>
      <h3 class="mb-4">Enter an email and password</h3>

      <div class="mb-4">
        <label for="email" class="block text-left mb-1">Email:</label>
        <input type="text" id="email" v-model="email" class="w-full border rounded px-2 py-1" />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-left mb-1">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="w-full border rounded px-2 py-1"
        />
      </div>

      <div class="flex justify-center space-x-4">
        <button @click="signIn" class="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
          Sign In
        </button>
        <button @click="signUp" class="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/clients/supabase'
import { useAuthStore } from '@/stores/useAuth'
import { useRouter } from 'vue-router'
import { useUpgradeStore } from '@/stores/useUpgrade'

let password = ref('')
let email = ref('')
const router = useRouter()

const upgradeStore = useUpgradeStore()
const auth = useAuthStore()

async function signIn() {
  const currentSession = await supabase.auth.getSession()

  if (currentSession.data.session) {
    console.log('Already signed in as:', currentSession.data.session.user.email)
    alert("You're already signed in.")
    return
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if (error) {
    console.log(error)
    alert(error)
  } else {
    auth.user = data.user
    await upgradeStore.loadUpgrades()
    router.push('./')
  }
}

async function signUp() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })

  if (error) {
    if (error.status === 409) {
      alert('This email is already registered.')
    } else {
      console.error('Sign-up error:', error.message)
      alert('An error occurred during sign-up.')
    }
    return
  }

  if (data.user) {
    auth.user = data.user
    router.push('/')
  }
}
</script>
<style scoped></style>
