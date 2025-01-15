import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue'),
			meta: { 
				breadcrum: { label: 'Portada', parent: null } 
			}
    },
		{
			path: '/pedidos',
			children: [
				{
					path: '',
					name: 'order_list',
					component: () => import('../views/orders/list.vue'),
					meta: { 
						breadcrum: { label: 'Lista de pedidos', parent: 'home' } 
					}
				},
				{
					path: 'detalles/:id(\\d+)',
					name: 'order_details',
					component: () => import('../views/orders/details.vue'),
					props: true,
					meta: { 
						breadcrum: { label: 'Pedido', parent: 'order_list' } 
					}
				}
			]
		},
		{
			path: '/piezas',
			children: [
				{
					path: '',
					name: 'pieces_list',
					component: () => import('../views/pieces/list.vue'),
					meta: { 
						breadcrum: { label: 'Piezas', parent: 'home' } 
					}
				}
			]
		},
		{ 
			path: '/:pathMatch(.*)*', 
			name: 'not_found', 
			redirect: { name: 'home', params: {} }
		},
  ],
})

export default router
