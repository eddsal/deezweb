import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'



Vue.use(Router)
import Home from '@/components/Home'
import Favorite from '@/components/Favorite'


const router = new Router({
  routes: [
    { name:'home' ,path: '/', component: Home },
    { name:'List' ,path: '/list', component:Favorite }

  ]
})



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
