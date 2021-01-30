// ------------------------------------------
// 	 AOS
// ------------------------------------------
AOS.init({
  once: true,
  duration: 1200,
})

$(document).ready(function () {
  // ------------------------------------------
  // 	 Scroll Jump To
  // ------------------------------------------

  'use strict'

  function closeMenu() {
    document.querySelector('.hamburger').classList.toggle('is-active')
    document.querySelector('body').classList.toggle('no-scroll')
    document.querySelector('.navigation-mobile').classList.toggle('is-active')
    document.querySelector('.overlay').classList.toggle('is-active')
  }

  // scrollTo for homepage

  $('a[href^="#"]').on('click', function (e) {
    // Prevent the jump and the #hash from appearing on the address bar
    e.preventDefault()
    $(window)
      .stop(true)
      .scrollTo(this.hash, { duration: 700, interrupt: false })

    if ($('.navigation-mobile__link')) {
      closeMenu()
    }
  })

  // ------------------------------------------
  // 	 Mobile Menu
  // ------------------------------------------

  // toggles active states of overlay/hamburger menu/menu
  $('.hamburger, .overlay').on('click', function (e) {
    closeMenu()
    return false
  })

  // ------------------------------------------
  // 	 Sticky Header
  // ------------------------------------------

  // sticky header, shows on scroll up hides on scroll down
  let c
  let currentScrollTop = 0
  const navbar = $('.site-header')

  $(window).scroll(function () {
    const a = $(window).scrollTop()
    const b = navbar.height()

    currentScrollTop = a
    // adjust navbar height on scroll
    if (a >= 50) {
      navbar.addClass('is-active')
    } else {
      navbar.removeClass('is-active')
    }
    if (c + 5 < currentScrollTop && a > b + b) {
      navbar.addClass('is-hidden')
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass('is-hidden')
    }
    c = currentScrollTop
  })
})
