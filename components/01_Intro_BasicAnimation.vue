<script setup></script>

<template>
  <Motion
    :initial="{ opacity: 0, x: -50 }"
    :animate="{ opacity: 1, x: 0 }"
    :transition="{ type: 'spring', stiffness: 100, damping: 10 }"
    class="text-2xl font-bold text-center p-8 bg-white rounded-xl shadow-sm"
  >
    Hello Vue Motion!
  </Motion>
</template>
