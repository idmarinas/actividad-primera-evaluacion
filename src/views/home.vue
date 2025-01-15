<script setup>
import { usePageTitleStore } from '@/stores/page-title'
import { storeToRefs } from 'pinia';

const store = usePageTitleStore()
const { title } = storeToRefs(store)

title.value = 'Portada'
</script>

<template>
	<article>
		Portada
	</article>
</template>
