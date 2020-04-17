import Vue from 'vue'
import App from './App.vue'
import { InlineSvgPlugin } from 'vue-inline-svg'
import vueSmoothScroll from 'vue2-smooth-scroll'
import { VLazyImagePlugin } from 'v-lazy-image'

require('./assets/tailwind.css');

Vue.config.productionTip = false

Vue.use(InlineSvgPlugin)
Vue.use(VLazyImagePlugin)
Vue.use(vueSmoothScroll)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
