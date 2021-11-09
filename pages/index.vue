<template>
  <div id="page-top">
    <!-- Navigation-->
    <NavBar />

    <!-- Masthead-->
    <header class="masthead">
      <div
        class="
          container
          px-4 px-lg-5
          d-flex
          h-100
          align-items-center
          justify-content-center
        "
      >
        <div class="d-flex justify-content-center">
          <div class="text-center">
            <h1 class="mx-auto my-0 text-uppercase">Herman Dardon</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5">
              Front-end Web Developer.
            </h2>
            <SocialLinks></SocialLinks>
          </div>
        </div>
      </div>
    </header>
    <!-- About-->
    <section id="about" class="about-section text-center">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8">
            <h2 class="text-white mb-4">
              Building with JavaScript, CSS, & HTML
            </h2>
            <p class="text-white-50">
              As self-taught Developer from Reno, Nevada. I focus on building
              accessible, interactive user interfaces, sites and web apps.
              Striving to become an adaptible Developer by honing my skills with
              the core web languages.
            </p>
          </div>
        </div>
        <!-- <img class="img-fluid" src="../assets/images/ipad.png" alt="..." /> -->
      </div>
    </section>
    <!-- Projects-->
    <section id="projects" class="projects-section bg-light">
      <AppProjects></AppProjects>
    </section>
    <!-- Signup-->
    <section id="signup" class="signup-section">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5">
          <div class="col-md-10 col-lg-8 mx-auto text-center">
            <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 class="text-white mb-5">Contact Me!</h2>
            <AppForm></AppForm>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact-->
    <section class="contact-section bg-black">
      <div class="container px-4 px-lg-5">
        <SocialLinks></SocialLinks>
      </div>
    </section>
    <!-- Footer-->
    <footer class="footer bg-black small text-center text-white-50">
      <div class="container px-4 px-lg-5">
        Copyright &copy; Herman Dardon 2021
      </div>
    </footer>
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
