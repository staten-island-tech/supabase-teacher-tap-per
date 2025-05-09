import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useGradeStore = defineStore('grade', () => {
  const grade = ref(0)

  return { grade }
})
