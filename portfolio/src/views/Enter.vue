<template>
  <div class="enter-view">
    <div class="ring" @mouseenter="pointerHideAnimation" @mouseleave="pointerShowAnimation">
      <i style="--clr:#27fd01;"></i>
      <i style="--clr:#ff0057;"></i>
      <i style="--clr:#fffd44;"></i>
      <div class="custom-area" style="z-index: 100">
        <h2 class="my-name">Lee Siwoo</h2>
        <div class="inputBx input-intro">
          <button id="intro-submit-btn" @click="introDetail">확인하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { newPointerAnimation, inputAnimation } from '@/mixins/mixins';
import { reactive } from "vue";

export default {
  data: () => ({
    browserInfo: reactive({
      platform: '',
      userInfo: '',
    }),
    deviceInfo: '',
  }),
  created() {
    window.$('#enter').fadeIn(200);
  },
  methods: {
    // Mobile device 확인
    isMobile() {
      const info = navigator.userAgent;
      let flag = false;

      if( info.indexOf("iPhone") > -1
          || info.indexOf("Android") > -1
          || info.indexOf("iPad") > -1
          || info.indexOf("iPod") > -1
      ) { flag = true; }
      this.deviceInfo = flag;
    },
    pointerHideAnimation() {
      window.$('.cursor').fadeOut(200);
    },
    pointerShowAnimation() {
      window.$('.cursor').fadeIn(200);
    },
    introDetail() {
      window.$('#enter').fadeOut(200);
      setTimeout(this.changePage,300);
    },
    changePage() {
      this.$router.push('/intro');
    },
    checkBrowser() {
      this.browserInfo.platform = navigator.platform;
      this.browserInfo.userInfo = navigator.userAgent;
    },
  },
  mounted() {
    newPointerAnimation();
    inputAnimation();
    this.checkBrowser();
    this.isMobile();
  },
}
</script>

<style scoped>
  * {
    user-select: none;
  }
</style>