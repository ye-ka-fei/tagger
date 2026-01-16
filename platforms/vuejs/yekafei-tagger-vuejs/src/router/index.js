import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import theMakeRouteNames from '@/js/make-route-names.js'


const routes_list = [

  { path: '/', name: 'home', component: HomeView, },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue'), },

  { path: '/pages', component: () => import('../views/pages/index.vue') },
  { path: '/tags', component: () => import('../views/tags/index.vue') },
  { path: '/templates', component: () => import('../views/templates/index.vue') },


  /** templates  */

  { path: '/templates/new', component: () => import('../views/templates/make-new-template.vue') },


  /**  tags/yirgacheffe  */

  { path: '/tags/yirgacheffe/', component: () => import('../views/tags/yirgacheffe/index.vue') },

  { path: '/tags/yirgacheffe/a4-v3x5-a', component: () => import('../views/tags/yirgacheffe/a4-v3x5/a.vue') },
  { path: '/tags/yirgacheffe/a4-v3x5-b', component: () => import('../views/tags/yirgacheffe/a4-v3x5/b.vue') },
  { path: '/tags/yirgacheffe/a4-h5x3-a', component: () => import('../views/tags/yirgacheffe/a4-h5x3/a.vue') },
  { path: '/tags/yirgacheffe/a4-h5x3-b', component: () => import('../views/tags/yirgacheffe/a4-h5x3/b.vue') },

];


theMakeRouteNames.makeRouteNames(routes_list)
theMakeRouteNames.logRouteItems(routes_list)


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes_list,
})

export default router
