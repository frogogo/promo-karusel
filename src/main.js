import Vue from 'vue'
import App from './App.vue'
import { InlineSvgPlugin } from 'vue-inline-svg'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueWindowSize from 'vue-window-size'
import { VueHammer } from 'vue2-hammer'

require('./assets/tailwind.css');

Vue.config.productionTip = false

Vue.use(InlineSvgPlugin)
Vue.use(vueSmoothScroll)
Vue.use(VueWindowSize, { delay: 100 })
Vue.use(VueHammer)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
