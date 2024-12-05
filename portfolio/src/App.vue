<template>
  <div id="app">
    <div class="cursor-custom"></div>
    <div class="float-nav">
      <ul>
        <li v-for="(item, index) in navList" :key="index" @click="floatNavClick(index)">{{ item }}</li>
      </ul>
    </div>
    <div>
      <div id="enter" ref="enterPage">
        <Enter @page-slide="handlePageSlide"></Enter>
      </div>

      <div class="common-page">
        <Intro ref="introPage"></Intro>
        <Educate ref="educatePage"></Educate>
        <Works ref="workPage"></Works>
      </div>
    </div>
  </div>
</template>

<script>
import Enter from '@/views/Enter.vue';
import Intro from '@/views/Intro.vue';
import Works from '@/views/Works.vue';
import Educate from '@/views/Educate.vue';

export default {
  components: { Enter, Intro, Works, Educate },
  data: () => ({
    page: 0,
    isScreenSmall: false,
    navList: ['Enter', 'Intro', 'Educates', 'Works'],
  }),
  methods: {
    handlePageSlide() {
      if (this.$refs.introPage && this.$refs.introPage.$el) {
        this.$refs.introPage.$el.scrollIntoView({ behavior: "smooth" });
      } else if (this.$refs.introPage && this.$refs.introPage.scrollIntoView) {
        this.$refs.introPage.scrollIntoView({ behavior: "smooth" });
      }
    },
    floatNavClick(index) {
      const viewRefs = [this.$refs.enterPage, this.$refs.introPage, this.$refs.educatePage, this.$refs.workPage];
      const target = viewRefs[index];

      if (target && target.$el) {
        target.$el.scrollIntoView({ behavior: "smooth" });
      } else if (target && target.scrollIntoView) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
}
</script>
