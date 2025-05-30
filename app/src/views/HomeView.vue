<template>
  <div>
    <div v-if="!user">
      <h1>You need to be logged i</h1>
    </div>
    <div v-if="user"><GradeCounter /> <TeacherButton /></div>
  </div>
</template>

<script setup>
import { user } from '@/useAuth'
import GradeCounter from '@/components/GradeCounter.vue'
import TeacherButton from '@/components/TeacherButton.vue'
</script>

<style scoped></style>
