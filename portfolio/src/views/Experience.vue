
<template>
  <div id="exp-page">
    <div class="page-contain">
      <div class="item-contain">
        <div class="item-title item-grid"> Experience </div>
        <div>
          <div class="exp-grid">
            <div class="exp-card">
              <div class="card-img">
                <img src="" alt="">
              </div>
              <ul class="card-content">
                <li>KDDX</li>
                <li>내용 추가할 내용 추가할 내용 추가할 내용 추가할 내용 추가할 내용</li>
                <li>2022.03 - 2022.04</li>
                <li>
                  <button type="button" @click="showModal">모달 토글</button>
                </li>
              </ul>
            </div>

            <div class="exp-card">
              <div class="card-img">
                <img src="" alt="">
              </div>
              <ul class="card-content">
                <li>KDDX</li>
                <li>내용 추가할 내용 추가할 내용 추가할 내용 추가할 내용 추가할 내용</li>
                <li>2022.03 - 2022.04</li>
                <li>
                  <button type="button" @click="showModal">모달 토글</button>
                </li>
              </ul>
            </div>

            <div class="exp-card">
              <div class="card-img">
                <img src="" alt="">
              </div>
              <ul class="card-content">
                <li>KDDX</li>
                <li>내용 추가할 내용 추가할 내용 추가할 내용 추가할 내용 추가할 내용</li>
                <li>2022.03 - 2022.04</li>
                <li>
                  <button type="button" @click="showModal">모달 토글</button>
                </li>
              </ul>
            </div>

            <div class="exp-card">
              <div class="card-img">
                <img src="" alt="">
              </div>
              <ul class="card-content">
                <li>KDDX</li>
                <li>내용 추가할 내용 추가할 내용 추가할 내용 추가할 내용 추가할 내용</li>
                <li>2022.03 - 2022.04</li>
                <li>
                  <button type="button" @click="showModal">모달 토글</button>
                </li>
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
           :class="{'show': modalToggle}"
    >
      <!--  슬롯 구조 추가  -->
      <div class="exp-modal">
        <div>
          모달 body 부분
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import { expriences } from "@/myInfo";

export default {
  components: { Modal },
  data:() => ({
    modalTitle: 'Experience',
    modalDesc: '프로젝트 관련 정보 제공',
    actionBtn: '확인',
    closeBtn: '취소',
    modalToggle: false,
    expList: expriences,
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