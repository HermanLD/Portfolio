<template>
  <div>
    <h1>TEST</h1>
    <button>Test Button</button>
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
