import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: () => ({ name: 'signin' }),
  },
  {
    path: '/signup',
    name: 'signup',
    component: import(/* webpackChunkName: "signup" */ '../pages/Signup.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import(/* webpackChunkName: "signin" */ '../pages/Signin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
