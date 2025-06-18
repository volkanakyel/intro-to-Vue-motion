<template>
  <div class="min-h-screen bg-white">
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <nav class="flex items-center space-x-6">
          <NuxtLink
            to="/"
            class="hover:opacity-80 transition-opacity"
          >
            <HomeIcon class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink
            to="/static"
            class="hover:opacity-80 transition-opacity"
            title="Static Version"
          >
            <FileTextIcon class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink
            to="/components"
            class="hover:opacity-80 transition-opacity"
            title="Vue Motion Components"
          >
            <CodeIcon class="w-5 h-5" />
          </NuxtLink>
        </nav>
        <button
          class="px-4 py-2 bg-black text-white rounded-full hover:bg-black/90 transition-colors"
          @click="isContactModalOpen = true"
        >
          Book a Tour
        </button>
      </div>
    </header>

    <main class="pt-24 pb-16">
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :in-view="{ opacity: 1, y: 0 }"
        :transition="{ type: 'spring', stiffness: 100, damping: 10 }"
        :in-view-options="{ once: true }"
      >
        <section class="max-w-6xl mx-auto px-4 mb-24">
          <div class="flex items-start justify-between mb-12">
            <h1 class="text-4xl font-bold">London Design</h1>
            <a
              href="#"
              class="flex items-center space-x-2 text-sm hover:opacity-80 transition-opacity"
            >
              <span>Live Website</span>
              <ArrowUpRightIcon class="w-4 h-4" />
            </a>
          </div>
          <Motion
            :initial="{ scale: 0.95, opacity: 0 }"
            :in-view="{ scale: 1, opacity: 1 }"
            :transition="{ type: 'spring', stiffness: 100, damping: 10, delay: 0.1 }"
            :in-view-options="{ once: true }"
          >
            <div class="rounded-3xl bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1733234976396-87cf34ae6038?q=80&w=4140&auto=format&fit=crop"
                alt="London Design"
                class="w-full rounded-xl shadow-lg"
              />
            </div>
          </Motion>
        </section>
      </Motion>

      <Motion
        :initial="{ opacity: 0, x: -20 }"
        :in-view="{ opacity: 1, x: 0 }"
        :transition="{ type: 'spring', stiffness: 100, damping: 10 }"
        :in-view-options="{ once: true }"
      >
        <section class="max-w-6xl mx-auto px-4 mb-24">
          <h2 class="text-2xl font-bold mb-4">Project Overview</h2>
          <p class="text-gray-600 max-w-2xl">
            A visual journey capturing London's iconic landmarks, hidden gems, and vibrant culture,
            showcasing the city's unique charm and diversity through stunning photography.
          </p>
        </section>
      </Motion>

      <Motion
        :initial="{ opacity: 0, scale: 0.98 }"
        :in-view="{ opacity: 1, scale: 1 }"
        :transition="{ type: 'spring', stiffness: 45, damping: 15 }"
        :in-view-options="{ once: true }"
      >
        <section class="max-w-6xl mx-auto px-4 mb-24">
          <img
            src="https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Aero Platform Screenshot"
            class="w-full rounded-3xl shadow-lg"
          />
        </section>
      </Motion>

      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :in-view="{ opacity: 1, y: 0 }"
        :transition="{ type: 'spring', stiffness: 45, damping: 15 }"
        :in-view-options="{ once: true }"
      >
        <section class="max-w-6xl mx-auto px-4 mb-24">
          <h2 class="text-2xl font-bold mb-4">City</h2>
          <p class="text-gray-600 max-w-2xl mb-8">
            A photographic exploration of London, celebrating its iconic skyline, historic streets,
            and vibrant city life.
          </p>
          <div class="grid grid-cols-2 gap-8">
            <Motion
              :initial="{ opacity: 0, x: -20 }"
              :in-view="{ opacity: 1, x: 0 }"
              :transition="{ type: 'spring', stiffness: 45, damping: 15, delay: 0.1 }"
              :in-view-options="{ once: true }"
            >
              <div class="bg-gray-100 rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1512722328319-51c3d027c228?q=80&w=4016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Aero App Icon"
                  class="w-full"
                />
              </div>
            </Motion>
            <Motion
              :initial="{ opacity: 0, x: 20 }"
              :in-view="{ opacity: 1, x: 0 }"
              :transition="{ type: 'spring', stiffness: 45, damping: 15, delay: 0.2 }"
              :in-view-options="{ once: true }"
            >
              <div class="bg-gray-100 rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1523950300486-6be20a1b1f60?q=80&w=3782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Aero Mobile Interface"
                  class="w-full"
                />
              </div>
            </Motion>
          </div>
        </section>
      </Motion>

      <section class="max-w-6xl mx-auto px-4 mb-24">
        <div class="grid grid-cols-2 gap-12">
          <Motion
            :initial="{ opacity: 0, x: -20 }"
            :in-view="{ opacity: 1, x: 0 }"
            :transition="{ type: 'spring', stiffness: 100, damping: 10 }"
            :in-view-options="{ once: true }"
            class="sticky top-32 h-fit"
          >
            <h2 class="text-4xl font-bold mb-4">London's Hidden Gems</h2>
            <p class="text-gray-600">Discover the secrets that make London truly special.</p>
          </Motion>

          <div class="space-y-24">
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :in-view="{ opacity: 1, y: 0 }"
              :transition="{ type: 'spring', stiffness: 100, damping: 10 }"
              :in-view-options="{ once: true }"
              class="space-y-6"
            >
              <div class="flex items-center space-x-2">
                <span class="text-2xl font-bold">Historic Pubs & Culture</span>
                <span class="text-gray-400">~ 500+ Years</span>
              </div>
              <p class="text-gray-600">
                Experience London's legendary pub culture, from centuries-old establishments to
                modern gastropubs. Each venue tells a story of the city's rich social history and
                vibrant community life.
              </p>
              <div class="bg-gray-100 rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1512722328319-51c3d027c228?q=80&w=4016&auto=format&fit=crop"
                  alt="Historic London pub"
                  class="w-full rounded-xl"
                />
              </div>
            </Motion>

            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :in-view="{ opacity: 1, y: 0 }"
              :transition="{ type: 'spring', stiffness: 100, damping: 10 }"
              :in-view-options="{ once: true }"
              class="space-y-6"
            >
              <div class="flex items-center space-x-2">
                <span class="text-2xl font-bold">Royal Parks & Gardens</span>
                <span class="text-gray-400">~ 8 Parks</span>
              </div>
              <p class="text-gray-600">
                Explore London's magnificent royal parks, from Hyde Park's vast open spaces to
                Kensington Gardens' elegant landscapes. These green oases offer perfect escapes from
                the urban bustle.
              </p>
              <div class="bg-gray-100 rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1523950300486-6be20a1b1f60?q=80&w=3782&auto=format&fit=crop"
                  alt="Royal park landscape"
                  class="w-full rounded-xl"
                />
              </div>
            </Motion>
          </div>
        </div>
      </section>

      <section class="max-w-6xl mx-auto px-4 mb-24">
        <div class="grid grid-cols-2 gap-12">
          <Motion
            :initial="{ opacity: 0, x: -20 }"
            :in-view="{ opacity: 1, x: 0 }"
            :transition="{ type: 'spring', stiffness: 45, damping: 15 }"
            :in-view-options="{ once: true }"
            class="sticky top-32 h-fit"
          >
            <h2 class="text-4xl font-bold mb-4">Vibrant city that will make you feel alive</h2>
            <p class="text-gray-600">
              Experience the pulse of London through its dynamic streets and iconic landmarks.
            </p>
          </Motion>

          <div class="space-y-24">
            <Motion
              :initial="{ opacity: 0, scale: 0.95 }"
              :in-view="{ opacity: 1, scale: 1 }"
              :transition="{ type: 'spring', stiffness: 45, damping: 15 }"
              :in-view-options="{ once: true }"
              class="space-y-6"
            >
              <div class="flex items-center space-x-2">
                <span class="text-2xl font-bold">Iconic Landmarks</span>
                <span class="text-gray-400">~ Big Ben</span>
              </div>
              <p class="text-gray-600">
                Discover the architectural marvels that define London's skyline. From the historic
                Tower Bridge to the modern Shard, each landmark tells a story of the city's rich
                heritage and forward-thinking spirit.
              </p>
              <Motion
                :initial="{ opacity: 0, y: 20 }"
                :in-view="{ opacity: 1, y: 0 }"
                :transition="{ type: 'spring', stiffness: 45, damping: 15, delay: 0.2 }"
                :in-view-options="{ once: true }"
                class="bg-gray-100 rounded-3xl p-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1512722328319-51c3d027c228?q=80&w=4016&auto=format&fit=crop"
                  alt="London landmarks"
                  class="w-full rounded-xl"
                />
              </Motion>
            </Motion>

            <Motion
              :initial="{ opacity: 0, scale: 0.95 }"
              :in-view="{ opacity: 1, scale: 1 }"
              :transition="{ type: 'spring', stiffness: 45, damping: 15 }"
              :in-view-options="{ once: true }"
              class="space-y-6"
            >
              <div class="flex items-center space-x-2">
                <span class="text-2xl font-bold">Cultural Melting Pot</span>
                <span class="text-gray-400">~ 300+ Languages</span>
              </div>
              <p class="text-gray-600">
                Immerse yourself in London's vibrant cultural scene. From world-class museums to
                street art, from traditional pubs to innovative restaurants, experience the perfect
                blend of old and new.
              </p>
              <Motion
                :initial="{ opacity: 0, y: 20 }"
                :in-view="{ opacity: 1, y: 0 }"
                :transition="{ type: 'spring', stiffness: 45, damping: 15, delay: 0.2 }"
                :in-view-options="{ once: true }"
                class="bg-gray-100 rounded-3xl p-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1523950300486-6be20a1b1f60?q=80&w=3782&auto=format&fit=crop"
                  alt="Cultural diversity"
                  class="w-full rounded-xl"
                />
              </Motion>
            </Motion>

            <Motion
              :initial="{ opacity: 0, scale: 0.95 }"
              :in-view="{ opacity: 1, scale: 1 }"
              :transition="{ type: 'spring', stiffness: 45, damping: 15 }"
              :in-view-options="{ once: true }"
              class="space-y-6"
            >
              <div class="flex items-center space-x-2">
                <span class="text-2xl font-bold">Urban Energy</span>
                <span class="text-gray-400">~ 24/7</span>
              </div>
              <p class="text-gray-600">
                Feel the electric atmosphere of London's streets. Whether it's the morning rush, the
                afternoon buzz, or the nightlife energy, the city never sleeps and always inspires.
              </p>
              <Motion
                :initial="{ opacity: 0, y: 20 }"
                :in-view="{ opacity: 1, y: 0 }"
                :transition="{ type: 'spring', stiffness: 45, damping: 15, delay: 0.2 }"
                :in-view-options="{ once: true }"
                class="bg-gray-100 rounded-3xl p-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1460738256030-715e37579fac?q=80&w=2048&auto=format&fit=crop"
                  alt="Urban energy"
                  class="w-full rounded-xl"
                />
              </Motion>
            </Motion>
          </div>
        </div>
      </section>
    </main>

    <footer class="max-w-6xl mx-auto px-4 py-8 text-center">
      <p class="text-sm text-gray-600 mb-4">Copyright © 2025 Uikielle<br />Volkan AKYEL</p>
    </footer>

    <ContactModal
      :is-open="isContactModalOpen"
      @close="isContactModalOpen = false"
    />
  </div>
</template>

<script setup>
import { ArrowUpRightIcon, CodeIcon, FileTextIcon, HomeIcon } from 'lucide-vue-next'
import ContactModal from '~/components/ContactModal.vue'

const isContactModalOpen = ref(false)

const scrollProgress = ref(0)
let scrollTimeline = null

const updateScrollProgress = () => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = window.scrollY / scrollHeight
}

onMounted(() => {
  scrollTimeline = new ScrollTimeline({
    source: document.documentElement,
    axis: 'block',
  })

  const animation = new Animation(
    new KeyframeEffect(document.documentElement, [{ '--scroll': 0 }, { '--scroll': 1 }], {
      duration: 1,
      fill: 'forwards',
      easing: 'linear',
    }),
    scrollTimeline,
  )

  animation.play()

  window.addEventListener('scroll', updateScrollProgress)
  updateScrollProgress()
})

onUnmounted(() => {
  if (scrollTimeline) {
    scrollTimeline = null
  }
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>
