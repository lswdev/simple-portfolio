import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'enter',
      // meta: { CustomPointer: true},
      component: () => import('@/views/Enter.vue'),
    },{
      path: '/intro',
      name: 'intro',
      component: () => import('@/views/Intro.vue'),
    },{
      path: '/works',
      name: 'works',
      component: () => import('@/views/Works.vue'),
    },{
      path: '/resume',
      name: 'resume',
      component: () => import('@/views/Resume.vue'),
    },{
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
    },{
      path: '/',
      redirect: '/'
    },
  ]
});