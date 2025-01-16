<script setup>
import { usePageTitleStore } from '@/stores/page-title'

import { useOrdersStore } from '@/stores/orders'
import { computed } from 'vue'
import { useDateOptions, useModal } from '@/composables/common'

import Button from '@/components/forms/button.vue'
import Add from '@/components/icons/add.vue'
import Modal from '@/components/dialogs/modal.vue'
import CircleCheck from '@/components/icons/circle/check.vue'
import CircleX from '@/components/icons/circle/x.vue'
import Badge from '@/components/tags/badge.vue'
import Alert from '@/components/dialogs/alert.vue'

import Del from '@/components/forms/buttons/icons/del.vue'
import Edit from '@/components/forms/buttons/icons/edit.vue'
import Info from '@/components/forms/buttons/icons/info.vue'

const titleStore = usePageTitleStore()
const ordersStore = useOrdersStore()

const { modal, openModal, closeModal } = useModal()

const list = computed(() => ordersStore.all())

function deleteOrder(item) {
	ordersStore.remove(item)	
	closeModal()
}

titleStore.title = 'Lista de pedidos'
</script>

<template>
	<div class="flex flex-row justify-end">
		<Button button-style="success" class="rounded-lg" :icon="true" :as-route="{ name: 'order_add' }">
			<Add width="24" /> <span>Crear pedido</span>
		</Button>
	</div>
	<table>
		<thead>
			<tr class="flex flex-col md:table-row">
				<th>Cliente</th>
				<th>Fecha pedido</th>
				<th>Procesado</th>
				<th>Servido</th>
				<th></th>
			</tr>
		</thead>
		<TransitionGroup tag="tbody" name="list">
			<tr v-for="item in list" :key="item" class="flex flex-col md:table-row">
				<td>{{ item.client }}</td>
				<td>{{ (new Date(item.orderDate)).toLocaleString(Intl.Locale, useDateOptions) }}</td>
				<td>{{ ordersStore.processById(item.id).toLocaleString(Intl.Locale, {style : 'percent' }) }}</td>
				<td><Badge :style="item.served ? 'success' : 'danger'">{{ item.served ? 'Sí' : 'No' }}</Badge></td>
				<td class="h-full flex items-center justify-center md:justify-end gap-2">
					<RouterLink :to="{ name: 'order_details', params: { id: item.id }}" class="not-prose"><Info /></RouterLink>
					<RouterLink :to="{ name: 'order_edit', params: { id: item.id } }" class="not-prose"><Edit /></RouterLink>
					<Del @click="openModal(item)" />
				</td>
			</tr>
		</TransitionGroup>
	</table>
	
	<Teleport to="body">
		<Modal :opened="modal.opened" @close="closeModal">
			<template #title>
				¿Seguro que desea borrar el pedido de {{ modal.item.client }}?
			</template>

			<template #default>
				<p class="flex gap-2">
					<span :class="modal.item.served ? 'text-green-500' : 'text-red-500'">
						<component :is="modal.item.served ? CircleCheck : CircleX " width="24" />
					</span>
					El pedido {{ modal.item.served ? 'ya' : 'no' }} se ha entregado
				</p>
				<Alert type="warning">Esto borrara el pedido así como las piezas asociadas al mismo y no es posible recuperar el pedido.</Alert>
			</template>

			<template #actions>
				<Button button-style="danger" class="rounded-md" @click="deleteOrder(modal.item)">Borrar</Button>
			</template>
		</Modal>
	</Teleport>
</template>
