import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.use(Router)
import Home from '@/components/Home'
import Favorite from '@/components/Favorite'
import Search from '@/components/Search'



const router = new Router({
  routes: [
    { name:'home' ,path: '/', component: Home },
    { name:'Favorite' ,path: '/Favorite', component:Favorite },
    { name:'Search' ,path: '/Search', component:Search }


  ]
})



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
