<template>
  <div>
    <div v-if="!user">
      <h1>You need to be logged in to use this feature.</h1>
    </div>
    <div v-else>
      <div v-if="user"><GradeCounter /> <TeacherButton /></div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/useAuth'
import { storeToRefs } from 'pinia'
import GradeCounter from '@/components/GradeCounter.vue'
import TeacherButton from '@/components/TeacherButton.vue'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
</script>
<style scoped></style>
