<script setup>
const props = defineProps({
	type: {
		type: String,
		default: 'button',
		validate (value) {
			return ['submit', 'button', 'reset'].includes(value)
		}
	},
	class: {
		type: String,
		default: ''
	},
	circle: {
		type: Boolean,
		default: false
	},
	disabled: {
		type: Boolean,
		default: false
	},
	buttonStyle: {
		type: String,
		default: 'default',
		validate (value) {
			return ['default', 'info', 'success', 'danger', 'warning'].includes(value)
		}
	},
	icon: {
		type: Boolean,
		default: false
	},
	asRoute: {
		type: Object,
		default: undefined,
	}
})

function buttonClass() {
	return props.class + (props.circle ? ' p-1 rounded-full' : ' py-1 px-3')
	+ (props.icon ? ' inline-flex items-center gap-2' : '')
	+ ' border transition-colors duration-300 hover:ring '
	+ buttonStyle()
}

function buttonStyle() {
	switch (props.buttonStyle) {
		case 'info':
			return 'ring-blue-200 bg-blue-500 border-blue-500 text-blue-50'
			+ ' hover:bg-blue-600 active:bg-blue-700 disabled:bg-blue-100 disabled:text-blue-400'
		case 'success':
			return 'ring-green-200 bg-green-500 border-green-500 text-green-50'
			+ ' hover:bg-green-600 active:bg-green-700 disabled:bg-green-100 disabled:text-green-400'
		case 'danger':
			return 'ring-red-200 bg-red-500 border-red-500 text-red-50'
			+ ' hover:bg-red-600 active:bg-red-700 disabled:bg-red-100 disabled:text-red-400'
		case 'warning':
			return 'ring-yellow-200 bg-yellow-500 border-yellow-500 text-yellow-50'
			+ ' hover:bg-yellow-600 active:bg-yellow-700 disabled:bg-yellow-100 disabled:text-yellow-400'
		default:
			return 'ring-gold-sand-200 bg-gold-sand-500 border-gold-sand-500 text-gold-sand-50'
			+ ' hover:bg-gold-sand-600 active:bg-gold-sand-700 disabled:bg-gold-sand-100 disabled:text-gold-sand-400'
	}
}
</script>

<template>
	<button v-if="asRoute === undefined" :type="type" :class="buttonClass()" :disabled="disabled"><slot /></button>
	<RouterLink v-else :to="asRoute" class="button not-prose" :class="buttonClass()"><slot /></RouterLink>
</template>
