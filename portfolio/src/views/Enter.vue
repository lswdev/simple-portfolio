<template>
  <div class="enter-view">
    <div class="ring" @mouseenter="pointerHideAnimation" @mouseleave="pointerShowAnimation">
      <i style="--clr:#27fd01;"></i>
      <i style="--clr:#ff0057;"></i>
      <i style="--clr:#fffd44;"></i>
      <div class="custom-area" style="z-index: 100">
        <h2 class="my-name">
          Lee Siwoo
          <div style="font-size: 0.875rem;">Front-end</div>
        </h2>
        <div class="inputBx input-intro">
          <button id="intro-submit-btn" @click="changePage">확인하기</button>
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
  methods: {
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
    changePage() {
      // this.$router.push('/intro');
      const commonPage = document.getElementsByClassName('common-page')[0];
      commonPage.style.top = -100 + 'vh';

      this.$emit('page-changed');
    },
    checkBrowser() {
      this.browserInfo.platform = navigator.platform;
      this.browserInfo.userInfo = navigator.userAgent;
    },
  },
  mounted() {
    this.pointerAnimation = newPointerAnimation();
    inputAnimation();
    this.checkBrowser();
    this.isMobile();
  },
  beforeDestroy() {
    this.pointerAnimation.destroy();
  }
}
</script>

<style scoped>
  * { user-select: none; }
</style>