<template>
<div>
    <div v-if="!user">
        <h1>You need to be logged i</h1>
    </div>
    <div v-if="user">
    </div>
</div>
</template>

<script setup>
import { user } from '@/useAuth';

</script>

<style scoped>

</style>
