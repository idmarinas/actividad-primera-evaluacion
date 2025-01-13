<script setup>
import { usePageTitleStore } from '@/stores/page-title'
import { storeToRefs } from 'pinia';
import { computed, watch } from 'vue';

const store = usePageTitleStore()
const { title } = storeToRefs(store)

watch(title, title => {
	document.title = `${title} - MaderAvilés Carpintería`
})
</script>

<template>
	<h1 v-show="title !== null">{{ title }}</h1>
</template>
