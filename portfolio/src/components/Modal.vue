
<template>
  <div id="modal" role="dialog" :aria-labelledby="modalTitle" :aria-describedby="modalDesc">
    <div class="modal-container">
      <div class="modal-header">
        <div class="modal-title" v-text="modalTitle"></div>
        <button type="button" class="round-x" @click="modalClose"></button>
      </div>

      <div class="modal-body">
        <slot></slot>
      </div>

      <div class="modal-footer">
        <button type="button" var="primary" @click="modalAction">{{ actionBtn }}</button>
        <button type="button" var="danger" @click="modalClose">{{ closeBtn }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalTitle: String,
    modalDesc: String,
    actionBtn: String,
    closeBtn: String,
  },
  methods: {
    modalAction(event) {
      this.$emit('modalAction', {event});
    },
    modalClose(event) {
      this.$emit('modalClose', {event});
    },
  }
}
</script>