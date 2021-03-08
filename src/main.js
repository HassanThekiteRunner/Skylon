/*
 * @Author: your name
 * @Date: 2021-03-06 09:09:36
 * @LastEditTime: 2021-03-08 16:52:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\迷音\mussic\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//引入swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// import {shiying} from './http/yidong/yidong'



//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//引入转字符串
import qs from 'qs'
Vue.prototype.qs=qs;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // shiying,
 mounted(){
  //  shiying.fun();
  //  document.documentElement.style.fontSize=.16+'rem'
      this.$router.push('/Music/Recommend')
  
 },
  
  render: h => h(App)
}).$mount('#app')
