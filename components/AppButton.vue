<template>
  <a
    v-if="btnLink"
    target="_blank"
    style="display: inline-block"
    class="app-button"
  >
    <slot>Default link</slot>
  </a>
  <button v-else class="app-button">
    <slot>Default btn</slot>
  </button>
</template>

<script>
export default {
  props: {
    btnLink: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
