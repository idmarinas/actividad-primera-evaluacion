<script setup>
import Button from '../../button.vue'
import Del from '@/components/icons/trash.vue'
</script>

<template>
	<Button button-style="danger" :circle="true"><Del width="24" /><span class="sr-only">Borrar</span></Button>
</template>
