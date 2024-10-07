<template>
  <div id="app">
    <div class="cursor-custom" v-if="$route.name==='enter'"></div>
    <div>
      <div id="enter">
        <Enter @page-changed="handlePageChange"></Enter>
      </div>

      <div class="common-page">
        <Intro></Intro>
        <Works></Works>
        <Resume></Resume>
      </div>

    </div>
  </div>
</template>

<script>
import Enter from '@/views/Enter.vue';
import Intro from '@/views/Intro.vue';
import Works from '@/views/Works.vue';
import Resume from '@/views/Resume.vue';

export default {
  components: { Enter, Intro, Works, Resume },
  data: () => ({
    page: 0,
  }),
  mounted() {
    window.addEventListener('wheel', this.handleWheel, { passive: false });
  },
  beforeDestroy() {
    window.removeEventListener('wheel', this.handleWheel);
  },
  methods: {
    handleWheel(e) {
      e.preventDefault();
      const wrap = document.getElementsByClassName('common-page')[0];
      const container = wrap.children;
      const lastPage = container.length;

      if (e.deltaY > 0) {
        this.page++;
      } else if (e.deltaY < 0) {
        this.page--;
      }

      if (this.page < 0) {
        this.page = 0;
      } else if (this.page > lastPage) {
        this.page = lastPage;
      }

      wrap.style.top = this.page * -100 + 'vh';
    },
    handlePageChange() {
      this.page++;
      const wrap = document.getElementsByClassName('common-page')[0];
      wrap.style.top = this.page * -100 + 'vh';
    },
  },
}
</script>
