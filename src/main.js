// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import './theme/themeA/index.css'
import './assets/style/global.css'
import axios from 'axios' //引入axios
Vue.config.productionTip = false
Vue.use(ElementUI);
// 后端端口
var url = 'http://127.0.0.1:8088';
export default url;
const instance = axios.create({
  baseURL: url
})
Vue.prototype.$http = instance

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

