<script setup>
const show = ref(true)
</script>

<template>
  <div class="space-y-4 font-bold">
    <Motion
      :while-hover="{ scale: 1.05 }"
      :while-press="{ scale: 0.95 }"
      class="px-4 py-2 bg-white rounded-lg shadow-sm"
      tag="button"
      @click="show = !show"
    >
      Toggle
    </Motion>

    <AnimatePresence>
      <Motion
        v-if="show"
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :exit="{ opacity: 0, scale: 0.8 }"
        :transition="{ type: 'spring', stiffness: 100, damping: 10 }"
        class="p-8 bg-white rounded-xl shadow-sm text-center"
      >
        I appear and disappear smoothly.
      </Motion>
    </AnimatePresence>
  </div>
</template>
