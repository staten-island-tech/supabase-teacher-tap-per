<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="incrementCounter">Increment</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCounterStore } from '../stores/counter.js'

useCounterStore().count = 1
</script>

<style scoped>
div {
  font-size: 1.2rem;
  font-weight: bold;
}
button {
  margin-top: 10px;
  font-size: 1rem;
}
</style>
