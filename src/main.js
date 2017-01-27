import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Foo from './Foo.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { path: '/foo', component: Foo }
  ]
});

var a = Vue.extend({
  render: h => h(App)
});

a.options.router = router;

new a().$mount('#app');
