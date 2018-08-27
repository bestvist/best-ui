import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';

import BestUI from '../src/index';

Vue.config.productionTip = false

Vue.use(BestUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')