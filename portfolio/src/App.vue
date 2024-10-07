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
        <div style="width: 100%; height: 100vh; border: 2px solid red; box-sizing: border-box;"></div>
        <div style="width: 100%; height: 100vh; border: 2px solid green; box-sizing: border-box;"></div>
        <div style="width: 100%; height: 100vh; border: 2px solid greenyellow; box-sizing: border-box;"></div>
      </div>

    </div>
  </div>
</template>

<script>
import Enter from '@/views/Enter.vue';

export default {
  components: { Enter },
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
