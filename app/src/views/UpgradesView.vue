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
                <img src="https://via.placeholder.com/40" alt="Image" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                <div>
                    <p class="text-lg font-semibold">Item 1</p>
                    <p class="text-sm text-gray-500">Multiplier: 2x</p>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-right md:text-left">
                <p class="font-semibold text-xl">Count: 10</p>
                <p class="text-sm text-gray-500">Total: 20</p>
            </div>
            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade</button>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center space-x-4 md:space-x-6">
                <img src="https://via.placeholder.com/40" alt="Image" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                <div>
                    <p class="text-lg font-semibold">Item 2</p>
                    <p class="text-sm text-gray-500">Multiplier: 3x</p>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-right md:text-left">
                <p class="font-semibold text-xl">Count: 5</p>
                <p class="text-sm text-gray-500">Total: 15</p>
            </div>
            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade</button>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center space-x-4 md:space-x-6">
                <img src="https://via.placeholder.com/40" alt="Image" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                <div>
                    <p class="text-lg font-semibold">Item 3</p>
                    <p class="text-sm text-gray-500">Multiplier: 3x</p>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-right md:text-left">
                <p class="font-semibold text-xl">Count: 5</p>
                <p class="text-sm text-gray-500">Total: 15</p>
            </div>
            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade</button>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center space-x-4 md:space-x-6">
                <img src="https://via.placeholder.com/40" alt="Image" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                <div>
                    <p class="text-lg font-semibold">Item 4</p>
                    <p class="text-sm text-gray-500">Multiplier: 3x</p>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-right md:text-left">
                <p class="font-semibold text-xl">Count: 5</p>
                <p class="text-sm text-gray-500">Total: 15</p>
            </div>
            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade</button>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center space-x-4 md:space-x-6">
                <img src="https://via.placeholder.com/40" alt="Image" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                <div>
                    <p class="text-lg font-semibold">Item 5</p>
                    <p class="text-sm text-gray-500">Multiplier: 3x</p>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-right md:text-left">
                <p class="font-semibold text-xl">Count: 5</p>
                <p class="text-sm text-gray-500">Total: 15</p>
            </div>
            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade</button>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center space-x-4 md:space-x-6">
                <img src="https://via.placeholder.com/40" alt="Image" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                <div>
                    <p class="text-lg font-semibold">Item 6</p>
                    <p class="text-sm text-gray-500">Multiplier: 3x</p>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-right md:text-left">
                <p class="font-semibold text-xl">Count: 5</p>
                <p class="text-sm text-gray-500">Total: 15</p>
            </div>
            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade</button>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center space-x-4 md:space-x-6">
                <img src="https://via.placeholder.com/40" alt="Image" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                <div>
                    <p class="text-lg font-semibold">Item 7</p>
                    <p class="text-sm text-gray-500">Multiplier: 3x</p>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-right md:text-left">
                <p class="font-semibold text-xl">Count: 5</p>
                <p class="text-sm text-gray-500">Total: 15</p>
            </div>
            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade</button>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center space-x-4 md:space-x-6">
                <img src="https://via.placeholder.com/40" alt="Image" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                <div>
                    <p class="text-lg font-semibold">Item 8</p>
                    <p class="text-sm text-gray-500">Multiplier: 3x</p>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-right md:text-left">
                <p class="font-semibold text-xl">Count: 5</p>
                <p class="text-sm text-gray-500">Total: 15</p>
            </div>
            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade</button>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center space-x-4 md:space-x-6">
                <img src="https://via.placeholder.com/40" alt="Image" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                <div>
                    <p class="text-lg font-semibold">Item 9</p>
                    <p class="text-sm text-gray-500">Multiplier: 3x</p>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-right md:text-left">
                <p class="font-semibold text-xl">Count: 5</p>
                <p class="text-sm text-gray-500">Total: 15</p>
            </div>
            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade</button>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center space-x-4 md:space-x-6">
                <img src="https://via.placeholder.com/40" alt="Image" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
                <div>
                    <p class="text-lg font-semibold">Item 10</p>
                    <p class="text-sm text-gray-500">Multiplier: 3x</p>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-right md:text-left">
                <p class="font-semibold text-xl">Count: 5</p>
                <p class="text-sm text-gray-500">Total: 15</p>
            </div>
            <button class="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade</button>
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
    