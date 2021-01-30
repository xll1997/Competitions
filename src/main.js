import Vue from "vue";
import Antd from 'ant-design-vue';
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入echarts
import * as echarts from 'echarts';

import 'ant-design-vue/dist/antd.css';
import '../src/assets/css/base.css'
import './assets/font/iconFont/iconfont.css'
import './assets/font/font.css'

import Tool from './assets/js/Tool'

Vue.config.productionTip = false;

Vue.prototype.$Tool = Tool
Vue.prototype.$echarts = echarts

Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");