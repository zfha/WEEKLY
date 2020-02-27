import Vue from 'vue';
import App from './App.vue';
import Index from './Index.vue';
import Router1 from './Router1.vue';
import Router2 from './Router2.vue';
import Test from './router1/Test.vue';
import Test2 from './router1/Test2.vue';

import VueRouter from './lib/vue-router/vue-router.esm';
Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Index },
  {
    path: '/router1',
    component: Router1,
    children: [
      { path: '/router1/test', component: Test, children: [] },
      { path: '/router1/test2', component: Test2, children: [] }
    ]
  },
  { path: '/router2', component: Router2 }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
