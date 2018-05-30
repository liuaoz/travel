// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 移动端300ms延迟解决
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

/* 使用vuex实现数据共享 */
/* eslint-disable no-new */
/* 在es6中，键和值一样的情况，可以省略一部分 */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
