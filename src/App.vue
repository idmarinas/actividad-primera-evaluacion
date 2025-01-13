<script setup>
import { RouterView } from 'vue-router'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Breadcrumbs from './components/Breadcrumbs.vue'
import Title from '@/components/Title.vue'
</script>

<template>
	<Header />

	<main class="flex-grow container mx-auto p-4 border-gold-sand-700 border-x shadow-2xl shadow-gold-sand-700">
		<Breadcrumbs />
		<div class="prose prose-gold-sand max-w-none md:prose-lg lg:prose-xl dark:prose-invert mx-auto px-5">
			<Title />
			<RouterView />
		</div>
	</main>

	<Footer />
</template>
