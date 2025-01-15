<script setup>
import Info from '../icons/info.vue'
import Warning from '../icons/warning.vue'
import Success from '../icons/success.vue'
import CircleEqual from '../icons/circle/equal.vue'

const props = defineProps({
	type: {
		type: String,
		default: 'note',
		validate (value) {
			return ['info', 'warning', 'error', 'success', 'note'].includes(value)
		}
	}
})

function icon() {
	switch (props.type) {
		case 'info': return Info
		case 'warning': return Warning
		case 'success': return Success
		default: return CircleEqual
	}
}

function alertClass() {
	switch (props.type) {
		case 'info': return 'bg-blue-100 text-blue-700'
		case 'warning': return 'bg-yellow-100 text-yellow-700'
		case 'success': return 'bg-green-100 text-green-700'
		default: return 'bg-gold-sand-100 text-gold-sand-700'
	}
}
</script>

<template>
	<div class="rounded-lg w-full" :class="alertClass()">
    <div class="flex flex-row gap-5 justify-center items-center px-5 w-full h-full">
      <div class="my-auto text-lg">
        <component :is="icon()" width="32" />
      </div>

      <p>
        <div v-if="$slots.title" class="font-bold text-lg"><slot name="title"></slot></div>
        <div class=" text-base"><slot /></div>
			</p>
    </div>
	</div>
</template>
