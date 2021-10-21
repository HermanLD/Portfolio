<template>
  <div class="app-wrap">
    <AppNav />
    <Nuxt />
  </div>
</template>

<script>
export default {
  head: {
    htmlAttrs: {
      class: 'base-sizing',
    },
    bodyAttrs: {
      class: 'base-font',
    },
  },
}
</script>
