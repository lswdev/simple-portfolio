
<template>
  <div>
    <!--  버튼 예시
      - var : primary / secondary / warning / success / danger
      - size : sm / md / lg
    -->
    <button type="button"
            var="primary"
            size="md"
            @click="modalAction">
      {{ actionBtn }}
    </button>
    <!--  모달 예시
      - modal-title : 모달의 제목
      - modal-desc : 모달에 대한 설명
      - action-btn : 확인 버튼 텍스트
      - close-btn : 취소 버튼 텍스트
    -->
    <Modal @modalClose="closeModal"
           @modalAction="actionModal"
           :modal-title="modalTitle"
           :modal-desc="modalDesc"
           :action-btn="actionBtn"
           :close-btn="closeBtn">
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
export default {
  components: { Modal },
  data:() => ({
    modalTitle: '모달의 제목을 입력합니다.',
    modalDesc: '모달의 설명을 입력합니다.',
    actionBtn: '확인 버튼에 표시할 텍스트를 입력합니다.',
    closeBtn: '취소 버튼에 표시할 텍스트를 입력합니다.',
  }),
  methods: {
    actionModal({event}) {   // Modal 에서 this.$emit 으로 넘겨준 이벤트 처리
      console.log(this.actionBtn + "버튼 클릭");
      console.log(event);
    },
    closeModal() {
      console.log(this.closeBtn + "버튼 클릭");
    },
  }
}
</script>