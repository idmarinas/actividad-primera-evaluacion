<script setup>
import Portada from '@/components/icons/portada.vue'
import { ref, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const route = ref(router.currentRoute)
const routes = ref(null)

watch(route, item => {
	const breadcrums = []
	
	breadcrums.push(item)
	
	let parent = item
	while (parent !== null) {
		parent = getParent(parent)

		if (parent !== null) {
			breadcrums.push(parent)
		}
	}

	routes.value = breadcrums.reverse()
})

function getParent(link) {
	let breadcrum = link?.meta.breadcrum

	if (breadcrum === undefined || breadcrum?.parent === undefined || breadcrum.parent === null) {
		return null
	}

	if (!router.hasRoute(breadcrum.parent)) {
		return null
	}

	return router.getRoutes().find(item => item.name === breadcrum.parent)
}
</script>

<template>
	<div class="pb-2 mb-2 border-b-2 border-gold-sand-200">
		<ul class="flex flex-wrap items-center gap-1 h-6">
			<template v-for="(item, index) in routes" :key="item.name">
				<li>
					<template v-if="index !== routes.length - 1">
						<RouterLink v-if="item.name === 'home'" :to="item.path">
							<Portada width="21" />
							<span class="sr-only">{{ item.meta.breadcrum.label }}</span>
						</RouterLink>
						<RouterLink v-else :to="{ name: item.name, params: item.params, query: item.query }" class="text-xs">
							{{ item.meta.breadcrum.label }}
						</RouterLink>
					</template>
					<template v-else>
						<span>
							<Portada v-show="item.name === 'home'" width="21" />
							<span :class="{ 'sr-only': item.name === 'home' }" class="text-xs">{{ item.meta.breadcrum.label }}</span>
						</span>
					</template>
				</li>
				
				<li class="flex-initial" v-show="index !== routes.length - 1">/</li>
			</template>
		</ul>
	</div>
</template>


<style lang="css" scoped>
a {
	@apply text-gold-sand-700;

	&:hover {
		@apply text-gold-sand-900;
	}
}
</style>
