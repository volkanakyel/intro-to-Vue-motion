<script setup>
const items = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
    <div class="max-w-4xl mx-auto space-y-8">
      <div class="text-center space-y-4">
        <h1 class="text-4xl font-bold text-gray-800">Layout Animation</h1>
        <p class="text-gray-600">Smooth, glassy transitions with elegant spring physics</p>
      </div>
      <div class="flex justify-center">
        <Motion
          :while-hover="{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }"
          :while-press="{ scale: 0.95 }"
          :transition="{ type: 'spring', stiffness: 300, damping: 30 }"
          class="px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 cursor-pointer font-medium text-gray-700 hover:text-gray-900 transition-colors"
          tag="button"
          @click="items.reverse()"
        >
          Reverse Order
        </Motion>
      </div>
      <div class="grid grid-cols-5 gap-4">
        <Motion
          v-for="item in items"
          :key="item"
          layout
          :transition="{
            type: 'spring',
            stiffness: 60,
            damping: 20,
            mass: 1.2,
          }"
          class="p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 text-center text-lg font-semibold text-gray-700 hover:bg-white/80 transition-colors cursor-pointer"
        >
          {{ item }}
        </Motion>
      </div>
    </div>
  </div>
</template>
