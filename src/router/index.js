import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: () => import('../views/Inicio.vue'),
			meta: { 
				breadcrum: { label: 'Portada', parent: null } 
			}
    },
    {
      path: '/acerca',
      name: 'acerca',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Acerca.vue'),
			meta: { 
				breadcrum: { label: 'Acerca de', parent: 'inicio' } 
			}
    },
		{
			path: '/pedidos',
			children: [
				{
					path: '',
					name: 'pedidos_lista',
					component: () => import('../views/pedidos/Lista.vue'),
					meta: { 
						breadcrum: { label: 'Lista de pedidos', parent: 'inicio' } 
					}
				},
				{
					path: 'detalles/:id',
					name: 'pedidos_detalles',
					component: () => import('../views/pedidos/Detalles.vue'),
					props: true,
					meta: { 
						breadcrum: { label: 'Pedido', parent: 'pedidos_lista' } 
					}
				}
			]
		},
		{
			path: '/piezas',
			name: 'piezas',
			component: () => import('../views/Piezas.vue'),
			meta: { 
				breadcrum: { label: 'Piezas', parent: 'inicio' } 
			}
		}
  ],
})

export default router
