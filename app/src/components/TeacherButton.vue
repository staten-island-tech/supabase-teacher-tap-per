<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <button @click="counter.incrementGrade" class="focus:outline-none">
      <img :src="frusciHead" class="w-256 cursor-pointer" alt="Frusci Head" />
    </button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
import frusciHead from '../assets/frusciHead.png'

const counter = useCounterStore()
</script>
