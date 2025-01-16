<script setup>
	const props = defineProps({
		color: {
			type: String,
			default: 'default',
			validate (value) {
				return ['blue', 'orange', 'red', 'green'].includes(value)
			}
		}
	})

	function borderClass() {
		let style = 'flex flex-row justify-center items-center min-w-44 w-full p-5 rounded-lg shadow-xl border-l-4'

		switch (props.color) {
			case 'blue': return style + ' border-blue-600'
			case 'red': return style + ' border-red-600'
			case 'orange': return style + ' border-orange-600'
			case 'green': return style + ' border-green-600'
		
			default: return style + ' border-gold-sand-600'
		}
	}

	function percentClass() {
		let style = 'flex items-center px-3 py-0.5 rounded-full'

		switch (props.color) {
			case 'blue': return style + ' bg-blue-200 text-blue-800'
			case 'red': return style + ' bg-red-200 text-red-800'
			case 'orange': return style + ' bg-orange-200 text-orange-800'
			case 'green': return style + ' bg-green-200 text-green-800'
		
			default: return style + ' bg-gold-sand-200 text-gold-sand-800'
		}
	}
</script>

<template>
	<div :class="borderClass()" class='sm:flex-col sm:max-w-52 bg-gold-sand-50'>
		<div class="flex justify-between w-full">
			<div><slot name="icon" /></div>
			<div>
				<div :class="percentClass()" class=" text-xs"><slot name="percent">100%</slot></div>
			</div>
		</div>
		<div>
			<div class="font-bold text-5xl text-center mb-2"><slot name="count" /></div>
			<div><slot name="name" /></div>
		</div>
	</div>
</template>
