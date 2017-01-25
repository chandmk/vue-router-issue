import Foo from './Foo.vue'
import Bar from './Bar.vue'

const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
  ]
});

new Vue({
  router,
}).$mount('#app')
