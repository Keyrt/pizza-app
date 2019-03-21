import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import axios from 'axios'

import {store} from './store/store.js'

axios.defaults.baseURL = 'https://wd1143557859nooubx.wilddogio.com/'
// 配置Vue原型 (在任何组件中都可以正常使用axios)
Vue.prototype.http = axios

Vue.use(VueRouter)



const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
    // return {x:0, y:100}
    // return { selector: '.btn'}
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0, y:0}
    }
  }
})

// 全局守卫
// router.beforeEach((to, from, next) => {
//   alert("还没有登录，请先登录！");
//   next();
//   console.log(to);

    //判断store.getter.isLogin ===false
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alter("还没有登录，请先登录！");
//     next('/login');
//   }
  
// })

// 后置钩子
// router.afterEach((to,from) =>{
//   alert("after each");
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
