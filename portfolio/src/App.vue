<template>
  <div id="app">
    <div class="cursor-custom" v-if="$route.name==='enter'"></div>
    <div>
      <div id="enter">
        <template v-if="$route.name==='enter'">
          <Enter @page-changed="handlePageChange"></Enter>
        </template>
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
    startY: 0,
  }),
  mounted() {
    window.addEventListener('wheel', this.handleWheel, { passive: false });
    window.addEventListener('touchstart', this.handleTouchStart, { passive: false });
    window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
  },
  beforeDestroy() {
    window.removeEventListener('wheel', this.handleWheel);
    window.removeEventListener('touchstart', this.handleTouchStart);
    window.removeEventListener('touchmove', this.handleTouchMove);
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

      // const pointer = document.querySelector('.cursor-custom');
      // if (this.page !== 0) {
      //   pointer.style.zIndex = 1000;
      // } else {
      //   pointer.style.zIndex = 0;
      // }

      this.page = Math.max(0, Math.min(this.page, lastPage));

      wrap.style.top = this.page * -100 + 'vh';
    },
    handleTouchStart(e) {
      this.startY = e.touches[0].clientY;
    },
    handleTouchMove(e) {
      const wrap = document.getElementsByClassName('common-page')[0];
      const moveY = e.touches[0].clientY - this.startY;

      if (moveY > 180) {
        this.page = Math.max(0, this.page - 1);
        this.startY = e.touches[0].clientY;
      } else if (moveY < -180) {
        this.page = Math.min(this.page + 1, wrap.children.length);
        this.startY = e.touches[0].clientY;
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
