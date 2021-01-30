<template>
  <main class="site-main c-homepage" role="main">
    <Hero />
    <Work :posts="posts" />
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
  async asyncData() {
    const resolve = await require.context('~/content/', true, /\.md$/)
    const posts = await resolve.keys().map((key) => {
      return resolve(key)
    })
    return {
      posts: posts.sort((post) => post.attributes.order),
    }
  },
}
</script>
<style lang="scss"></style>
