<template>
  <div id="app">
    <div class="cursor-custom"></div>
    <div>
      <div id="enter">
        <Enter></Enter><!-- @page-slide="handlePageSlide"-->
      </div>

      <div class="common-page">
        <Intro></Intro>
        <Educate></Educate>
        <Works></Works>
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
    // startY: 0,
    isScreenSmall: false,
  }),
  mounted() {
    // this.checkScreenWidth(); // 처음 로딩 시 화면 크기 확인
    window.addEventListener('resize', this.checkScreenWidth); // 창 크기 변경 시 이벤트 리스너 추가
    if (!this.isScreenSmall) {
      // window.addEventListener('wheel', this.handleWheel, {passive: false});
      // window.addEventListener('touchstart', this.handleTouchStart, {passive: false});
      // window.addEventListener('touchmove', this.handleTouchMove, {passive: false});
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenWidth);

    if (!this.isScreenSmall) {
      // window.removeEventListener('wheel', this.handleWheel);
      // window.removeEventListener('touchstart', this.handleTouchStart);
      // window.removeEventListener('touchmove', this.handleTouchMove);
    }
  },
  methods: {
    // checkScreenWidth() {
      // 화면 크기를 확인하고 1000px 미만일 때 일반 스크롤로 전환
      // this.isScreenSmall = window.innerWidth < 1000;

      // 화면 크기가 1000px 이상일 때만 페이지 단위 스크롤 이벤트 적용
      // if (this.isScreenSmall) {
      //   window.removeEventListener('wheel', this.handleWheel);
      //   window.removeEventListener('touchstart', this.handleTouchStart);
      //   window.removeEventListener('touchmove', this.handleTouchMove);
      // } else {
      //   window.addEventListener('wheel', this.handleWheel, { passive: false });
      //   window.addEventListener('touchstart', this.handleTouchStart, { passive: false });
      //   window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
      // }
    // },
    // handleWheel(e) {
    //   e.preventDefault();
    //   if (this.isScreenSmall) return; // 작은 화면에서는 일반 스크롤로 동작
    //
    //   const wrap = document.getElementsByClassName('common-page')[0];
    //   const container = wrap.children;
    //   const lastPage = container.length;
    //
    //   if (e.deltaY > 0) {
    //     this.page++;
    //   } else if (e.deltaY < 0) {
    //     this.page--;
    //   }
    //
    //   if (this.page < 0) {
    //     this.page = 0;
    //   } else if (this.page > lastPage) {
    //     this.page = lastPage;
    //   }
    //
    //   this.page = Math.max(0, Math.min(this.page, lastPage));
    //
    //   wrap.style.top = this.page * -100 + 'vh';
    // },
    // handleTouchStart(e) {
    //   if (this.isScreenSmall) return; // 작은 화면에서는 일반 스크롤로 동작
    //   this.startY = e.touches[0].clientY;
    // },
    // handleTouchMove(e) {
    //   if (this.isScreenSmall) return; // 작은 화면에서는 일반 스크롤로 동작
    //
    //   const wrap = document.getElementsByClassName('common-page')[0];
    //   const moveY = e.touches[0].clientY - this.startY;
    //
    //   if (moveY > 180) {
    //     this.page = Math.max(0, this.page - 1);
    //     this.startY = e.touches[0].clientY;
    //   } else if (moveY < -180) {
    //     this.page = Math.min(this.page + 1, wrap.children.length);
    //     this.startY = e.touches[0].clientY;
    //   }
    //
    //   wrap.style.top = this.page * -100 + 'vh';
    // },
    // handlePageSlide() {
    //   if (this.isScreenSmall) return; // 작은 화면에서는 일반 스크롤로 동작
    //   this.page++;
    //   const wrap = document.getElementsByClassName('common-page')[0];
    //   wrap.style.top = this.page * -100 + 'vh';
    // },
  },
}
</script>
