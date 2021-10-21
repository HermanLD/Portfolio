<template>
  <div class="app-wrap">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Number,
      default: 200,
    },
  },
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
