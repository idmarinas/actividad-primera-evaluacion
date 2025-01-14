<script setup>
import { RouterLink } from 'vue-router'
import Logo from '@/components/icons/logo.vue'
import Pieza from '@/components/icons/pieza.vue'
import Pedidos from '@/components/icons/pedidos.vue'
import Portada from '@/components/icons/portada.vue'
</script>

<template>
	<header class="p-4 px-7 bg-gold-sand-700 text-gold-sand-50 border-b-gold-sand-700 border-b shadow-md">
		<div class="container mx-auto flex flex-row gap-5">
			<Logo width="36" class="flex-initial" />
			<nav class="flex-1">
				<ul class="flex flex-row gap-7">
					<li>
						<RouterLink class="flex gap-2 items-center px-2 border-t-4 border-b" :to="{ name: 'home' }">
							<Portada width="32" /> <span class="hidden md:block">Portada</span>
						</RouterLink>
					</li>
					<li class="flex-1"></li>
					<li>
						<RouterLink class="flex gap-2 items-center px-2 border-t-4 border-b" :to="{ name: 'pieces_list' }">
							<Pieza width="32" /> <span class="hidden md:block">Piezas</span>
						</RouterLink>
					</li>
					<li>
						<RouterLink class="flex gap-2 items-center px-2 border-t-4 border-b" :to="{ name: 'order_list' }">
							<Pedidos width="32" /> <span class="hidden md:block">Pedidos</span>
						</RouterLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<style lang="css" scoped>
	a {
		@apply text-gold-sand-50 border-transparent;

		&.router-link-active {
			@apply border-gold-sand-600;
		}

		&.router-link-exact-active {
			@apply border-gold-sand-800;
		}

		&:hover:not(.router-link-active) {
			@apply text-gold-sand-200 border-gold-sand-200;
		}
	}
</style>
