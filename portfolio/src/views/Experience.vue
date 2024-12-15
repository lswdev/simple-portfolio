
<template>
  <div id="exp-page">
    <div class="page-contain">
      <div class="item-contain">
        <div class="item-title item-grid"> Experience </div>
        <div>
          <div class="exp-grid">
            <div class="exp-card" v-for="(exp, index) in expList" @click="showModal(exp)" :key="index">
              <div class="card-img" :class="[`bg-${exp.bgColor}`]">
                <img :src="exp.expImgUrl" :alt="`${exp.expComp} 로고`" style="max-height: 45px;" :class="{'mix-mode' : exp.bgMix}">
              </div>
              <ul class="card-content">
                <li>{{ exp.expTitle }} <span style="font-size: 14px; color: #626f86">- {{ exp.expComp }}</span></li>
                <li>{{ exp.expDesc }}</li>
                <li>{{ exp.expDt }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--<figure>
        <img src="" alt="">
        <figcaption>이미지 캡션</figcaption>
      </figure>-->
    </div>

    <Modal @modalClose="closeModal" @modalAction="actionModal"
           :modal-title="modalTitle" :modal-desc="modalDesc"
           :action-btn="actionBtn" :close-btn="closeBtn"
           :class="{'show': modalToggle}" >
      <!--  슬롯 구조 추가  -->
      <div class="exp-modal">
        <div class="exp-slide">
          <span v-for="(item, index) in expContentImages" :key="index">
            <img :src="item" alt="프로젝트 이미지">
          </span>
        </div>
        <div v-html="modalContent"></div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import { experiences } from "@/myInfo";

export default {
  components: { Modal },
  data:() => ({
    modalTitle: 'Experience',
    modalDesc: '프로젝트 관련 정보 제공',
    modalContent: '',
    actionBtn: '확인',
    closeBtn: '',
    modalToggle: false,
    expList: experiences,
    expContentImages: [],
  }),
  methods: {
    showModal(exp) {
      this.modalTitle = exp.expTitle;
      this.modalDesc = exp.expDesc;
      this.modalContent = exp.expContent;
      this.expContentImages = exp.ContentImgUrl;
      // this.modalToggle = !this.modalToggle;
    },
    actionModal() {
      this.modalToggle = false;
    },
    closeModal() {
      this.modalToggle = false;
    },
  }
}
</script>