<script setup>
const clickCount = ref(0)

const handleClick = () => {
  clickCount.value++
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[600px] bg-gray-50 gap-8">
    <Motion
      tag="button"
      :initial="{ scale: 1 }"
      :while-hover="{ scale: 1.05 }"
      :while-press="{ scale: 0.95 }"
      :transition="{ type: 'spring', stiffness: 400, damping: 25 }"
      class="px-8 py-4 text-lg font-semibold text-gray-800 rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
      @click="handleClick"
    >
      Hover & Press Me
    </Motion>

    <Motion
      v-if="clickCount > 0"
      :key="clickCount"
      :initial="{ opacity: 0, y: 20, scale: 0.8 }"
      :animate="{ opacity: 1, y: 0, scale: 1 }"
      :transition="{ type: 'spring', stiffness: 300, damping: 20 }"
      class="text-2xl font-bold text-blue-600"
    >
      Clicks: {{ clickCount }}
    </Motion>
  </div>
</template>
