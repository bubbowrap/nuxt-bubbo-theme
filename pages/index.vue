<template>
  <main class="site-main c-homepage" role="main">
    <Hero />
    <Work />
    <Experience />
    <About />
    <Contact />
  </main>
</template>

<script>
import Hero from '@/components/homepage/Hero'
import Work from '@/components/homepage/Work'
import Experience from '@/components/homepage/Experience'
import About from '@/components/homepage/About'
import Contact from '@/components/homepage/Contact'

export default {
  components: {
    Hero,
    Work,
    Experience,
    About,
    Contact,
  },
}
</script>

<style lang="scss"></style>
