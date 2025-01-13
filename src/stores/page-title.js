import { defineStore } from "pinia";
import { ref } from "vue";


export const usePageTitleStore = defineStore('page-title', () => {
	const title = ref(null)

	return { title }
})
