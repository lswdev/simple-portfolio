
<template>
  <div id="work-page">
    Works Page
    <Modal @modalClose="closeModal" @modalAction="actionModal"
           :modal-title="modalTitle" :modal-desc="modalDesc"
           :action-btn="actionBtn" :close-btn="closeBtn"
    ></Modal>
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
  }),
  methods: {
    actionModal({event}) {
      console.log('Action 버튼 클릭');
      console.log(event);
    },
    closeModal({event}) {
      console.log('닫기 버튼 클릭');
      console.log(event);
    },
  }
}
</script>