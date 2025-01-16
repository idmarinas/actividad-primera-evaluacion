<script setup>
import Task from '@/components/cards/task.vue'
import Pedidos from '@/components/icons/pedidos.vue'
import Pieza from '@/components/icons/pieza.vue'

import { useOrdersStore } from '@/stores/orders'
import { usePageTitleStore } from '@/stores/page-title'
import { usePiecesStore } from '@/stores/pieces'
import { computed } from 'vue'


const pageStore = usePageTitleStore()
const ordersStore = useOrdersStore()
const piecesStore = usePiecesStore()

const ordersList = computed(() => ordersStore.all())
const piecesList = computed(() => piecesStore.all())

const ordersStatus = computed(() => {
	let total = ordersList.value.length
	let completed = ordersList.value.filter(item => item.served === true).length
	let waiting = ordersList.value.filter(item => item.served === false)
	let undelivered = waiting.filter(item => ordersStore.process(item) === 1).length
	waiting = waiting.length - undelivered

	return {
		total,
		completed,
		waiting,
		undelivered
	}
})

const piecesStatus = computed(() => {
	let total = piecesList.value.length
	let completed = piecesList.value.filter(item => item.cut === true).length
	let waiting = total - completed

	return {
		total,
		completed,
		waiting
	}
})

pageStore.title = 'Portada'
</script>

<template>
	<article>
		<h2>Pedidos</h2>

		<div class="flex justify-center gap-3">
			<Task color="blue">
				<template #icon><Pedidos width="24" /></template>
				<template #percent>100%</template>
				<template #count>{{ ordersStatus.total.toLocaleString() }}</template>
				<template #name>Totales</template>
			</Task>
			
			<Task color="green">
				<template #icon><Pedidos width="24" /></template>
				<template #percent>{{ (ordersStatus.completed / ordersStatus.total).toLocaleString(Intl.Locale, { style: 'percent' }) }}</template>
				<template #count>{{ ordersStatus.completed.toLocaleString() }}</template>
				<template #name>Completados</template>
			</Task>

			<Task color="orange">
				<template #icon><Pedidos width="24" /></template>
				<template #percent>{{ (ordersStatus.waiting / ordersStatus.total).toLocaleString(Intl.Locale, { style: 'percent' }) }}</template>
				<template #count>{{ ordersStatus.waiting.toLocaleString() }}</template>
				<template #name>Pendientes</template>
			</Task>

			<Task color="red">
				<template #icon><Pedidos width="24" /></template>
				<template #percent>{{ (ordersStatus.undelivered / ordersStatus.total).toLocaleString(Intl.Locale, { style: 'percent' }) }}</template>
				<template #count>{{ ordersStatus.undelivered.toLocaleString() }}</template>
				<template #name>Sin entregar</template>
			</Task>
		</div>

		<h2>Piezas</h2>

		<div class="flex justify-center gap-3">
			<Task color="blue">
				<template #icon><Pieza width="24" /></template>
				<template #percent>100%</template>
				<template #count>{{ piecesStatus.total.toLocaleString() }}</template>
				<template #name>Totales</template>
			</Task>
			
			<Task color="green">
				<template #icon><Pieza width="24" /></template>
				<template #percent>{{ (piecesStatus.completed / piecesStatus.total).toLocaleString(Intl.Locale, { style: 'percent' }) }}</template>
				<template #count>{{ piecesStatus.completed.toLocaleString() }}</template>
				<template #name>Procesadas</template>
			</Task>

			<Task color="orange">
				<template #icon><Pieza width="24" /></template>
				<template #percent>{{ (piecesStatus.waiting / piecesStatus.total).toLocaleString(Intl.Locale, { style: 'percent' }) }}</template>
				<template #count>{{ piecesStatus.waiting.toLocaleString() }}</template>
				<template #name>Sin Procesar</template>
			</Task>
		</div>
	</article>
</template>
