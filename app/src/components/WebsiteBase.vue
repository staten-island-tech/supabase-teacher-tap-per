<script setup>
import { user, useAuth } from '../useAuth'
const { signOut } = useAuth()
</script>

<template>
  <div class="w-full px-5 mt-5">
    <div class="flex flex-wrap justify-between items-center w-full">
      <div class="flex flex-wrap justify-center flex-1">
        <div class="button border-black border-2 rounded bg-amber-100 m-1">
          <router-link to="/" class="text-xl m-3">Home</router-link>
        </div>
        <div class="button border-black border-2 rounded bg-amber-100 m-1">
          <router-link to="/upgrades" class="text-xl m-3">Upgrades</router-link>
        </div>
        <div class="button border-black border-2 rounded bg-amber-100 m-1">
          <router-link to="/profile" class="text-xl m-3">Profile</router-link>
        </div>
      </div>

      <div>
        <div v-if="!user" class="button border-black border-2 rounded bg-amber-100">
          <router-link to="/login" class="text-xl m-3">Login</router-link>
        </div>
        <div v-else class="button border-black border-2 rounded bg-red-200 cursor-pointer m-3" @click="signOut">
          Logout
        </div>
      </div>
    </div>
  </div>
</template>
