<template>
  <div>
    <Header />
    <div class="overlay"></div>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss"></style>
