import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
require('dotenv').config()

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
