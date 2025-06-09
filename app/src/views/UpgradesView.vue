<template>
<UpgradeList>
  <div
    v-for="person in upgradeStore.upgrades"
    :key="person.name" 
    class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md"
  >

  <div class="flex items-center space-x-4 md:space-x-6">
  <img
    :src="person.image"
    :alt="person.name"
    class="w-12 h-12 md:w-16 md:h-16 rounded-full"
  />
  <div>
  <p class="text-lg font-semibold">{{ person.name }}</p>
  <p class="text-sm text-gray-500">Adds: {{ person.adds }}</p>
  </div>
  </div>

    <div class="flex flex-col items-end mt-4 md:mt-0 space-y-2">
    <div class="text-right">
    <p class="font-semibold text-xl">Current Count: {{ person.count }}</p>
    <p class="text-sm text-gray-500">Current Stats: +{{ person.upgrades }}</p>

  </div>
    <button @click="upgradeStore.upgradeButton(person)" class="bg-blue-500 text-white py-2 px-4 rounded-lg">
    Upgrade - ${{ person.cost.toFixed(2) }}
    </button>
   </div>
</div>
</UpgradeList>
</template>
    
<script setup>
import { useUpgradeStore } from '@/stores/useUpgrade';
import { useAuthStore } from '@/stores/useAuth';
import { onMounted, watch } from 'vue';
import UpgradeList from '@/components/UpgradeList.vue';

const upgradeStore = useUpgradeStore();
const authStore = useAuthStore();

onMounted(() => {
  if (authStore.user) {
    upgradeStore.loadUpgrades();
  }
});

watch(() => authStore.user, (newUser) => {
  if (newUser) {
    upgradeStore.loadUpgrades();
  }
});

</script>
<style scoped>
    
</style>
    