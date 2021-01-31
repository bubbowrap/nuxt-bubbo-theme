// ------------------------------------------
// 	 AOS
// ------------------------------------------
AOS.init({
  once: true,
  duration: 1200,
})

// ------------------------------------------
// 	 Scroll Jump To
// ------------------------------------------

const hamburger = document.querySelector('.hamburger')
const overlay = document.querySelector('.overlay')

function closeMenu() {
  hamburger.classList.toggle('is-active')
  document.querySelector('body').classList.toggle('no-scroll')
  document.querySelector('.navigation-mobile').classList.toggle('is-active')
  overlay.classList.toggle('is-active')
}

// scrollTo for homepage

document
  .querySelector('.navigation-mobile__list')
  .addEventListener('click', function (e) {
    if (e.target.classList.contains('navigation-mobile__link')) {
      closeMenu()
    }
  })

// ------------------------------------------
// 	 Mobile Menu
// ------------------------------------------

// toggles active states of overlay/hamburger menu/menu
hamburger.addEventListener('click', closeMenu)
overlay.addEventListener('click', closeMenu)

// ------------------------------------------
// 	 Sticky Header
// ------------------------------------------

// sticky header, shows on scroll up hides on scroll down
let c
let currentScrollTop = 0
const navbar = document.querySelector('.site-header')

document.addEventListener('scroll', function () {
  const a =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  const b = navbar.offsetHeight

  currentScrollTop = a
  // adjust navbar height on scroll
  if (a >= 50) {
    navbar.classList.add('is-active')
  } else {
    navbar.classList.remove('is-active')
  }
  if (c + 5 < currentScrollTop && a > b + b) {
    navbar.classList.add('is-hidden')
  } else if (c > currentScrollTop && !(a <= b)) {
    navbar.classList.remove('is-hidden')
  }
  c = currentScrollTop
})
