<template>
  <div id="app">
    <div class="cursor-custom" v-if="$route.name==='enter'"></div>
    <div>
      <div id="enter">
        <template v-if="$route.name==='enter'">
          <router-view></router-view>
        </template>
        <!--
          이 아래 쪽으로 스와이프 될 예정.
          그 후, 버튼을 눌러 컴포넌트 화면 전환
        -->
      </div>
      <div class="common-page">
        <div style="width: 100%; height: 200vh; border: 2px solid red; box-sizing: border-box;"></div>
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

export default {
  // components: {}, //, Intro, Resume
  data: () => ({
  }),
}
</script>
