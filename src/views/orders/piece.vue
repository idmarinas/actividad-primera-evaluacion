<script setup>
import Input from '@/components/forms/input.vue'
import Button from '@/components/forms/button.vue'
import Alert from '@/components/dialogs/alert.vue'

import { usePiecesStore } from '@/stores/pieces'
import { computed } from 'vue'

const store = usePiecesStore()

const props = defineProps({
	isEdit: Boolean
})

const id = defineModel('id')
const order = defineModel('order')
const dimensionsLength = defineModel('dimensionsLength')
const dimensionsWidth = defineModel('dimensionsWidth')
const dimensionsThickness = defineModel('dimensionsThickness')
const color = defineModel('color')
const bothFaces = defineModel('bothFaces', { type: Boolean, set: (value) => Boolean(value) })
const cut = defineModel('cut', { type: Boolean, set: (value) => Boolean(value) })

const errors = defineModel('errors')

const isValid = computed(() => {
	let valid = true

	for(let key in errors.value) {
		if (key === 'dimensions') {
			for (let k in errors.value[key]) {
				if (errors.value[key][k].length > 0) {
					valid = false
				}
			}
		} else {
			if (errors.value[key].length > 0) {
				valid = false
			}
		}
	}

	return valid
})

function generatePieceId() {
	id.value =  store.generatePieceId()
}
</script>

<template>
	<Alert type="error" class="col-span-full" v-if="!isValid">
		<template #title>
			La información de la pieza contiene errores
		</template>
		<div v-for="messages in errors" class=" space-y-1">
			<template v-for="msg in messages"><div>{{ typeof msg === 'string' ? msg : msg[0] }}</div></template>
		</div>
	</Alert>

	<input type="hidden" v-model="order">
	<div class="col-span-2 flex gap-3 items-center">
		<label for="piece_id">Nº de pedido</label>
		<Input v-if="props.isEdit" :error="errors.id.length > 0" type="number" readonly class="rounded-lg flex-1" id="piece_id" v-model="id" />
		<template v-else>
			<div class="flex-1 flex gap-0">
				<Input :error="errors.id.length > 0" type="number" readonly class="rounded-l-lg flex-1" id="piece_id" v-model="id" />
				<Button class="rounded-r-lg" @click="generatePieceId()" :disabled="id !== undefined">Generar</Button>
			</div>
		</template>
	</div>

	<div class="col-span-full">
		<h5>Dimensiones</h5>
		<div class="col-span-full grid grid-cols-3 gap-3">
			<div class="flex gap-3 items-center">
				<label for="piece_dimensions_length">Largo (cm)</label>
				<Input :error="errors.dimensions.length.length > 0" class="rounded-lg flex-1" type="number" id="piece_dimensions_length" v-model="dimensionsLength" step="1" />
			</div>
			<div class="flex gap-3 items-center">
				<label for="piece_dimensions_width">Ancho (cm)</label>
				<Input :error="errors.dimensions.width.length > 0" class="rounded-lg flex-1" type="number" id="piece_dimensions_width"  v-model="dimensionsWidth" step="1" />
			</div>
			<div class="flex gap-3 items-center">
				<label for="piece_dimensions_thickness">Grosor (cm)</label>
				<Input :error="errors.dimensions.thickness.length > 0" class="rounded-lg flex-1" type="number" id="piece_dimensions_thickness"  v-model="dimensionsThickness" step="1" />
			</div>
		</div>
	</div>

	<div class="flex gap-3 items-center">
		<label for="piece_color">Color chapado</label>
		<Input :error="errors.color.length > 0" class="rounded-lg flex-1" type="text" id="piece_color" v-model="color" />
	</div>
	
	<div class="flex gap-3 items-center">
		<Input type="checkbox" id="piece_bothFaces" v-model="bothFaces" />
		<label for="piece_bothFaces">¿Ambas caras?</label>
	</div>

	<div class="flex gap-3 items-center">
		<Input type="checkbox" id="piece_cut" v-model="cut" />
		<label for="piece_cut">¿Cortada?</label>
	</div>
</template>
