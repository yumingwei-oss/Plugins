/*
 * @Date: 2020-09-11 11:56:18
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-09-11 12:02:16
 * @FilePath: \components\src\utils\index.js
 */
import tool from '@/utils/toolFunction/tool'

export default {
    install(Vue) {
        Vue.$tool = Vue.prototype.$tool = tool
    }
}