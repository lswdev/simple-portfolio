<template>
  <div id="app">
    <div class="cursor-custom" v-if="$route.name==='enter'"></div>
    <div v-if="$route.name==='enter'" id="enter">
      <router-view ></router-view>
    </div>
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
    </div>
  </div>
</template>

<script>

export default {
  components: {  }, //, Intro, Resume
  data: () => ({
  }),
}
</script>
