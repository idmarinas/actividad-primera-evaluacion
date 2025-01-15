<script setup>
const props = defineProps({
	style: {
		type: String,
		default: 'default',
		validate (value) {
			return ['default', 'success', 'danger', 'info'].includes(value)
		}
	}
})

function badgeClass() {
	return 'py-0.5 px-3 text-center rounded-full '
		+ badgeStyle()
}

function badgeStyle() {
	switch (props.style) {
		case 'info':
			return 'ring-blue-200 bg-blue-500 border-blue-500 text-blue-50'
		case 'success':
			return 'ring-green-200 bg-green-500 border-green-500 text-green-50'
		case 'danger':
			return 'ring-red-200 bg-red-500 border-red-500 text-red-50'
		default:
			return 'ring-gold-sand-200 bg-gold-sand-500 border-gold-sand-500 text-gold-sand-50'
	}
}
</script>

<template>
	<div :class="badgeClass()">
		<slot />
	</div>
</template>
