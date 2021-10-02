<template>
  <header class="header">
    <p class="header-logo">H</p>

    <nav>
      <ul class="header-nav-links">
        <li>
          <nuxt-link to="/">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/work">Work</nuxt-link>
        </li>
      </ul>
    </nav>

    <ul class="header-social-links">
      <li class="item">
        <a href="#0">LINKEDIN</a>
      </li>
      <li class="item">
        <a href="#0">GITHUB</a>
      </li>
    </ul>
  </header>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-nav-links {
  display: flex;
  background-color: dodgerblue;
}

.header-social-links {
  display: var(--nav-link-display, none);
}

@media screen and (min-width: 750px) {
  .header-social-links {
    --nav-link-display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-social-links > .item:not(:last-of-type) {
    margin-right: var(--space-1);
  }
}
</style>
