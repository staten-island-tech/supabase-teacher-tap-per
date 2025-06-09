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
import { ref, watch, onMounted, nextTick, watchEffect } from 'vue'
import { gsap } from 'gsap'
import { useCounterStore } from '../stores/counter.js'
import { supabase } from '../clients/supabase'
import { useAuthStore } from '../stores/useAuth'

const counter = useCounterStore()
const auth = useAuthStore()
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

watchEffect(async () => {
  if (auth.user) {
    const { data, error } = await supabase
      .from('users')
      .select('grade')
      .eq('id', auth.user.id)
      .single()

    if (error) {
      console.error('Failed to fetch grade:', error)
    } else if (data) {
      counter.grade = data.grade || 0
    }
  }
})

watch(
  () => counter.grade,
  async (newVal) => {
    updateDigits(newVal)
    await nextTick()
    animateDigits()

    if (auth.user) {
      const { error } = await supabase
        .from('users')
        .update({ grade: newVal })
        .eq('id', auth.user.id)

      if (error) console.error('Failed to update grade:', error)
    }
  },
  { immediate: true },
)

onMounted(() => {
  updateDigits(counter.grade)
})
</script>
