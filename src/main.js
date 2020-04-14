import Vue from 'vue'
import App from './App.vue'
import { InlineSvgPlugin } from 'vue-inline-svg'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VScrollLock from 'v-scroll-lock'
import VueWindowSize from 'vue-window-size'

require('./assets/tailwind.css');

Vue.config.productionTip = false

Vue.use(InlineSvgPlugin)
Vue.use(vueSmoothScroll)
Vue.use(VScrollLock)
Vue.use(VueWindowSize, { delay: 100 })

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
