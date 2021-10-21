<template>
  <div>
    <h1>TEST</h1>
    <button class="py-24 px-32 bg-primary-100 hover:bg-primary-200">
      Test Button
    </button>
    <input type="button" value="TEST BTN" />
    <input id="test-email" type="email" name="email" placeholder="TEST EMAIL" />
    <input
      id="test-input"
      type="text"
      name="text-input"
      placeholder="TEST INPUT"
    />
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
