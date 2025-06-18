<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50"
  >
    <Motion
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      :transition="{ duration: 0.2 }"
      class="fixed inset-0 bg-black/25 backdrop-blur-sm"
      @click="closeModal"
    />

    <div class="fixed inset-0 overflow-y-auto">
      <div class="flex min-h-full items-center justify-center p-4">
        <Motion
          :initial="{ opacity: 0, scale: 0.95, y: 20 }"
          :animate="{ opacity: 1, scale: 1, y: 0 }"
          :exit="{ opacity: 0, scale: 0.95, y: 20 }"
          :transition="{ type: 'spring', stiffness: 100, damping: 10 }"
          class="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl"
        >
          <h3 class="text-2xl font-bold mb-4">Get in touch</h3>

          <form
            class="space-y-4"
            @submit.prevent="handleSubmit"
          >
            <input
              v-model="form.name"
              type="text"
              placeholder="Full Name"
              class="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
            <input
              v-model="form.email"
              type="email"
              placeholder="Email Address"
              class="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
            <textarea
              v-model="form.message"
              placeholder="Write your Message"
              rows="6"
              class="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
            <div class="flex justify-end space-x-4">
              <button
                type="button"
                class="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                @click="closeModal"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </Motion>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])

const form = ref({
  name: '',
  email: '',
  message: '',
})

const closeModal = () => {
  emit('close')
}

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  form.value = {
    name: '',
    email: '',
    message: '',
  }
  closeModal()
}
</script>
