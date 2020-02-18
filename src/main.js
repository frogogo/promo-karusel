import Vue from 'vue'
import App from './App.vue'
import SmoothScroll from 'smooth-scroll'

require('./assets/tailwind.css');

Vue.config.productionTip = false

SmoothScroll('.smooth-scroll', { speed: 700 })

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
