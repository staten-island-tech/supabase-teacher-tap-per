<script setup>
import frusciHead from '../assets/FrusciHead.png'
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div>
    <button @click="counter.incrementGrade">
      <img :src="frusciHead" />
    </button>
  </div>
</template>

<style></style>
