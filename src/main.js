import Vue from 'vue'
import App from './App.vue'
import _   from 'lodash'

//未发布前
import ViolaUI from './index'
Vue.use(ViolaUI)

//npm使用下
// import VioladanUI from 'violadan-ui'
// Vue.use(VioladanUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
