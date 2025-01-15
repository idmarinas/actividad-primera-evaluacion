<script setup>
	const props = defineProps({
		type: {
			type: String,
			required: true,
			validator (value) {
				return ['text', 'number', 'password', 'email', 'datetime-local', 'checkbox'].includes(value)
			}
		},
		placeholder: {
			type: String,
			required: false,
		},
		autocomplete: {
			type: Boolean,
			default: false
		},
		required: {
			type: [Boolean, String],
			default: false,
		},
		class: String,
		disabled: {
			type: Boolean,
			default: false
		},
		error: {
			type: Boolean,
			default: false
		}
	})

	const model = defineModel()

	function getAutocomplete () {
		if (typeof props.autocomplete == 'boolean') {
			return props.autocomplete ? 'on' : 'off'
		}

		return props.autocomplete
	}

	function getClass() {
		let classes = props.class

		switch (props.type) {

			case 'checkbox':
				classes = ' size-12 hover:ring '
				break
			default:
				classes = classes
					+ ' border hover:ring '
		}

		return classes + getColors()
	}

	function getColors () {
		if (props.error) {
			return ' ring-red-200'
					+ ' bg-red-50 border-red-600 text-red-600'
					+ ' hover:border-red-700 hover:text-red-700 active:border-red-800 active:text-red-800'
					+ ' disabled:border-red-200 disabled:text-red-200'
		}

		return ' ring-gold-sand-200'
					+ ' bg-gold-sand-50 border-gold-sand-600 text-gold-sand-600'
					+ ' hover:border-gold-sand-700 hover:text-gold-sand-700 active:border-gold-sand-800 active:text-gold-sand-800'
					+ ' disabled:border-gold-sand-200 disabled:text-gold-sand-200'
	}
</script>

<template>
	<input
		:type="type"
		:placeholder="placeholder"
		:autocomplete="getAutocomplete()"
		:required="required"
		:class="getClass()"
		:disabled="disabled"
		v-model="model"
	>
</template>
