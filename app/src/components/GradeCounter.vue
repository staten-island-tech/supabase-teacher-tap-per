<template>
  <div class="text-xl font-bold text-center flex justify-center space-x-1">
    <div
      v-for="(digit, index) in digits"
      :key="index"
      class="relative w-8 h-10 overflow-hidden text-center font-mono text-2xl"
      ref="digitRefs"
    >
      <div class="absolute top-0 left-0" :style="{ transition: 'none' }">
        <div v-for="n in 10" :key="n" class="h-10 leading-10">
          {{ n - 1 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { useCounterStore } from '../stores/counter.js'
/* import { supabase } from '@/supabase'
import { useUser } from '@/useAuth' */

const counter = useCounterStore()
const user = useUser()

const digits = ref([])
const digitRefs = ref([])

const digitHeight = 40

function updateDigits(value) {
  digits.value = String(value).padStart(3, '0').split('')
}

function animateDigits() {
  digits.value.forEach((digit, i) => {
    const target = parseInt(digit)
    const el = digitRefs.value[i]?.querySelector('div')
    if (el) {
      gsap.to(el, {
        y: -target * digitHeight,
        duration: 0.2,
        ease: 'power2.inOut',
      })
    }
  })
}

watch(
  () => counter.grade,
  async (newVal) => {
    updateDigits(newVal)
    await nextTick()
    animateDigits()

    const { error } = await supabase.from('users').update({ grade: newVal }).eq('id', user.value.id)

    if (error) console.error('Failed to update grade:', error)
  },
  { immediate: true },
)

onMounted(() => {
  updateDigits(counter.grade)
})
</script>
