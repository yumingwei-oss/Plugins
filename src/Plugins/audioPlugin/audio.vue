<!--
 * @Date: 2020-09-10 11:40:41
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-09-11 00:23:11
 * @FilePath: \components\src\Plugins\audioPlugin\audio.vue
-->
<template>
  <div class="audio panel row" id="audio">
    <div class="play-pause-btn col-xs-1">
      <!-- <div class="glyphicon glyphicon-play"></div> -->
      <span class="glyphicon glyphicon-play"></span>
    </div>
    <div class="controls col-xs-9">
      <time class="currenttime time">2:11</time>
      <div class="audio-progress">
        <div class="progress-bar"></div>
      </div>
      <time class="alltime time">4:30</time>
    </div>
    <div class="volume col-xs-1">
      <span class="glyphicon glyphicon-volume-up"></span>
    </div>
  </div>
</template>

<script>
// import audio from "./index";
export default {
  name: "AudioPlugin",
  data() {
    return {
      audio: {
        paused: false,
        currentTime: "",
        duration: "",
        volume: 1,
      },
    };
  },
  methods: {
    init(audio) {
      audio.src = "static/audio/演员.mp3";
      audio.addEventListener("loadedmetadata", this.onloadedmetadata);
    },
    onloadedmetadata() {
      // this.audio.duration=
      console.log("success onload");
    },
  },
  mounted() {
    let audio = new Audio();
    this.init(audio);
  },
  destroyed() {},
};
</script>

<style lang="less" scoped>
@import url("~@/assets/styles/color.less");
.audio {
  width: 400px;
  height: 56px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    height: 46px;
    line-height: 46px;
    text-align: center;
    font-size: 2rem;
    padding: 0 5px;
  }
  .controls {
    display: flex;
    flex-grow: 1;
    padding-left: 10px;
    align-items: center;
    justify-content: center;
    .time {
      font-size: 1.7rem;
      flex-basis: 10%;
      padding: 0 5px;
    }
    .audio-progress {
      flex-grow: 1;
      height: 8px;
      background-color: @progressbg;
      border-radius: 9999px;
      .progress-bar {
        border-radius: 9999px;
        position: relative;
        width: 30%;
        &::after {
          display: block;
          content: " ";
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 100%;
          background-color: inherit;
          right: -8px;
          top: -4px;
          z-index: 2;
        }
      }
    }
  }
}
</style>