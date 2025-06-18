<script setup>
const animationKey = ref(0)

const container = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const relaunchAnimation = () => {
  animationKey.value++
}
</script>

<template>
  <div class="flex flex-col items-center gap-8">
    <Motion
      tag="button"
      :initial="{ scale: 1 }"
      :while-hover="{ scale: 1.05 }"
      :while-press="{ scale: 0.95 }"
      :transition="{ type: 'spring', stiffness: 400, damping: 25 }"
      class="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
      @click="relaunchAnimation"
    >
      Relaunch
    </Motion>

    <Motion
      :key="animationKey"
      :variants="container"
      initial="hidden"
      animate="visible"
      class="space-y-4"
      tag="ul"
    >
      <Motion
        v-for="i in 3"
        :key="i"
        :variants="item"
        class="p-4 bg-white rounded-xl shadow-sm text-center"
        tag="li"
      >
        Item {{ i }}
      </Motion>
    </Motion>
  </div>
</template>
