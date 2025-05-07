<template>
    <div class="container flex m-auto justify-center mt-5">
      <div class="button border-black border-2 rounded bg-amber-100 m-1">
        <router-link to="/" class="text-xl m-3">Home</router-link>
      </div>
      <div class="button border-black border-2 rounded bg-amber-100 m-1">
        <router-link to="profile" class="text-xl m-3">Profile</router-link>
      </div>
    </div>
  </template>

<script setup>
import { RouterLink } from 'vue-router'
</script>