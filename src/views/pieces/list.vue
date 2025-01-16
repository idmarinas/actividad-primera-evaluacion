<script setup>
import { usePageTitleStore } from '@/stores/page-title'
import { usePiecesStore } from '@/stores/pieces'
import { computed, ref } from 'vue'
import { useModal } from '@/composables/common'

import Button from '@/components/forms/button.vue'
import Add from '@/components/icons/add.vue'
import Modal from '@/components/dialogs/modal.vue'
import CircleCheck from '@/components/icons/circle/check.vue'
import CircleX from '@/components/icons/circle/x.vue'
import Alert from '@/components/dialogs/alert.vue'
import Badge from '@/components/tags/badge.vue'

import Del from '@/components/forms/buttons/icons/del.vue'
import Edit from '@/components/forms/buttons/icons/edit.vue'
import EditIcon from '@/components/icons/edit.vue'
import { useOrdersStore } from '@/stores/orders'

const titleStore = usePageTitleStore()
const piecesStore = usePiecesStore()
const ordersStore = useOrdersStore()

const { modal, openModal, closeModal } = useModal()

const list = computed(() => piecesStore.all())
const ordersList = computed(() => ordersStore.all())

const addModal = ref({
	opened: false,
	item: {},
	order: {}
})

function openAddModal() {
	addModal.value.opened = true
	addModal.value.item = {}
	addModal.value.order = {}
}

function closeAddModal() {
	addModal.value.opened = false
	addModal.value.item = {}
	addModal.value.order = {}
}

function deletePiece(item) {
	piecesStore.remove(item)	
	closeModal()
}

const selected = ref(undefined)

titleStore.title = 'Lista de piezas'
</script>

<template>
	<div class="flex flex-row justify-end">
		<Button button-style="success" class="rounded-md inline-flex gap-2 items-center" @click="openAddModal()">
			<Add width="24" /> <span>Añadir pieza</span>
		</Button>
	</div>

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
				<th></th>
			</tr>
		</thead>
		<TransitionGroup tag="tbody" name="list">
			<tr v-for="item in list" :key="item" class="flex flex-col md:table-row">
				<td>{{ item.dimensions.length }} cm</td>
				<td>{{ item.dimensions.width }} cm</td>
				<td>{{ item.dimensions.thickness }} cm</td>
				<td>{{ item.color }}</td>
				<td>{{ piecesStore.area(item.dimensions, item.bothFaces).toLocaleString() }} m<sup>2</sup></td>
				<td>{{ piecesStore.volume(item.dimensions).toLocaleString() }} m<sup>3</sup></td>
				<td><Badge :style="item.cut ? 'success' : 'danger'">{{ item.cut ? 'Sí' : 'No' }}</Badge></td>

				<td class="h-full flex items-center justify-center md:justify-end gap-2">
					<RouterLink :to="{ name: 'order_edit', params: { id: item.order }}"><Edit /></RouterLink>
					<Del @click="openModal(item)" />
				</td>
			</tr>
		</TransitionGroup>
	</table>

	<Teleport to="body">
		<Modal :opened="modal.opened" @close="closeModal">
			<template #title>
				¿Seguro que desea borrar la pieza {{ modal.item.id }}?
			</template>

			<template #default>
				<p class="flex gap-2">
					<span :class="modal.order.served ? 'text-green-500' : 'text-red-500'">
						<component :is="modal.order.served ? CircleCheck : CircleX " width="24" />
					</span>
					El pedido {{ modal.order.served ? 'ya' : 'no' }} se ha entregado
				</p>
				<Alert type="warning">Esto borrara la pieza del cliente "{{ modal.order.client }}" y en caso de que el pedido no tenga más piezas se borrará también. Está acción no se puede deshacer</Alert>
			</template>

			<template #actions>
				<Button button-style="danger" class="rounded-md" @click="deletePiece(modal.item)">Borrar</Button>
			</template>
		</Modal>

		<Modal :opened="addModal.opened" @close="closeAddModal">
			<template #title>
				¿A que pedido se le van a añadir piezas?
			</template>

			<template #default>
				<select v-model="selected" class="rounded-lg">
					<option disabled value="undefined">Selecciona un pedido</option>
					<option v-for="order in ordersList" :key="order.id" :value="order.id">
						{{ order.client }} ({{ order.id }})
					</option>
				</select>

				<p>También se puede crear un nuevo pedido</p>
			</template>

			<template #actions>
			<Button 
				:disabled="selected === undefined"
				button-style="warning"
				class="rounded-lg" 
				:icon="true" 
				:as-route="selected === undefined ? undefined : { name: 'order_edit', params: { id: selected } }"
			>
				<EditIcon width="24" /> <span>Editar</span>
			</Button>

				<Button button-style="success" class="rounded-lg" :icon="true" :as-route="{ name: 'order_add' }">
					<Add width="24" /> <span>Nuevo pedido</span>
				</Button>
			</template>
		</Modal>
	</Teleport>
</template>
