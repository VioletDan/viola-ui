import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import _ from "lodash";
import "./static/css/common.css";

//未发布前
import ViolaUI from "./index";
Vue.use(ViolaUI);

//npm使用下
// import VioladanUI from 'violadan-ui'
// Vue.use(VioladanUI)

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
