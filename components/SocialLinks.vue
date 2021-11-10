<template>
  <div class="social d-flex justify-content-center">
    <a class="mx-2" :href="links.linkedin_link"
      ><i class="fab fa-linkedin-in"></i
    ></a>
    <a class="mx-2" :href="links.github_link"><i class="fab fa-github"></i></a>
    <a class="mx-2" :href="links.codepen_link"
      ><i class="fab fa-codepen"></i
    ></a>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Object,
      default: () => ({
        linkedin_link: 'https://www.linkedin.com/in/herman-dardon',
        github_link: 'https://github.com/HermanLD',
        codepen_link: 'https://codepen.io/MFrink',
      }),
    },
  },
}
</script>
