<template>
	<div class="min-h-screen bg-white">
		<!-- Header remains unchanged -->
		<header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
			<div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
				<nav class="flex items-center space-x-6">
					<NuxtLink to="/" class="hover:opacity-80 transition-opacity">
						<HomeIcon class="w-5 h-5" />
					</NuxtLink>
					<a href="https://twitter.com" target="_blank" class="hover:opacity-80 transition-opacity">
						<TwitterIcon class="w-5 h-5" />
					</a>
					<a href="https://instagram.com" target="_blank" class="hover:opacity-80 transition-opacity">
						<InstagramIcon class="w-5 h-5" />
					</a>
					<a href="https://dribbble.com" target="_blank" class="hover:opacity-80 transition-opacity">
						<DribbbleIcon class="w-5 h-5" />
					</a>
				</nav>
				<button class="px-4 py-2 bg-black text-white rounded-full hover:bg-black/90 transition-colors">
					Book a Tour
				</button>
			</div>
		</header>

		<main class="pt-24 pb-16">
			<!-- Hero Section -->
			<Motion
:initial="{ opacity: 0, y: 20 }" :in-view="{ opacity: 1, y: 0 }"
				:transition="{ type: 'spring', stiffness: 50, damping: 15 }" :in-view-options="{ once: true }">
				<section class="max-w-6xl mx-auto px-4 mb-24">
					<div class="flex items-start justify-between mb-12">
						<h1 class="text-4xl font-bold">
							London<br>Design
						</h1>
						<a href="#" class="flex items-center space-x-2 text-sm hover:opacity-80 transition-opacity">
							<span>Live Website</span>
							<ArrowUpRightIcon class="w-4 h-4" />
						</a>
					</div>
					<Motion
:in-view="{ scale: 1, opacity: 1 }"
						:transition="{ type: 'spring', stiffness: 45, damping: 15, delay: 0.2 }" :in-view-options="{ once: true }">
						<div class="rounded-3xl bg-gray-200">
							<img
								src="https://images.unsplash.com/photo-1733234976396-87cf34ae6038?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Aero Platform Interface" class="w-full rounded-xl shadow-lg">
						</div>
					</Motion>
				</section>
			</Motion>

			<!-- Project Overview -->
			<Motion
				:initial="{ opacity: 0, x: -20 }" :in-view="{ opacity: 1, x: 0 }"
				:transition="{ type: 'spring', stiffness: 45, damping: 15 }" :in-view-options="{ once: true }">
				<section class="max-w-6xl mx-auto px-4 mb-24">
					<h2 class="text-2xl font-bold mb-4">Project Overview</h2>
					<p class="text-gray-600 max-w-2xl">
						A visual journey capturing London's iconic landmarks, hidden gems, and vibrant culture, showcasing the
						city's unique charm and diversity through stunning photography.
					</p>
				</section>
			</Motion>

			<!-- Project Image -->
			<Motion
:initial="{ opacity: 0, scale: 0.98 }" :in-view="{ opacity: 1, scale: 1 }"
				:transition="{ type: 'spring', stiffness: 45, damping: 15 }" :in-view-options="{ once: true }">
				<section class="max-w-6xl mx-auto px-4 mb-24">
					<img
						src="https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Aero Platform Screenshot" class="w-full rounded-3xl shadow-lg">
				</section>
			</Motion>

			<!-- City Section -->
			<Motion
:initial="{ opacity: 0, y: 20 }" :in-view="{ opacity: 1, y: 0 }"
				:transition="{ type: 'spring', stiffness: 45, damping: 15 }" :in-view-options="{ once: true }">
				<section class="max-w-6xl mx-auto px-4 mb-24">
					<h2 class="text-2xl font-bold mb-4">City</h2>
					<p class="text-gray-600 max-w-2xl mb-8">
						A photographic exploration of London, celebrating its iconic skyline, historic streets, and vibrant city
						life.
					</p>
					<div class="grid grid-cols-2 gap-8">
						<Motion
:initial="{ opacity: 0, x: -20 }" :in-view="{ opacity: 1, x: 0 }"
							:transition="{ type: 'spring', stiffness: 45, damping: 15, delay: 0.1 }"
							:in-view-options="{ once: true }">
							<div class="bg-gray-100 rounded-3xl p-8">
								<img
									src="https://images.unsplash.com/photo-1512722328319-51c3d027c228?q=80&w=4016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Aero App Icon" class="w-full">
							</div>
						</Motion>
						<Motion
