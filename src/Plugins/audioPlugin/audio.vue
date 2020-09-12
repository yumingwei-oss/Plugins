<!--
 * @Date: 2020-09-10 11:40:41
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-09-12 11:02:27
 * @FilePath: \components\src\Plugins\audioPlugin\audio.vue
-->
<template>
  <div class="audio panel row" id="audio">
    <div class="play-pause-btn col-xs-1">
      <!-- <div class="glyphicon glyphicon-play"></div> -->
      <span
        class="glyphicon glyphicon-play"
        @click="playOrpauseHandler"
      ></span>
    </div>
    <div class="controls col-xs-9">
      <time
        class="currenttime time"
      >{{audio.currentTime|formatSecond}}</time>
      <div class="audio-progress" @click="TimeUpdateHandler">
        <div class="progress-bar"></div>
      </div>
      <time class="alltime time">{{audio.duration|formatSecond}}</time>
    </div>
    <div class="volume col-xs-1">
      <span class="glyphicon glyphicon-volume-up"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AudioPlugin",
  data() {
    return {
      audio: {
        playing: false,
        currentTime: 0,
        duration: 0,
        volume: 1,
      },
    };
  },
  methods: {
    init(audio) {
      $(audio)
        .attr("src", "static/audio/演员.mp3")
        .prop("volume", this.audio.volume)
        .on("loadedmetadata", this.onloadedmetadata)
        .on("play", this.onPlay)
        .on("pause", this.onPause)
        .on("timeupdate", this.onTimeupdate)
        .appendTo("#audio");
    },
    onloadedmetadata() {
      this.audio.duration = parseInt($("#audio audio")[0].duration);
    },
    playOrpauseHandler(e) {
      let event = e || window.event;
      let target = event.target || event.srcElement;

      //toggle playing state
      target.classList.contains("glyphicon-play") ? this.play() : this.pause();
    },
    TimeUpdateHandler(e) {
      var eve = e || window.event;
      var target = eve.currentTarget || eve.srcElement;
      var sliderTime = eve.offsetX / target.offsetWidth;
      $("#audio audio")[0].currentTime = this.audio.duration * sliderTime;
      // console.log(eve.offsetX, target.offsetWidth, sliderTime);
      $("#audio audio")[0].play();
    },
    play() {
      $("#audio audio")[0].play();
    },
    pause() {
      $("#audio audio")[0].pause();
    },
    onPlay() {
      this.audio.playing = true;
      $(".play-pause-btn .glyphicon")[0].classList.replace(
        "glyphicon-play",
        "glyphicon-pause"
      );
    },
    onPause(e) {
      this.audio.playing = false;
      $(".play-pause-btn .glyphicon")[0].classList.replace(
        "glyphicon-pause",
        "glyphicon-play"
      );
    },
    onTimeupdate() {
      this.audio.currentTime = parseInt($("#audio audio")[0].currentTime);
      $(".progress-bar").css(
        "width",
        ((point) => {
          return Math.floor(Number(point) * 100).toString() + "%";
        })(this.audio.currentTime / this.audio.duration)
      );
    },
  },
  mounted() {
    this.init(new Audio());
  },
  filters: {
    formatSecond(second = 0) {
      var secondType = typeof second;

      if (secondType === "number" || secondType === "string") {
        second = parseInt(second);

        var mimute = Math.floor(second / 60);
        second = second - mimute * 60;

        return ("0" + mimute).slice(-2) + ":" + ("0" + second).slice(-2);
      } else {
        return "00:00";
      }
    },
  },
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
    .glyphicon {
      cursor: pointer;
    }
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
      height: 4px;
      background-color: @progressbg;
      border-radius: 9999px;
      cursor: pointer;
      padding: 0 5px;
      .progress-bar {
        border-radius: 9999px;
        position: relative;
        width: 0;
        transition: width 0.2s;
        &::after {
          display: block;
          content: " ";
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 100%;
          background-color: inherit;
          right: -8px;
          top: -6px;
          z-index: 2;
        }
      }
    }
  }
}
</style>