// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './utils/filters'
import eventBus from './utils/eventBus'
import './utils/_polyfill'
// swiper 插件
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

if (!Vue.prototype.eventBus) {
  Vue.prototype.eventBus = eventBus
}

// 添加全局过滤器
Object.keys(filters).forEach(function (key, index, arr) {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
