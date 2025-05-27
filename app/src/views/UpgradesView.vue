<template>
<div>
  <div v-if="!user">
    <h1>You need to be logged in to use this feature.</h1>
  </div>
  <div v-if="user">
    <div class="bg-gray-100 p-8">
      <div class="bg-gray-100 p-4 md:p-8">
        <div class="max-w-4xl mx-auto space-y-4">
          <div class="space-y-4">
            <div
              v-for="person in upgrades"
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
                  <p class="text-sm text-gray-500">Upgrades: +{{ person.upgrades }}</p>
                </div>
                <button @click="upgradeButton(person)" class="bg-blue-500 text-white py-2 px-4 rounded-lg">
                  Upgrade - ${{ person.cost }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
    
<script setup>
import { user } from '@/useAuth';
import { ref } from 'vue';
const upgrades = ref([
      { name: "Barone", adds: 1, cost: 1, count: 0, upgrades: 0, image: "BaroneAlison.jpg" },
      { name: "Colangelo", adds: 2, cost: 10, count: 0, upgrades: 0, image: "ColangeloJonathan.jpg" },
      { name: "Frusci", adds: 5, cost: 100, count: 0, upgrades: 0, image: "FrusciJoseph.jpg" },
      { name: "Partnow", adds: 10, cost: 500, count: 0, upgrades: 0, image: "Partnow.jpg" },
      { name: "Nickolauk", adds: 25, cost: 1000, count: 0, upgrades: 0, image: "Nick.png" },
      { name: "Amerosa", adds: 50, cost: 5000, count: 0, upgrades: 0, image: "https://via.placeholder.com/40" },
      { name: "Whalen", adds: 100, cost: 15000, count: 0, upgrades: 0, image: "WhalenMichael.jpg" },])

function upgradeButton(x) {
  x.cost = Math.round((x.cost * 1.04 * 100)) / 100

  x.count = x.count + 1

  x.upgrades = x.upgrades + x.adds
}

</script>
<style scoped>
    
</style>
    