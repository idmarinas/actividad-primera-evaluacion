import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: () => import('../views/Inicio.vue'),
    },
    {
      path: '/acerca',
      name: 'acerca',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Acerca.vue'),
    },
		{
			path: '/pedidos',
			children: [
				{
					path: '',
					name: 'pedidos_lista',
					component: () => import('../views/pedidos/Lista.vue'),
				},
				{
					path: 'detalles/:id',
					name: 'pedidos_detalles',
					component: () => import('../views/pedidos/Detalles.vue')
				}
			]
		},
		{
			path: '/piezas',
			name: 'piezas',
			component: () => import('../views/Piezas.vue')
		}
  ],
})

export default router
