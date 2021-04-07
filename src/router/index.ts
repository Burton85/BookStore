import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../components/Detail.vue'


const routes: Array<RouteRecordRaw> = [
  {path:'/',redirect:'books'},
  {
    path: '/books',
    name: 'Home',
    component: Home,
  },
  {
    path: '/books/:bookId',
    name: 'Detail',
    component: Detail,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
