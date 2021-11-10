<template>
  <div class="container px-4 px-lg-5">
    <!-- Featured Project Row-->
    <!-- TODO: SETUP LOOP -->
    <div
      v-for="project in projects"
      :key="project.slug"
      class="row gx-0 mb-4 mb-lg-5 align-items-center"
    >
      <div class="col-xl-8 col-lg-7">
        <img
          class="img-fluid mb-3 mb-lg-0"
          :src="project.image"
          alt="Project image"
        />
      </div>
      <div class="col-xl-4 col-lg-5">
        <div class="featured-text text-center text-lg-left">
          <h4>{{ project.title }}</h4>
          <p class="text-black-50 mb-4">
            {{ project.description }}
          </p>
          <button class="btn btn-secondary" :href="project.site">SITE</button>
          <button class="btn btn-outline-secondary" :href="project.repository">
            CODE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
