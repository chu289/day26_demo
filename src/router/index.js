import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
// import About from '@/views/About.vue'
import Stock from '@/views/Stock.vue'
import Sale from '@/views/Sale.vue'
import HomeContent from '@/views/HomeContent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:Home,
    children:[
      {
        path:'/',
        component:HomeContent
      },
      {
        path:'/stock',
        component:Stock
      },
      {
        path:'/sale',
        component:Sale
      },

    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
