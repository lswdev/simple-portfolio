<template>
  <div id="app">
    <div class="cursor-custom"></div>
    <div class="float-nav" :class="{ hide: isNavToggle }">
      <div class="float-nav-line" @click="navToggle"></div>
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
        <Experience ref="expPage"></Experience>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Enter from '@/views/Enter.vue';
import Intro from '@/views/Intro.vue';
import Educate from '@/views/Educate.vue';
import Experience from '@/views/Experience.vue';
import Footer from "@/views/Footer.vue";

export default {
  components: {Footer, Enter, Intro, Educate, Experience },
  data: () => ({
    page: 0,
    isScreenSmall: false,
    isNavToggle: true,
    navList: ['Enter', 'Service', 'Education', 'Experience'],
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
      const viewRefs = [this.$refs.enterPage, this.$refs.introPage, this.$refs.educatePage, this.$refs.expPage];
      const target = viewRefs[index];

      if (target && target.$el) {
        target.$el.scrollIntoView({ behavior: "smooth" });
      } else if (target && target.scrollIntoView) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    navToggle() {
      this.isNavToggle = !this.isNavToggle;
    },
  },
}
</script>
