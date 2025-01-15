import { defineStore } from "pinia"
import { ref } from "vue"
import { useStorateJsonParse } from "@/composables/common"
import { useOrdersStore } from "./orders"
import { useRandomId } from "@/composables/fake"

const usePrivateState = defineStore('pieces-private', () => {
	let storage = useStorateJsonParse('pieces-private')
	const state = ref(storage)

	function save() {
		localStorage.setItem('pieces-private', JSON.stringify(state.value))
	}

	function delPiecesOfOrder(items) {
		let success = false

		items.forEach(item => {
			const index = state.value.indexOf(item)

			if (index > -1) {
				state.value.splice(index, 1)
	
				success = true
			}
		})

		return success
	}

	function remove(item){
		const index = state.value.indexOf(item)

		if (index > -1) {
			state.value.splice(index, 1)

			return true
		}

		return false
	}

	return { state, save, delPiecesOfOrder, remove }
})

export const usePiecesStore = defineStore('pieces', () => {
	const state = usePrivateState()
	const orders = useOrdersStore()

	function volume (dimensions) {
		let volume = dimensions.length * dimensions.width * dimensions.thickness
		volume = volume / 1000000 // m3

		return volume
	}
	
	function area (dimensions, bothFaces) {
		let faces = bothFaces ? 2 : 1
		// largo × ancho, largo × grosor, y ancho × grosor.
		let result1 = (dimensions.length * dimensions.width)
		// let result2 = (dimensions.length * dimensions.thickness) * 2
		// let result3 = (dimensions.width * dimensions.thickness) * 2
		
		let areaM = (result1 * faces) / 10000 // m2

		return areaM 
	}

	function all() {
		return state.state
	}	
	
	// Se guardan todas las piezas
	function save() {
		state.save()
	}

	function delPiecesOfOrder(items) {
		if (state.delPiecesOfOrder(items)){
			state.save()

			return true
		}

		return false
	}

	function remove(item) {
		if (state.remove(item)) {
			let pieces = state.state.filter(i => i.order === item.order) || []

			// Se borra el pedido si no tiene piezas asociadas
			if (pieces.length < 1) {
				orders.remove(orders.findById(item.order))
			}

			state.save()

			return true
		}

		return false
	}

	function findOrderOfPiece(orderId) {
		return orders.findById(orderId)
	}

	function findPiecesOfOrder(orderId) {
		return state.state.filter(item => item.order === orderId) || []
	}

	function findById(id) {
		id = Number.parseInt(id)
		return state.state.find(item => item.id === id)
	}

	function generatePieceId() {
		let id = useRandomId()
		
		while (findById(id) !== undefined) {
			id = useRandomId()
		}
	
		return id
	}

	function add(pieces) {
		pieces.forEach(item => {
			remove(item)
			state.state.push(item)
		})
		
		save()
	}
	
	return { volume, area, all, save, delPiecesOfOrder, remove, findOrderOfPiece, findPiecesOfOrder, generatePieceId, add }
})
