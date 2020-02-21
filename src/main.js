import Vue from 'vue'
import App from './App.vue'
import ViolaUI from './index'

Vue.use(ViolaUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
