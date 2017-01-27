import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Foo from './Foo.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo }
  ]
});

a.options.render = h => h(App);
a.options.router = router;

var vm = new a();
vm.$mount('#app');
console.log(vm.msg);

