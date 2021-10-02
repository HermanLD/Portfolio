<template>
  <div>
    <h1 class="about-name">
      {{ home.title }}
      <span class="about-title">{{ home.job_title }}</span>
    </h1>
    <p class="about-sub-text">{{ home.description }}</p>

    <!-- BUTTON to PORTFOLIO CODE -->
    <AppButton :href="home.portfolio_url" btn-link="true"
      >Portfolio Code</AppButton
    >
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
