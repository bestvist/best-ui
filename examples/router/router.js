import Vue from 'vue';
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/layout',
    component: () =>
      import ('../views/Layout.vue')
  },
  {
    path: '/grid',
    component: () =>
      import ('../views/Grid.vue')
  },
  {
    path: '/color',
    component: () =>
      import ('../views/Color.vue')
  },
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})