import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Nest from '../views/Nest.vue'
import Detail from '../components/Detail.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path:'/:pathMatch(.*)*',
    redirect:'/books'
  },
  {
    path: '/books',
    name: 'Books',
    component: Nest,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: ':bookId',
        name: 'Detail',
        component: Detail,
        props:true
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
