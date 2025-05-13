<template>
    <div>
        <div v-if="!user">
            <h1>You need to be logged in to use this feature.</h1>
        </div>
        <div v-if="user">
            <div class="container">
                <h2>Email: {{ user.email }}</h2>
            </div>
        </div>
    </div>
    </template>
    
    <script setup>
    import { user } from '@/useAuth';

    
    </script>
    <style scoped>
    
    </style>
    