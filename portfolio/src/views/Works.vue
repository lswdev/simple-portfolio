
<template>
  <div id="work-page">
    <div class="page-contain">
      <div class="item-contain" style="padding-top: 4rem">
        <div class="item-title item-grid"> Works </div>
        <div class="works-grid">
          <div>
            asdfasdf
          </div>
          <div>
            asdfasdf
          </div>
          <div>
            asdfasdf
          </div>
          <div>
            asdfasdf
          </div>
        </div>
        <button type="button" @click="showModal">모달 토글</button>
      </div>
      <!--<figure>
        <img src="" alt="">
        <figcaption>이미지 캡션</figcaption>
      </figure>-->
    </div>

    <Modal @modalClose="closeModal" @modalAction="actionModal"
           :modal-title="modalTitle" :modal-desc="modalDesc"
           :action-btn="actionBtn" :close-btn="closeBtn"
           :class="{'show': modalToggle}"
    >
      <!--  슬롯 구조 추가  -->
      <div class="work-modal">
        <div>
          모달 body 부분
        </div>
      </div>
    </Modal>
    <Footer></Footer>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import Footer from '@/views/Footer.vue';
export default {
  components: { Modal, Footer },
  data:() => ({
    modalTitle: 'Works',
    modalDesc: '프로젝트 관련 정보 제공',
    actionBtn: '확인',
    closeBtn: '취소',
    modalToggle: false,
    workList: [
      { workId: 'educate_9', period: '2024.05.17 - 2024.05.24', workTitle: '웹 애니메이션의 새로운 표준, Web Animations API', workComp: '인프런' },
      { workId: 'educate_8', period: '2024.05.12 - 2024.07.07', workTitle: 'Vue.js 시작하기 - Age of Vue.js', workComp: '인프런' },
      { workId: 'educate_7', period: '2024.04.24 - 2024.07.09', workTitle: 'Vue.js 끝장내기 - 실무에 필요한 모든 것', workComp: '인프런' },
      { workId: 'educate_6', period: '2024.03.11 ~ 2024.03.15', workTitle: 'Kubernetes 운영과 활용', workComp: 'ktds' },
      { workId: 'educate_5', period: '2024.02.15 ~ 2024.04.23', workTitle: 'Vue.js 완벽 가이드 - 실습과 리팩토링으로 배우는 실전 개념', workComp: '인프런' },
      { workId: 'educate_4', period: '2023.11.20 ~ 2024.01.08', workTitle: '프론트엔드 개발자를 위한 웹팩', workComp: '인프런' },
      { workId: 'educate_3', period: '2023.08.10 ~ 2023.11.16', workTitle: 'Vue.js 중급 강좌 - 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex', workComp: '인프런' },
      { workId: 'educate_2', period: '2022.03.12 ~ 2022.04.10', workTitle: '자바(JAVA)프로그래밍 입문', workComp: '더조은아이티아카데미학원' },
      { workId: 'educate_1', period: '2022.01.09 ~ 2022.02.03', workTitle: '누구든지 하는 리액트: 초심자를 위한 react 핵심 강좌', workComp: '인프런' },
      { workId: 'educate_0', period: '2021.02.22 ~ 2021.08.25', workTitle: '스마트웹&콘텐츠 개발 웹퍼블리셔 프론트엔드 개발 디지털 실무 양성과정', workComp: '그린컴퓨터아트학원' },
    ],
  }),
  methods: {
    showModal() {
      this.modalToggle = !this.modalToggle;
    },
    actionModal({event}) {
      console.log(event);
      this.modalToggle = false;
    },
    closeModal({event}) {
      console.log(event);
      this.modalToggle = false;
    },
  }
}
</script>