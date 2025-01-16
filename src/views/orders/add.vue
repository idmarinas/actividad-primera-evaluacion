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

const formErrors = ref({
	invalid: [],
	id: [],
	client: [],
	orderDate: [], 
	pieces: []
})

function addPiece() {
	order.value.pieces.push({
		order: order.value.id,
		dimensions: {},
		bothFaces: false,
		cut: false
	})

	formErrors.value.pieces.push({
		id:[],
		dimensions: {
			length: [],
			width: [],
			thickness: []
		},
		color: []
	})
}

const isValid = computed(() => {
	let valid = true

	for(let key in formErrors.value) {
		if (key === 'pieces') {
			formErrors.value[key].forEach((value) => {
				for(let k in value) {
					if (k === 'dimensions') {
						for(let d in value[k]) {
							if (value[k][d].length > 0) {
								valid = false
							}
						}
					}

					if (value[k].length > 0) {
						valid = false
					}
				}
			})

			continue
		} 
		
		if (formErrors.value[key].length > 0) {
			valid = false
		}
	}

	return valid
})

function validate() {
	delete formErrors.value.invalid

	// Validar si existe un ID
	if (order.value.id === undefined || !Number.isInteger(order.value.id)) {
		formErrors.value.id = [
			'Genera un Número de pedido usando el botón de "Generar" y consta de números enteros',
		]
	} else {
		formErrors.value.id = []
	}

	// Validar cliente
	if (typeof order.value.client !== 'string' || order.value.client.length < 5) {
		formErrors.value.client = [
			'Se debe poner el nombre y apellidos de cliente y debe tener como mínimo 5 letras'
		]
	} else {
		formErrors.value.client = []
	}

	// Validar la fecha
	const date = new Date(order.value.orderDate)

	if (isNaN(date.getTime()) || new Date().getTime() < date.getTime()) {
		formErrors.value.orderDate = [
			'La fecha no tiene un formato válido y no puede ser una fecha posterior a la fecha actual'
		]
	} else {
		formErrors.value.orderDate = []
	}

	// Validar las piezas
	if (order.value.pieces.length < 1) {
		formErrors.value.piecesEmpty = [
			'Se debe poner como mínimo una pieza en el pedido'
		]
	} else {
		formErrors.value.piecesEmpty = []
	}

	if (order.value.pieces.length > 0) {
		// Se comprueban todos los valores
		order.value.pieces.forEach((value, index) => {
			if (value.id === undefined || !Number.isInteger(value.id)) {
				formErrors.value.pieces[index].id = [
					'Genera un Número para pieza usando el botón de "Generar"'
				]
			} else {
				formErrors.value.pieces[index].id = []
			}

			if (value.dimensions.length === undefined || !Number.isInteger(value.dimensions.length) || value.dimensions.length < 1) {
				formErrors.value.pieces[index].dimensions.length = [
					'El largo de la pieza tiene que estar definido ser un número entero y mayor que 0',
				]
			} else {
				formErrors.value.pieces[index].dimensions.length = []
			}

			if (value.dimensions.width === undefined || !Number.isInteger(value.dimensions.width) || value.dimensions.width < 1) {
				formErrors.value.pieces[index].dimensions.width = [
					'El ancho de la pieza tiene que estar definido ser un número entero y mayor que 0',
				]
			} else {
				formErrors.value.pieces[index].dimensions.width = []
			}

			if (value.dimensions.thickness === undefined || !Number.isInteger(value.dimensions.thickness) || value.dimensions.thickness < 1) {
				formErrors.value.pieces[index].dimensions.thickness = [
					'El grosor de la pieza tiene que estar definido ser un número entero y mayor que 0',
				]
			} else {
				formErrors.value.pieces[index].dimensions.thickness = []
			}
		})
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
		<div v-for="(messages, error) in formErrors" class=" space-y-1">
			<template v-if="error !== 'pieces'" v-for="msg in messages"><div>{{ msg }}</div></template>
		</div>
	</Alert>

	<form class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<h2 class="col-span-full">Datos del pedido</h2>

		<div class="flex gap-3 items-center">
			<label for="order_id">Nº de pedido</label>
			<Input v-if="isEdit" type="number" readonly class="rounded-lg flex-1" id="order_id" v-model="order.id" />
			<template v-else>
				<div class="flex-1 flex gap-0">
					<Input :error="formErrors.id.length > 0" type="number" readonly class="rounded-l-lg flex-1" id="order_id" v-model="order.id" />
					<Button class="rounded-r-lg" @click="generateOrderId()" :disabled="order.id !== undefined">Generar</Button>
				</div>
			</template>
		</div>
		<div class="flex gap-3 items-center">
			<label for="order_client">Cliente</label>
			<Input :error="formErrors.client.length > 0" type="text" class="rounded-lg flex-1" id="order_client" v-model="order.client" />
		</div>
		
		<div class="flex gap-3 items-center">
			<label for="order_date">Fecha pedido</label>
			<Input :error="formErrors.orderDate.length > 0" type="datetime-local" class="rounded-lg flex-1" id="order_date" v-model="order.orderDate" />
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
					v-model:errors="formErrors.pieces[index]"
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
