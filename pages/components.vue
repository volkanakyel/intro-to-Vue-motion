<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/50"
    >
      <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <nav class="flex items-center space-x-6">
          <Motion
            :while-hover="{ scale: 1.05 }"
            :while-press="{ scale: 0.95 }"
            :transition="{ type: 'spring', stiffness: 400, damping: 25 }"
          >
            <NuxtLink
              to="/"
              class="hover:opacity-80 transition-opacity"
            >
              <HomeIcon class="w-5 h-5" />
            </NuxtLink>
          </Motion>
          <Motion
            :while-hover="{ scale: 1.05 }"
            :while-press="{ scale: 0.95 }"
            :transition="{ type: 'spring', stiffness: 400, damping: 25 }"
          >
            <NuxtLink
              to="/static"
              class="hover:opacity-80 transition-opacity"
              title="Static Version"
            >
              <FileTextIcon class="w-5 h-5" />
            </NuxtLink>
          </Motion>
          <Motion
            :while-hover="{ scale: 1.05 }"
            :while-press="{ scale: 0.95 }"
            :transition="{ type: 'spring', stiffness: 400, damping: 25 }"
          >
            <NuxtLink
              to="/components"
              class="hover:opacity-80 transition-opacity"
              title="Vue Motion Components"
            >
              <CodeIcon class="w-5 h-5" />
            </NuxtLink>
          </Motion>
        </nav>
        <Motion
          :initial="{ opacity: 0, y: -10 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ type: 'spring', stiffness: 100, damping: 20 }"
        >
          <h1 class="text-xl font-bold text-gray-800">Vue Motion Components</h1>
        </Motion>
      </div>
    </header>

    <main class="pt-24 pb-16">
      <div class="max-w-6xl mx-auto px-4">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ type: 'spring', stiffness: 100, damping: 20 }"
          class="mb-8"
        >
          <div class="flex space-x-2 border-b border-gray-200/50">
            <Motion
              v-for="(tab, index) in tabs"
              :key="index"
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
              }"
              :while-hover="{ scale: 1.05, y: -2 }"
              :while-press="{ scale: 0.95 }"
              class="relative"
            >
              <button
                class="px-6 py-3 rounded-t-xl font-medium transition-all duration-300"
                :class="[
                  activeTab === index
                    ? 'bg-white/80 backdrop-blur-sm text-gray-800 shadow-lg border border-white/30'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-white/40 backdrop-blur-sm',
                ]"
                @click="activeTab = index"
              >
                {{ tab.name }}
              </button>
              <Motion
                v-if="activeTab === index"
                layout-id="activeTab"
                :transition="{ type: 'spring', stiffness: 300, damping: 30 }"
                class="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800 rounded-full"
              />
            </Motion>
          </div>
        </Motion>

        <Motion
          :key="activeTab"
          :initial="{ opacity: 0, y: 30, scale: 0.95 }"
          :animate="{ opacity: 1, y: 0, scale: 1 }"
          :exit="{ opacity: 0, y: -30, scale: 0.95 }"
          :transition="{ type: 'spring', stiffness: 100, damping: 20 }"
        >
          <div class="backdrop-blur-md rounded-3xl border border-white/30 p-8 min-h-screen">
            <Motion
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }"
              :transition="{ duration: 0.3, delay: 0.2 }"
            >
              <component :is="tabs[activeTab].component" />
            </Motion>
          </div>
        </Motion>
      </div>
    </main>
  </div>
</template>

<script setup>
import { CodeIcon, FileTextIcon, HomeIcon } from 'lucide-vue-next'
import IntroBasicAnimation from '~/components/01_Intro_BasicAnimation.vue'
import HoverAndPress from '~/components/02_HoverAndPress.vue'
import StaggeredListVariants from '~/components/03_StaggeredListVariants.vue'
import ScrollIntoView from '~/components/04_ScrollIntoView.vue'
import AnimatePresenceExit from '~/components/05_AnimatePresenceExit.vue'
import LayoutAnimation from '~/components/06_LayoutAnimation.vue'

const activeTab = ref(0)

const tabs = [
  {
    name: '01. Basic Animation',
    component: IntroBasicAnimation,
  },
  {
    name: '02. Hover & Press',
    component: HoverAndPress,
  },
  {
    name: '03. Staggered List',
    component: StaggeredListVariants,
  },
  {
    name: '04. Scroll Into View',
    component: ScrollIntoView,
  },
  {
    name: '05. Animate Presence',
    component: AnimatePresenceExit,
  },
  {
    name: '06. Layout Animation',
    component: LayoutAnimation,
  },
]
</script>
