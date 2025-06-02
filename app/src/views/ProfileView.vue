<template>
    <div>
        <div v-if="!user">
            <h1>You need to be logged in to use this feature.</h1>
        </div>
        <div v-if="user">
            <div class="container justify-center items-center text-center m-auto">
                <h2 class="bg-blue-100 ">Email: {{ user.email }}</h2>
                <h2 class="bg-blue-100 ">Current Session:</h2>
                <h2 class="bg-blue-100 ">Playtime: </h2>
                <h2 class="bg-blue-100 ">Grade Per Click: </h2>
                <h2 class="bg-blue-100 ">Total Grade: </h2>

            </div>
        </div>
    </div>
    </template>
    
    <script setup>
    import { user } from '@/stores/useAuth';

    
    </script>
    <style scoped>
    
    </style>
    