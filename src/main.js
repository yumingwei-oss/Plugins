/*
 * @Date: 2020-09-10 11:36:33
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-09-11 12:03:23
 * @FilePath: \components\src\main.js
 */
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import plugin from '@/Plugins/index.js'
import myutils from '@/utils/index.js'

Vue.config.productionTip = false
Vue.use(plugin);
Vue.use(myutils)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
