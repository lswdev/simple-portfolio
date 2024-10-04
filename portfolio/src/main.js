import Vue from 'vue'

import { router } from '@/routes/routes'

// CSS
import '@/assets/css/app.css'

// jQuery
global.jQuery = require('jquery');
const $ = global.jQuery;
window.$ = $;

import App from './App.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
