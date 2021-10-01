<template>
  <div>
    <h1>{{ home.title }}</h1>
    <button class="app-button">TEST</button>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const home = await $content('about').fetch()

    return { home }
  },
}
</script>
