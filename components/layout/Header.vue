<template>
  <header class="site-header">
    <a href="/" class="site-header__logo" data-aos="fade-in"
      ><img
        onerror="@/assets/img/jsamuel-logo.png"
        src="@/assets/img/jsamuel-logo.svg"
        alt="Jeremy Samuel - Front-end Designer"
        scale="0"
    /></a>

    <nav role="navigation" data-aos="fade-in" data-aos-delay="0">
      <div class="navigation">
        <ul class="navigation__list">
          <li
            v-for="(value, name, index) in menuItems"
            :key="index"
            class="navigation__list-item"
          >
            <a
              :href="
                $route.path === '/' ? (value = value) : (value = `/${value}`)
              "
              class="navigation__link"
            >
              {{ name }}
            </a>
          </li>
        </ul>
        <a :href="`/${resumeLink}`" class="btn btn--resume">Resume</a>
      </div>
    </nav>
    <MobileMenu :menu-items="menuItems" :resume-link="resumeLink" />
    <Hamburger />
  </header>
</template>

<script>
import MobileMenu from '@/components/mobile/MobileMenu.vue'
import Hamburger from '@/components/mobile/Hamburger.vue'

export default {
  components: {
    MobileMenu,
    Hamburger,
  },

  data() {
    return {
      menuItems: {
        Work: '#work',
        Experience: '#experience',
        About: '#about',
        Contact: '#contact',
      },
      resumeLink: 'pdf/jeremysamuel-resume2020.pdf',
    }
  },
}
</script>

<style lang="scss"></style>
