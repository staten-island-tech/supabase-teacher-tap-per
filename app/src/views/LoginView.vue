<template>
    <h1 class="text-4xl text-center m-6">Teacher Clicker</h1>
    <div class="container text-center m-auto">
        <div class="userInput m-2">
            <label for="username" class="text-xl"> Username: </label>
            <input type="username" id="username" v-model="username" class="border-1 rounded-sm">
        </div>
        <div class="passwordInput m-2">
            <label for="password" class="text-xl"> Password: </label>
            <input type="password" id="password" v-model="password" class="border-1 rounded-sm">
        </div>
        <div class="buttonContainer">
            <button @click="signIn" class="m-2 text-center border-2 rounded-md w-22 h-10 text-white bg-black">Sign In</button>
            <button @click="signUp" class="m-2 text-center border-2 rounded-md w-22 h-10 text-white bg-black">Sign Up</button>
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
  