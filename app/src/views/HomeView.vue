<template>
  <div>
    <div v-if="!user">
      <h1>You need to be logged in</h1>
    </div>
    <div v-else>
      <h1>Welcome, {{ user.email }}</h1>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/useAuth'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
</script>

<style scoped></style>
