import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const grade = ref(0)
  const click = ref(1)

  function incrementGrade() {
    grade.value += click.value
  }

  function addClickPower(amount) {
    click.value += amount
  }

  return { grade, click, incrementGrade, addClickPower }
})
