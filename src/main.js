import Foo from './Foo.vue'

const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo },
  ]
});

new Vue({
  router,
}).$mount('#app')
