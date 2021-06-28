
const routes = [
  {
    path: '/',
    component: () => import('layouts/Index.vue')
  },
  {
    path: '/about',
    component: () => import('components/About.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
