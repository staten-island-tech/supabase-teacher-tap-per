<template>
    <h1 class="text-l">Sign In Page</h1>
    <div class="items-center">
    <div class="userInput">
        <label for="username"> Username: </label>
        <input type="username" id="username" v-model="username">
    </div>
    <div class="passwordInput">
        <label for="password"> Password: </label>
        <input type="password" id="password" v-model="password">
    </div>
    <div class="buttonContainer">
        <button @click="signIn"></button>
        <button @click="signUp"></button>
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
  