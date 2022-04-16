import { createRouter, createWebHistory } from 'vue-router'
import BabylonScene from '../views/one/BabylonScene.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BabylonScene
    },
    {
      path: '/two',
      name: 'two',
      component: () => import('../views/two/Two.vue')
    }
  ]
})

export default router
