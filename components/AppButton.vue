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

<style>
.app-button {
  --font-sizing: 1.8rem;
  padding: var(--space-2) var(--space-4);
  background-color: var(--clr-primary-1);
  color: var(--clr-gray-3);
  font-size: var(--font-sizing);
  font-weight: var(--fw-bold);
}
.app-button:hover,
.app-button:active {
  background-color: var(--clr-primary-2);
}
</style>
