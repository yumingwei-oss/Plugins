<!--
 * @Date: 2020-09-10 11:36:33
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-09-11 12:52:33
 * @FilePath: \components\src\App.vue
-->
<template>
  <div id="app">
    <div class="bg">
      <div class="container">
        <div class="row">
          <audio-plugin class="col-md-6 col-md-offset-4"></audio-plugin>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // MyAudio: () => import("@/components/audioPlay/audio.vue"),
  },
};
</script>

<style lang='less' scoped>
@import url("~@/assets/styles/color.less");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  .bg {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(
      to bottom right,
      @lightJada,
      @greenYellow
    );
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    .container {
      min-width: 400px;
    }
  }
}
</style>
