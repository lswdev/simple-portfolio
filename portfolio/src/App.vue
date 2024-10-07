<template>
  <div id="app">
    <div class="cursor-custom" v-if="$route.name==='enter'"></div>
    <div>
      <div id="enter">
        <template v-if="$route.name==='enter'">
          <Enter></Enter>
        </template>
        <!--
          이 아래 쪽으로 스와이프 될 예정.
          그 후, 버튼을 눌러 컴포넌트 화면 전환
        -->
      </div>
      <div class="common-page">
        <div style="width: 100%; height: 100vh; border: 2px solid red; box-sizing: border-box;"></div>
        <div style="width: 100%; height: 100vh; border: 2px solid red; box-sizing: border-box;"></div>
        <div style="width: 100%; height: 100vh; border: 2px solid red; box-sizing: border-box;"></div>
      </div>



      <!--
      <div v-else-if="$route.name!=='enter'" id="main-grid">
        <section>
          <h1>Lee Siwoo</h1>
          <p class="simple-text">
            A multidisciplinary designer with over ten years of proficiency. Specialized in crafting a new type of interaction, systemic design, UX framework. Enjoying prototyping with SwiftUI.
          </p>
          <p class="simple-text">
            Currently UX Lead / Manager for Google Lens and Based in San Francisco, CA.
          </p>
          <router-view></router-view>
        </section>
      </div>-->
    </div>
  </div>
</template>

<script>
import Enter from '@/views/Enter.vue';

export default {
  components: { Enter }, //, Intro, Resume
  data: () => ({
    page: 0, // 현재 페이지 인덱스
  }),
  mounted() {
    // 휠 이벤트 리스너 추가
    window.addEventListener('wheel', this.handleWheel, { passive: false });
  },
  beforeDestroy() {
    // 휠 이벤트 리스너 제거
    window.removeEventListener('wheel', this.handleWheel);
  },
  methods: {
    handleWheel(e) {
      e.preventDefault();
      const wrap = document.getElementsByClassName('common-page')[0]; // 보일 영역
      const container = wrap.children; // 페이지 컨테이너
      const lastPage = container.length; // 마지막 페이지

      if (e.deltaY > 0) {
        this.page++;
      } else if (e.deltaY < 0) {
        this.page--;
      }

      // 페이지 인덱스 범위 조정
      if (this.page < 0) {
        this.page = 0;
      } else if (this.page > lastPage) {
        this.page = lastPage;
      }

      // 페이지 전환 시 스타일 조정
      wrap.style.top = this.page * -100 + 'vh';
    },
  },
}
</script>
<style>
.common-page {
  position: relative; /* 변경 */
  top: 0; /* 초기 위치 설정 */
  width: 100%;
  height: 100vh; /* 전체 높이 설정 */
  transition: top 0.5s; /* 부드러운 전환 효과 */
}
</style>
