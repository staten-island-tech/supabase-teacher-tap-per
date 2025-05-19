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
                        <div class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
                            <div class="flex items-center space-x-4 md:space-x-6">
                                <img src="https://via.placeholder.com/40" alt="Barone" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                                <div>
                                    <p class="text-lg font-semibold">Barone</p>
                                    <p class="text-sm text-gray-500">Adds: 1</p>
                                </div>
                            </div>
                            <div class="mt-4 md:mt-0 text-right md:text-left">
                                <p class="font-semibold text-xl">Current Count: 0</p>
                                <p class="text-sm text-gray-500">Upgrades: 0</p>
                            </div>
                            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade - $1</button>
                        </div>

                        <div class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
                            <div class="flex items-center space-x-4 md:space-x-6">
                                <img src="https://via.placeholder.com/40" alt="Colangelo" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                                <div>
                                    <p class="text-lg font-semibold">Colangelo</p>
                                    <p class="text-sm text-gray-500">Adds: 2</p>
                                </div>
                            </div>
                            <div class="mt-4 md:mt-0 text-right md:text-left">
                                <p class="font-semibold text-xl">Current Count: 0</p>
                                <p class="text-sm text-gray-500">Upgrades: 0</p>
                            </div>
                            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade - $2</button>
                        </div>

                        <div class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
                            <div class="flex items-center space-x-4 md:space-x-6">
                                <img src="https://via.placeholder.com/40" alt="Frusci" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                                <div>
                                    <p class="text-lg font-semibold">Frusci</p>
                                    <p class="text-sm text-gray-500">Adds: 5</p>
                                </div>
                            </div>
                            <div class="mt-4 md:mt-0 text-right md:text-left">
                                <p class="font-semibold text-xl">Current Count: 0</p>
                                <p class="text-sm text-gray-500">Upgrades: 0</p>
                            </div>
                            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade - $5</button>
                        </div>

                        <div class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
                            <div class="flex items-center space-x-4 md:space-x-6">
                                <img src="https://via.placeholder.com/40" alt="Partnow" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                                <div>
                                    <p class="text-lg font-semibold">Partnow</p>
                                    <p class="text-sm text-gray-500">Adds: 10</p>
                                </div>
                            </div>
                            <div class="mt-4 md:mt-0 text-right md:text-left">
                                <p class="font-semibold text-xl">Current Count: 0</p>
                                <p class="text-sm text-gray-500">Upgrades: 0</p>
                            </div>
                            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade - $10</button>
                        </div>

                        <div class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
                            <div class="flex items-center space-x-4 md:space-x-6">
                                <img src="https://via.placeholder.com/40" alt="Nickolauk" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                                <div>
                                    <p class="text-lg font-semibold">Nickolauk</p>
                                    <p class="text-sm text-gray-500">Adds: 25</p>
                                </div>
                            </div>
                            <div class="mt-4 md:mt-0 text-right md:text-left">
                                <p class="font-semibold text-xl">Current Count: 0</p>
                                <p class="text-sm text-gray-500">Upgrades: 0</p>
                            </div>
                            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade - $25</button>
                        </div>

                        <div class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
                            <div class="flex items-center space-x-4 md:space-x-6">
                                <img src="https://via.placeholder.com/40" alt="Amerosa" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                                <div>
                                    <p class="text-lg font-semibold">Amerosa</p>
                                    <p class="text-sm text-gray-500">Adds: 50</p>
                                </div>
                            </div>
                            <div class="mt-4 md:mt-0 text-right md:text-left">
                                <p class="font-semibold text-xl">Current Count: 0</p>
                                <p class="text-sm text-gray-500">Upgrades: 0</p>
                            </div>
                            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade - $50</button>
                        </div>

                        <div class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
                            <div class="flex items-center space-x-4 md:space-x-6">
                                <img src="https://via.placeholder.com/40" alt="Whalen" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                                <div>
                                    <p class="text-lg font-semibold">Whalen</p>
                                    <p class="text-sm text-gray-500">Adds: 100</p>
                                </div>
                            </div>
                            <div class="mt-4 md:mt-0 text-right md:text-left">
                                <p class="font-semibold text-xl">Current Count: 0</p>
                                <p class="text-sm text-gray-500">Upgrades: 0</p>
                            </div>
                            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade - $100</button>
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
    
</script>
<style scoped>
    
</style>
    