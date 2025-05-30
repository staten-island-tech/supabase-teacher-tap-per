<template>
  <div class="text-xl font-bold">
    <h1>Grade: {{ counter.grade }}</h1>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter.js'

const counter = useCounterStore()
</script>

<style scoped></style>
