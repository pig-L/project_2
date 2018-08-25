import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Mint from 'mint-ui';
import App from './App.vue'
import './assets/css/cssreset.css'
import './assets/css/iconfont.css'
import 'mint-ui/lib/style.css'

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.prototype.$axios = axios;
Vue.use(VueRouter);
Vue.use(Mint);
import router from './js/router.js'
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
