<script setup>
import Input from '@/components/forms/input.vue'
import Button from '@/components/forms/button.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
	<footer class="pt-14 pb-12 px-14 bg-gold-sand-700 text-gold-sand-50 border-t-gold-sand-700 border-t shadow-md">
		<div class="container mx-auto flex flex-col">
			<div class="flex flex-row gap-10">
				<div class="flex flex-col gap-2">
					<div class="flex items-center gap-4">
						<img alt="Logo MaderAvilés" src="/src/assets/logo.svg" width="120" class="rounded-lg">
						<span class="text-5xl">MaderAvilés</span>
					</div>
					<div class="grid grid-cols-3 gap-6 mx-auto p-4">
						<a href="#">
							<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
						</a>  
						<a href="#">
							<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
						</a>
						<a href="#">
							<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
						</a>
					</div>
				</div>

				<div class="flex-1 flex flex-row gap-5 text-nowrap text-center">
					<div class="w-36 flex flex-col gap-2">
						<div class="font-bold uppercase pb-3">Explora</div> 
						
						<RouterLink :to="{ name: 'inicio' }">Inicio</RouterLink>
						<RouterLink :to="{ name: 'pedidos_lista' }">Pedidos</RouterLink>
						<RouterLink :to="{ name: 'piezas' }">Piezas</RouterLink>
					</div>
					
					<div class="w-36 flex flex-col gap-2">
							<div class="font-bold uppercase pb-3">Compañia</div> 
							
							<a href="#">Acerca de</a>  
							<a href="#">Contacto</a>  
							<a href="#">Soporte</a>  
							<a href="#">Noticias</a>
					</div>
					
					<div class="w-36 flex flex-col gap-2">
							<div class="font-bold uppercase pb-3">Legal</div> 
							
							<a href="#">Aviso legal</a>  
							<a href="#">Política de privacidad</a>  
							<a href="#">Términos de uso</a>
					</div>

					<div class="flex-1 flex flex-col gap-2">
							<div class="font-bold uppercase pb-3">Boletín</div>
							<p class="">Suscríbase a nuestro boletín.</p>
							<form class="flex items-center">
								<Input 
									name="email" 
									type="email" 
									class="rounded-l-lg flex-1 "
									placeholder="Introduzca su dirección de correo electrónico" 
									required 
								/>
								<Button type="submit" class="rounded-r-lg flex-initial">Suscríbase</Button>
							</form>
					</div>
				</div>
			</div>
			
			<div class="border-t border-gold-sand-500 my-8"></div>
			<div class="text-center">© 2024-{{ new Date().getFullYear() }} MaderAvilés - All rights reserved.</div>
		</div>
	</footer>
</template>

<style lang="css" scoped>
	a {
		@apply text-gold-sand-50;

		&:hover {
			@apply text-gold-sand-100;
		}
	}
</style>
