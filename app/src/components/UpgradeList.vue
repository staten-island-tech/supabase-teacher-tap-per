<template>
    <div>
      <div v-if="!authStore.user">
        <h1>You need to be logged in to use this feature.</h1>
      </div>
      <div v-if="authStore.user">
        <div class="bg-gray-100 p-8">
          <div class="bg-gray-100 p-4 md:p-8">
            <div class="max-w-4xl mx-auto space-y-4">
                <slot>
                    
                </slot>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { useAuthStore } from '@/stores/useAuth';
const authStore = useAuthStore();
</script>