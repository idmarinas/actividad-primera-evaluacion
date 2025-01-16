<script setup>
import Button from '../forms/button.vue'
import Close from '../icons/close.vue'

defineProps({
	opened: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<Transition name="modal">
		<div v-show="opened" class="fixed top-0 left-0 w-full h-dvh flex items-center justify-center z-50 backdrop-blur-md bg-black/30 transition-opacity duration-300">
			<dialog 
				class="mx-1 md:mx-0 p-3 md:p-6 prose prose-gold-sand transition-all duration-300" 
				:open="opened"
			>
				<Button id="modal-button-close" class="absolute top-2 right-2 rounded-lg" :icon="true" @click="$emit('close')">
					<Close width="24" />
				</Button>

				<h3 v-if="$slots.title"><slot name="title" /></h3>

				<div class="mb-4"><slot /></div>

				<div class="flex justify-end gap-3">
					<slot name="actions" />
					<div class="flex-1"></div>
					<Button class="flex-none rounded-md" @click="$emit('close')" :icon="true"><Close width="24" /> <span>Cerrar</span></Button>
				</div>
			</dialog>
		</div>
	</Transition>
</template>

<style lang="css" scoped>
dialog {
	@apply relative rounded-lg shadow-md shadow-gold-sand-100 bg-gold-sand-50
}
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from dialog,
.modal-leave-to dialog {
  transform: scale(1.1);
}
</style>
