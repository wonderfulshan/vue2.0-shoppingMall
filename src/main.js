// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import {currency} from './util/currency'

Vue.config.productionTip = false

Vue.filter("currency",currency);//全局过滤器

Vue.use(infiniteScroll)
Vue.use(Vuex)
Vue.use(VueLazyLoad,{
  loading:"/static/loading-svg/loading-bars.svg"//图片未加载出来时的动画效果//懒加载
})

const store = new Vuex.Store({
  state:{
    nickName:'',
    cartCount:0
  },
  mutations: {
    //更新用户信息
    updateUserInfo(state, nickName) {
      state.nickName = nickName;
    },
    updateCartCount(state,cartCount){
      state.cartCount += cartCount;
    },
    initCartCount(state,cartCount) {
      state.cartCount = cartCount;
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
