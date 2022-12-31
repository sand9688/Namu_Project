import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'commu',
    component: () => import(/* webpackChunkName: "about" */ '../views/CommuView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateView.vue')
  },
  {
    path: '/content/:num',
    name: 'content',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContentView.vue')
  },
  {
    path: '/detail',
    name: 'createContent',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailView.vue')
  },
  {
    path: '/content/update/:num',
    name: 'update',
    component: () => import(/* webpackChunkName: "about" */ '../views/UpdateView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
