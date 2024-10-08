
<template>
  <div id="work-page">
    <button type="button" @click="showModal">모달 토글</button>
    <div>
      <figure>
        <img src="" alt="">
        <figcaption>이미지 캡션</figcaption>
      </figure>
    </div>

    <Modal @modalClose="closeModal" @modalAction="actionModal"
           :modal-title="modalTitle" :modal-desc="modalDesc"
           :action-btn="actionBtn" :close-btn="closeBtn"
           :class="{'show': modalToggle}"
    >
      <!--  슬롯 구조 추가  -->
      <div class="work-contain">
        <div>

        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
export default {
  components: { Modal },
  data:() => ({
    modalTitle: 'Works',
    modalDesc: '프로젝트 관련 정보 제공',
    actionBtn: '확인',
    closeBtn: '취소',
    modalToggle: false,
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