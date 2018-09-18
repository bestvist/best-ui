import Vue from 'vue';
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const routes = [{
    path: '/',
    meta: {
      title: 'Home 主页'
    },
    component: Home
  },
  {
    path: '/layout',
    meta: {
      title: 'Layout 布局'
    },
    component: () =>
      import ('../views/Layout.vue'),
  },
  {
    path: '/grid',
    meta: {
      title: 'Grid 栅格'
    },
    component: () =>
      import ('../views/Grid.vue')
  },
  {
    path: '/color',
    meta: {
      title: 'Color 色彩'
    },
    component: () =>
      import ('../views/Color.vue')
  },
  {
    path: '/icon',
    meta: {
      title: 'Icon 图标'
    },
    component: () =>
      import ('../views/Icon.vue')
  },
  {
    path: '/button',
    meta: {
      title: 'Button 图标'
    },
    component: () =>
      import ('../views/Button.vue')
  },
  {
    path: '/input',
    meta: {
      title: 'Input 输入框'
    },
    component: () =>
      import ('../views/Input.vue')
  },
  {
    path: '/checkbox',
    meta: {
      title: 'Checkbox 复选框'
    },
    component: () =>
      import ('../views/Checkbox.vue')
  },
  {
    path: '/radio',
    meta: {
      title: 'Radio 单选框'
    },
    component: () =>
      import ('../views/Radio.vue')
  },
  {
    path: '/switch',
    meta: {
      title: 'Switch 转换框'
    },
    component: () =>
      import ('../views/Switch.vue')
  },
  {
    path: '/card',
    meta: {
      title: 'Card 卡片'
    },
    component: () =>
      import ('../views/Card.vue')
  },
  {
    path: '/tag',
    meta: {
      title: 'Tag 标签'
    },
    component: () =>
      import ('../views/Tag.vue')
  },
  {
    path: '/progress',
    meta: {
      title: 'Progress 进度条'
    },
    component: () =>
      import ('../views/Progress.vue')
  },
  {
    path: '/alert',
    meta: {
      title: 'Alert 警告'
    },
    component: () =>
      import ('../views/Alert.vue')
  },
  {
    path: '/collapse',
    meta: {
      title: 'Collapse 折叠板'
    },
    component: () =>
      import ('../views/Collapse.vue')
  },
  {
    path: '/list',
    meta: {
      title: 'List 列表'
    },
    component: () =>
      import ('../views/List.vue')
  },

]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})