<script setup></script>

<template>
  <div class="h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Hero Section -->
    <div class="min-h-screen flex items-center justify-center">
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :in-view="{ opacity: 1, y: 0 }"
        :transition="{ type: 'spring', stiffness: 100, damping: 20 }"
        :in-view-options="{ once: true }"
        class="text-center"
      >
        <h1 class="text-6xl font-bold text-gray-800 mb-6">Lorem Ipsum</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </p>
      </Motion>
    </div>

    <!-- Content Sections -->
    <div class="space-y-32 px-8 py-20">
      <!-- Section 1 -->
      <Motion
        :initial="{ opacity: 0, y: 60 }"
        :in-view="{ opacity: 1, y: 0 }"
        :transition="{ type: 'spring', stiffness: 80, damping: 15 }"
        :in-view-options="{ once: true }"
        class="max-w-4xl mx-auto"
      >
        <div class="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-xl">1</span>
            </div>
            <h2 class="text-3xl font-bold text-gray-800">Lorem Ipsum Dolor</h2>
          </div>
          <p class="text-lg text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </Motion>

      <!-- Section 2 -->
      <Motion
        :initial="{ opacity: 0, y: 60 }"
        :in-view="{ opacity: 1, y: 0 }"
        :transition="{ type: 'spring', stiffness: 80, damping: 15, delay: 0.1 }"
        :in-view-options="{ once: true }"
        class="max-w-4xl mx-auto"
      >
        <div class="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-xl">2</span>
            </div>
            <h2 class="text-3xl font-bold text-gray-800">Sit Amet Consectetur</h2>
          </div>
          <p class="text-lg text-gray-600 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Motion>

      <Motion
        :initial="{ opacity: 0, y: 60 }"
        :in-view="{ opacity: 1, y: 0 }"
        :transition="{ type: 'spring', stiffness: 80, damping: 15, delay: 0.2 }"
        :in-view-options="{ once: true }"
        class="max-w-4xl mx-auto"
      >
        <div class="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-xl">3</span>
            </div>
            <h2 class="text-3xl font-bold text-gray-800">Adipiscing Elit Sed</h2>
          </div>
          <p class="text-lg text-gray-600 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </Motion>

      <Motion
        :initial="{ opacity: 0, y: 60 }"
        :in-view="{ opacity: 1, y: 0 }"
        :transition="{ type: 'spring', stiffness: 80, damping: 15, delay: 0.3 }"
        :in-view-options="{ once: true }"
        class="max-w-4xl mx-auto"
      >
        <div class="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-xl">4</span>
            </div>
            <h2 class="text-3xl font-bold text-gray-800">Eiusmod Tempor</h2>
          </div>
          <p class="text-lg text-gray-600 leading-relaxed">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet.
          </p>
        </div>
      </Motion>

      <Motion
        :initial="{ opacity: 0, y: 60 }"
        :in-view="{ opacity: 1, y: 0 }"
        :transition="{ type: 'spring', stiffness: 80, damping: 15, delay: 0.4 }"
        :in-view-options="{ once: true }"
        class="max-w-4xl mx-auto text-center"
      >
        <div
          class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl p-16 text-white"
        >
          <h2 class="text-4xl font-bold mb-6">Lorem Ipsum Experience</h2>
          <p class="text-xl opacity-90 leading-relaxed">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </Motion>
    </div>
  </div>
</template>
