<template>
  <button
    class="button is-primary"
    :class="isClicked ? 'is-loading' : ''"
    @click="click"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "LoadingButton",
  props: {
    loadTimeout: {
      type: Number,
      default: 2000,
    },
  },
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    click() {
      this.isClicked = true;
      setTimeout(() => {
        this.isClicked = false;
      }, this.loadTimeout);
      this.$emit("click");
    },
  },
};
</script>