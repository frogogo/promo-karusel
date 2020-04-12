import Vue from 'vue'
import App from './App.vue'
import { InlineSvgPlugin } from 'vue-inline-svg'

require('./assets/tailwind.css');

Vue.config.productionTip = false

Vue.use(InlineSvgPlugin)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
