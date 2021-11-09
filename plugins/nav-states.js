/*!
 * Start Bootstrap - Grayscale v7.0.4 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
//
const navScript = function () {
  const mainNav = document.body.querySelector('#mainNav')
  const navbarToggler = document.body.querySelector('.navbar-toggler')
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  )
  // Navbar shrink function
  const navbarShrink = function () {
    if (!mainNav) return

    if (window.scrollY === 0) {
      mainNav.classList.remove('navbar-shrink')
    } else {
      mainNav.classList.add('navbar-shrink')
    }
  }

  // Shrink the navbar
  navbarShrink()

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink)

  // Activate Bootstrap scrollspy on the main nav element
  if (mainNav) {
    /* eslint-disable */
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    })
    /* eslint-enable */
  }

  // Collapse responsive navbar when toggler is visible
  /* eslint-disable */
  responsiveNavItems.map((responsiveNavItem) => {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click()
      }
    })
  })
  /* eslint-enable */
}

export default ({ app }, inject) => {
  inject('bsnavscript', navScript)
}
