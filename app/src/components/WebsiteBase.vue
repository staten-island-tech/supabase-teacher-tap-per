<script setup>
import { user, useAuth } from '../stores/useAuth'
const { signOut } = useAuth()
</script>
<template>
  <div>
    <div class="fixed top-0 w-full z-50 shadow-md px-5 py-2 bg-white">
      <div class="flex flex-wrap justify-center items-center">
        <div class="button border-black border-2 rounded bg-amber-100 m-1">
          <router-link to="/" class="text-xl m-3">Home</router-link>
        </div>
        <div class="button border-black border-2 rounded bg-amber-100 m-1">
          <router-link to="/upgrades" class="text-xl m-3">Upgrades</router-link>
        </div>
        <div class="button border-black border-2 rounded bg-amber-100 m-1">
          <router-link to="/profile" class="text-xl m-3">Profile</router-link>
        </div>
        <div v-if="!user" class="button border-black border-2 rounded bg-amber-100 m-1">
          <router-link to="/login" class="text-xl m-3">Login</router-link>
        </div>
        <div
          v-else
          class="button border-black border-2 rounded bg-red-200 cursor-pointer m-1"
          @click="signOut"
        >
          <span class="text-xl m-3">Logout</span>
        </div>
      </div>
    </div>

  </div>
</template>


