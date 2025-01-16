<script setup>
import Input from '@/components/forms/input.vue'
import Button from '@/components/forms/button.vue'
import Add from '@/components/icons/add.vue'
import AddPiece from './piece.vue'
import Alert from '@/components/dialogs/alert.vue'

import { useOrdersStore } from '@/stores/orders'
import { usePageTitleStore } from '@/stores/page-title'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const pageStore = usePageTitleStore()

const props = defineProps({
	id: String
})

const store = useOrdersStore()

const order = ref(store.find(props.id))
order.value.served = order.value.serverd === undefined ? false : true

function generateOrderId() {
	order.value.id = store.generateOrderId()
}

function checkIsEdit() {
	return ! (order.value.id === undefined)
}

const isEdit = checkIsEdit()

function process() {
	if (order.value?.pieces?.length < 1) {
		return 'Todavia no se han agregado piezas al pedido'
	}

	let num = store.process(order.value)
	let percent = num === undefined ? '¿?' : num.toLocaleString(Intl.Locale, { style: 'percent' })

	return `${percent}`
}

function canAddPieces() {
	return ! (order.value.id === undefined)
}

function addPiece() {
	order.value.pieces.push({
		order: order.value.id,
		dimensions: {},
		bothFaces: false,
		cut: false
	})
}

const formErrors = ref({invalid: []})

const isValid = computed((s) => Object.keys(formErrors.value).length < 1)

function validate() {
	delete formErrors.value.invalid

	// Validar si existe un ID
	if (order.value.id === undefined) {
		formErrors.value.id = [
			'Genera un Número de pedido usando el botón de "Generar"'
		]
	} else {
		delete formErrors.value.id
	}

	// Validar cliente
	if (typeof order.value.client !== 'string' || order.value.client.length < 5) {
		formErrors.value.client = [
			'Se debe poner el nombre y apellidos de cliente y debe tener como mínimo 5 letras'
		]
	} else {
		delete formErrors.value.client
	}

	// Validar la fecha
	const date = new Date(order.value.orderDate)

	if (isNaN(date.getTime()) || new Date().getTime() < date.getTime()) {
		formErrors.value.orderDate = [
			'La fecha no tiene un formato válido',
			'La fecha puede que sea posterior a la fecha actual'
		]
	} else {
		delete formErrors.value.orderDate
	}

	// Validar las piezas
	if (order.value.pieces.length < 1) {
		formErrors.value.piecesEmpty = [
			'Se debe poner como mínimo una pieza en el pedido'
		]
	} else {
		delete formErrors.value.piecesEmpty
	}
}

function addOrder() {
	store.add(order.value)

	router.push({name: 'order_details', params: { id: order.value.id }})
}

pageStore.title = isEdit ? 'Editar pedido' : 'Crear pedido'
</script>

<template>
	<Alert type="error"  v-if="!isValid && !formErrors.invalid">
		<template #title>
			El formulario contiene errores
		</template>
		<div v-for="messages in formErrors" class=" space-y-1">
			<template v-for="msg in messages">{{ msg }}<br /></template>
		</div>
	</Alert>

	<form class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<h2 class="col-span-full">Datos del pedido</h2>

		<div class="flex gap-3 items-center">
			<label for="order_id">Nº de pedido</label>
			<Input v-if="isEdit" type="number" readonly class="rounded-lg flex-1" id="order_id" v-model="order.id" />
			<template v-else>
				<div class="flex-1 flex gap-0">
					<Input :error="formErrors?.id?.length > 0" type="number" readonly class="rounded-l-lg flex-1" id="order_id" v-model="order.id" />
					<Button class="rounded-r-lg" @click="generateOrderId()" :disabled="order.id !== undefined">Generar</Button>
				</div>
			</template>
		</div>
		<div class="flex gap-3 items-center">
			<label for="order_client">Cliente</label>
			<Input :error="formErrors?.client?.length > 0" type="text" class="rounded-lg flex-1" id="order_client" v-model="order.client" />
		</div>
		
		<div class="flex gap-3 items-center">
			<label for="order_date">Fecha pedido</label>
			<Input :error="formErrors?.orderDate?.length > 0" type="datetime-local" class="rounded-lg flex-1" id="order_date" v-model="order.orderDate" />
		</div>
		<div class="flex gap-3 items-center">
			<label>Procesado</label>
			<div class="flex-1">
				{{ process() }}
			</div>
		</div>

		<div class="flex gap-3 items-center">
			<Input type="checkbox" class="rounded-lg" id="order_served" v-model="order.served" />
			<label for="order_served">Servido</label>
		</div>

		<h3 class="col-span-full">Piezas encargadas</h3>

		<div class="col-span-full flex items-center gap-3">
			<Button 
				@click="addPiece()"
				:button-style="canAddPieces() ? 'success' : 'warning'" 
				class="rounded-lg" 
				:icon="true" 
				:disabled="!canAddPieces()"
			>
				<Add width="24" /> 
				{{ canAddPieces() ? 'Añadir pieza' : 'Crea un ID para el pedido' }}
			</Button>

			<div class="flex-1 text-red-700" v-if="formErrors?.piecesEmpty?.length > 0">
				{{ formErrors.piecesEmpty[0] }}
			</div>
		</div>

		<div class="col-span-full grid grid-cols-1 divide-y-2 divide-gold-sand-500">
			<div v-for="(piece, index) in order.pieces" :key="index" class="grid grid-cols-3 gap-3 py-3">
				<AddPiece 
					:isEdit="isEdit"
					v-model:id="piece.id" 
					v-model:dimensions-length="piece.dimensions.length"
					v-model:dimensions-width="piece.dimensions.width"
					v-model:dimensions-thickness="piece.dimensions.thickness"
					v-model:color="piece.color"
					v-model:both-faces="piece.bothFaces"
					v-model:cut="piece.cut"
				/>
			</div>
		</div>

		<div class="col-span-full flex gap-3 mb-3">
			<div class="flex-1"></div>
			<Button class="rounded-lg" @click="validate()">Validar datos</Button>

			<Button button-style="success" class="rounded-lg" :disabled="!isValid" @click="addOrder()">Guardar pedido</Button>
		</div>
	</form>
</template>
