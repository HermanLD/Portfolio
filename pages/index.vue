<template>
  <h1>{{ home.title }}</h1>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const home = await $content('about').fetch()

    return { home }
  },
}
</script>
