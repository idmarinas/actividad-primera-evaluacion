import { usePiecesStore } from "@/stores/pieces";
import { ref } from "vue";

export function useRandomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function useStorateJsonParse(name) {
	let storage = localStorage.getItem(name)

	try {
		storage = JSON.parse(storage)
	} catch (error) {
		storage = false
	}

	return storage
}

export const useDateOptions = { 
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	hour12: false 
}

export function useModal() {
	const store = usePiecesStore()

	const modal = ref({
		opened: false,
		item: {},
		order: {}
	})
	
	function openModal(item) {
		modal.value.opened = true
		modal.value.item = item
		modal.value.order = store.findOrderOfPiece(item.order)
	}

	function closeModal() {
		modal.value.opened = false
		modal.value.item = {}
		modal.value.order = {}
	}

	return { modal, openModal, closeModal }
}
