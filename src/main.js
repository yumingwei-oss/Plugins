/*
 * @Date: 2020-09-10 11:36:33
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-09-10 20:43:03
 * @FilePath: \components\src\main.js
 */
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import plugin from '@/Plugins/index.js'

Vue.config.productionTip = false
Vue.use(plugin);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
