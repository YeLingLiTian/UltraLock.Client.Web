import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import enter from '../views/enter.vue'
import opendoor from "../views/opendoor";
import doors from "../views/doors";
import bots from "../views/bots";
import nfcs from "../views/nfcs";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/enter',
    name: 'enter',
    component: enter,
    // route level code-splitting
    // this generates a separate chunk (enter.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children:[{
      path:'/opendoor',
      name:'opendoor',
      component:opendoor,
    },
      {
        path:'/doors',
        name:'doors',
        component:doors,
      },
      {
        path:'/bots',
        name:'bots',
        component:bots,
      },
      {
        path:'/nfcs',
        name:'nfcs',
        component:nfcs,
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
