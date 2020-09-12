/*
 * @Date: 2020-09-11 11:57:10
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-09-11 12:00:59
 * @FilePath: \components\src\utils\toolFunction\tool.js
 */
function throlle(fn, waith = 1000) {
    let time = 0;
    return function (...args) {
        let nowTime = +new Date();
        if (nowTime - time > waith) {
            time = nowTime
            fn.call(this, ...args)
        }
    }
}

export default {
    throlle
}