<template>
    <div>
        <div v-if="!user">
            <h1>You need to be logged in to use this feature.</h1>
        </div>
        <div v-if="user">
            <h1>You are logged in</h1>
        </div>
    </div>
    </template>
    
    <script setup>
    import { user } from '@/useAuth';
    
    </script>
    <style scoped>
    
    </style>
    