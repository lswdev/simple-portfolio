<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Enter msg="시우의 개발페이지"/>
  </div>
</template>

<script>
import Enter from '@/views/Enter.vue'
// import Intro from '@/views/Intro.vue'
// import Resume from '@/views/Resume.vue'

export default {
  components: { Enter }, //, Intro, Resume
  data: () => ({

  }),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
