import { defineStore } from "pinia"
import { ref } from "vue"
import { useStorateJsonParse } from "@/composables/common"
import { usePiecesStore } from "./pieces"
import { useRandomId } from "@/composables/fake"


const usePrivateState = defineStore('orders-private', () => {
	let storage = useStorateJsonParse('orders-private')
	const state = ref(storage)

	function save() {
		localStorage.setItem('orders-private', JSON.stringify(state.value))
	}

	function remove(item) {

		const index = state.value.indexOf(item)

		if (index > -1) {
			state.value.splice(index, 1)

			return true
		}

		return false
	}

	return { state, save, remove }
})


export const useOrdersStore = defineStore('orders', () => {
	const state = usePrivateState()
	const pieces = usePiecesStore()

	function process(order) {
		let total = order.pieces?.length || 0
		if (total === 0) {
			return 0
		}

		let completed  = order.pieces.filter(item => item.cut === true)?.length || 0

		return completed / total
	}

	function processById(orderId) {
		orderId = Number.parseInt(orderId)

		return process(find(orderId))
	}

	function all () {
		return state.state
	}

	// Se guardan todos los pedidos
	function save() {
		state.save()
	}

	function remove(item) {
		item = find(item.id)

		if (item.pieces.length < 1 || pieces.delPiecesOfOrder(item.pieces)) {
			if (state.remove(item)){
				state.save()

				return true
			}
		}

		return false
	}

	function find(id) {
		id = Number.parseInt(id)
		let order = findById(id) || {}
		order.pieces = pieces.findPiecesOfOrder(id)

		return order
	}
	
	function findById(id) {
		id = Number.parseInt(id)
		return state.state.find(item => item.id === id)
	}

	function generateOrderId() {
		let id = useRandomId()

		while (findById(id) !== undefined) {
			id = useRandomId()
		}

		return id
	}

	function add(order) {
		let piecesA = order.pieces

		delete order.pieces

		// Primero se elimina para guardar el nuevo
		
		const index = state.state.indexOf(order)

		if (index > -1) {
			state.state.splice(index, 1)
		}

		state.state.push(order)

		save()
		pieces.add(piecesA)
	}

	return { process, all, save, remove, find, findById, generateOrderId, processById, add }
})
