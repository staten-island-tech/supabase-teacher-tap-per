<template>
    <div class="flex items-center justify-center min-h-screen bg-white">
      <div class="text-center border p-8 rounded shadow">
        <h1 class="text-4xl mb-4">Teacher Clicker</h1>
        <h2 class="text-xl mb-1">Create an account</h2>
        <h3 class="mb-4">Enter a username and password</h3>
  
        <div class="mb-4">
          <label for="username" class="block text-left mb-1">Username:</label>
          <input type="text" id="username" v-model="username" class="w-full border rounded px-2 py-1">
        </div>
  
        <div class="mb-4">
          <label for="password" class="block text-left mb-1">Password:</label>
          <input type="password" id="password" v-model="password" class="w-full border rounded px-2 py-1">
        </div>
  
        <div class="flex justify-center space-x-4">
          <button @click="signIn" class="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Sign In</button>
          <button @click="signUp" class="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Sign Up</button>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue';
let password = ref("");
let username = ref("");

function signIn() {
    console.log("sign in")
}
 
function signUp() {
    console.log("sign up")
}
</script>
<style scoped>

</style>
  