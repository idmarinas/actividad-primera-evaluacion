<script setup>
import { useOrdersStore } from '@/stores/orders'
import { usePageTitleStore } from '@/stores/page-title'

import Button from '@/components/forms/button.vue'
import Edit from '@/components/icons/edit.vue'
import Trash from '@/components/icons/trash.vue'
import CircleCheck from '@/components/icons/circle/check.vue'
import CircleX from '@/components/icons/circle/x.vue'
import Modal from '@/components/dialogs/modal.vue'
import Alert from '@/components/dialogs/alert.vue'
import Badge from '@/components/tags/badge.vue'
import List from '@/components/icons/list.vue'

import { useDateOptions, useModal } from '@/composables/common'
import { useRouter } from 'vue-router'
import { usePiecesStore } from '@/stores/pieces'

const { modal, openModal, closeModal } = useModal()
const router = useRouter()

const props = defineProps({
	id: String
})

if (props.id === undefined) {
	router.push({ name: 'order_list' })
}

const pageTitle = usePageTitleStore()
const store = useOrdersStore()
const piecesStore = usePiecesStore()

const order = store.find(props.id)

function deleteOrder(item) {
	store.remove(item)
	
	router.push({ name: 'order_list' })
}

pageTitle.title = order.client
</script>

<template>
	<h2>{{ `Pedido nº ${props.id}` }}</h2>
	
	<div class="flex flex-row gap-2">
		<Button button-style="danger" class="rounded-lg" @click="openModal(order)" :icon="true"><Trash width="24" /> Borrar pedido</Button>

		<div class="flex-1"></div>

		<RouterLink :to="{ name: 'order_list' }" class="not-prose">
			<Button class="rounded-lg" :icon="true"><List width="24" /> Lista de pedidos</Button>
		</RouterLink>
		<RouterLink :to="{ name: 'order_edit', params: { id: props.id }}" class="not-prose">
			<Button button-style="warning" class="rounded-lg" :icon="true"><Edit width="24" /> Editar pedido</Button>
		</RouterLink>
	</div>
	
	<h3>Datos</h3>
	<dl>
		<dt>Fecha del pedido</dt>
		<dd>{{ (new Date(order.orderDate)).toLocaleString(Intl.Locale, useDateOptions) }}</dd>

		<dt>Procesado</dt>
		<dd>Se han cortado un {{ store.processById(order.id).toLocaleString(Intl.Locale, {style : 'percent' }) }} de las piezas</dd>

		<dt>Servido</dt>
		<dd>
			<div class="inline-flex items-center gap-3">
				<span :class="order.served ? 'text-green-500' : 'text-red-500'">
					<component :is="order.served ? CircleCheck : CircleX " width="24" />
				</span>
				<span>El pedido {{ order.served ? 'ya' : 'no' }} se ha entregado</span>
			</div>
		</dd>
	</dl>

	<h3>Piezas ({{ order.pieces.length }})</h3>

	<table>
		<thead>
			<tr class="flex flex-col md:table-row">
				<th>Largo</th>
				<th>Ancho</th>
				<th>Grosor</th>
				<th>Color</th>
				<th>Superficie</th>
				<th>Volumen</th>
				<th>Cortada</th>
			</tr>
		</thead>
		<TransitionGroup tag="tbody" name="list">
			<tr v-for="item in order.pieces" :key="item" class="flex flex-col md:table-row">
				<td>{{ item.dimensions.length }} cm</td>
				<td>{{ item.dimensions.width }} cm</td>
				<td>{{ item.dimensions.thickness }} cm</td>
				<td>{{ item.color }}</td>
				<td>{{ piecesStore.area(item.dimensions, item.bothFaces).toLocaleString() }} m<sup>2</sup></td>
				<td>{{ piecesStore.volume(item.dimensions).toLocaleString() }} m<sup>3</sup></td>
				<td><Badge :style="item.cut ? 'success' : 'danger'">{{ item.cut ? 'Sí' : 'No' }}</Badge></td>
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
				<Alert type="warning">Esto borrara el pedido así como las ({{ modal.item.pieces?.length }}) piezas, cortadas o no, asociadas al mismo y no es posible recuperar el pedido.</Alert>
			</template>

			<template #actions>
				<Button button-style="danger" class="rounded-md" @click="deleteOrder(modal.item)">Borrar</Button>
			</template>
		</Modal>
	</Teleport>
</template>
