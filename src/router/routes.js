
const routes = [
  {
    path: '/',
    component: () => import('layouts/Index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('src/layouts/About.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
