import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useGenerateFakeOrder, useGenerateFakePiece, useRandomInt } from './composables/fake'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const dataInitialized = localStorage.getItem('data-initialized')
if (dataInitialized === null || dataInitialized === 'false') {
	const defaultOrders = []
	const defaultPieces = []

	for(let i = 0; i < 10; i++) {
		let order = useGenerateFakeOrder(i)
		let e = useRandomInt()

		for(e; e <= 10; e++) {
			let piece = useGenerateFakePiece(e+i)
			piece.order = order.id

			defaultPieces.push(piece)
		}

		defaultOrders.push(order)
	}

	localStorage.setItem('orders-private', JSON.stringify(defaultOrders))
	localStorage.setItem('pieces-private', JSON.stringify(defaultPieces))
	localStorage.setItem('data-initialized', true)
}

app.mount('#app')
