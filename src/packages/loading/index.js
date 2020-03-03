import LoadingUI from "./loading.vue";
//注册组件
LoadingUI.install = Vue => Vue.component(LoadingUI.name, LoadingUI);
export default LoadingUI;