:initial="{ opacity: 0, x: 20 }" :in-view="{ opacity: 1, x: 0 }"
							:transition="{ type: 'spring', stiffness: 45, damping: 15, delay: 0.2 }"
							:in-view-options="{ once: true }">
							<div class="bg-gray-100 rounded-3xl p-8">
								<img
									src="https://images.unsplash.com/photo-1523950300486-6be20a1b1f60?q=80&w=3782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Aero Mobile Interface" class="w-full">
							</div>
						</Motion>
					</div>
				</section>
			</Motion>

			<!-- Project Showcase -->
			<Motion
:initial="{ opacity: 0 }" :in-view="{ opacity: 1 }"
				:transition="{ type: 'spring', stiffness: 45, damping: 15 }" :in-view-options="{ once: true, amount: 0.1 }">
				<section class="max-w-6xl mx-auto px-4 mb-24">
					<h2 class="text-2xl font-bold mb-8">Project Showcase</h2>
					<div class="grid grid-cols-2 gap-8">
						<div class="space-y-8">
							<div class="bg-gray-100 rounded-3xl overflow-hidden h-[400px]">
								<img
									src="https://images.unsplash.com/photo-1519860353489-3d4cae150d8b?q=80&w=4146&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Project Image 1" class="w-full h-full object-cover">
							</div>
							<div class="bg-gray-100 rounded-3xl overflow-hidden h-[400px]">
								<img
									src="https://images.unsplash.com/photo-1460738256030-715e37579fac?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Project Image 2" class="w-full h-full object-cover">
							</div>
						</div>
						<div class="bg-gray-100 rounded-3xl overflow-hidden h-[832px]">
							<img
								src="https://plus.unsplash.com/premium_photo-1680806491715-54e3f9a1ed63?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Project Image 3" class="w-full h-full object-cover">
						</div>
					</div>
					<div class="mt-8">
						<div class="bg-gray-100 rounded-3xl overflow-hidden h-[600px]">
							<img
								src="https://images.unsplash.com/photo-1650923008965-79772039ce6b?q=80&w=4032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Project Image 4" class="w-full h-full object-cover">
						</div>
					</div>
				</section>
			</Motion>

			<!-- Contact Form -->
			<Motion
:initial="{ opacity: 0, y: 20 }" :in-view="{ opacity: 1, y: 0 }"
				:transition="{ type: 'spring', stiffness: 45, damping: 15 }" :in-view-options="{ once: true }">
				<section class="max-w-6xl mx-auto px-4 mb-24">
					<h2 class="text-2xl font-bold mb-4">Get in touch</h2>
					<p class="text-gray-600 max-w-6xl mb-8">
						A platform designed to simplify and enhance communication, connecting people seamlessly through intuitive
						features and streamlined interactions.
					</p>
					<form class="max-w-6xl space-y-4" @submit.prevent="handleSubmit">
						<input
v-model="form.name" type="text" placeholder="Full Name"
							class="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
						<input
v-model="form.email" type="email" placeholder="Email Address"
							class="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
						<textarea
v-model="form.message" placeholder="Write your Message" rows="6"
							class="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" />
						<button
type="submit"
							class="w-full px-4 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors">
							Send Message
						</button>
					</form>
				</section>
			</Motion>
		</main>

		<!-- Footer -->
		<footer class="max-w-6xl mx-auto px-4 py-8 text-center">
			<p class="text-sm text-gray-600 mb-4">
				Copyright © 2025 Uikielle<br>
				All rights reserved.
			</p>
			<div class="flex items-center justify-center space-x-6">
				<a href="https://twitter.com" target="_blank" class="hover:opacity-80 transition-opacity">
					<TwitterIcon class="w-5 h-5" />
				</a>
				<a href="https://instagram.com" target="_blank" class="hover:opacity-80 transition-opacity">
					<InstagramIcon class="w-5 h-5" />
				</a>
				<a href="https://dribbble.com" target="_blank" class="hover:opacity-80 transition-opacity">
					<DribbbleIcon class="w-5 h-5" />
				</a>
				<a href="mailto:contact@example.com" class="hover:opacity-80 transition-opacity">
					<MailIcon class="w-5 h-5" />
				</a>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import {
	HomeIcon,
	TwitterIcon,
	InstagramIcon,
	DribbbleIcon,
	ArrowUpRightIcon,
	MailIcon
} from 'lucide-vue-next'

const form = ref({
	name: '',
	email: '',
	message: ''
})

const handleSubmit = () => {
	// Handle form submission
	console.log('Form submitted:', form.value)
}
</script>

<style>
/* Custom styles can be added here if needed */
</style>
