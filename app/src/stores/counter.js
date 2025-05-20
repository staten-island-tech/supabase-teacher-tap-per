import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const grade = ref(0)
  const click = ref(1)

  function increment() {
    count.value++
  }

  function incrementGrade() {
    grade.value += click.value
  }

  return { count, increment, grade, click, incrementGrade }
})
