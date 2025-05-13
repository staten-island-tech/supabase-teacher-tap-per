<script setup>
import LoginView from './views/LoginView.vue';
import WebsiteBase from './components/WebsiteBase.vue';
import { RouterView } from 'vue-router';
</script>

<template>
<WebsiteBase></WebsiteBase>
<div class="pt-24 px-5">
    <router-view />
</div>
</template>

<style scoped>

</style>
