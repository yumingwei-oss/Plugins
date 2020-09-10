/*
 * @Date: 2020-09-10 20:40:53
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-09-10 20:42:10
 * @FilePath: \components\src\Plugins\index.js
 */
import audio from '@/Plugins/audioPlugin/audio'

export default {
    install(Vue) {
        Vue.component(audio.name, audio)
    }
}