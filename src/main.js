import Vue from 'vue'
import App from './App.vue'
import { InlineSvgPlugin } from 'vue-inline-svg'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VScrollLock from 'v-scroll-lock'

require('./assets/tailwind.css');

Vue.config.productionTip = false

Vue.use(InlineSvgPlugin)
Vue.use(vueSmoothScroll)
Vue.use(VScrollLock)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
