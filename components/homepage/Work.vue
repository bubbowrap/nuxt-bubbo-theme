<template>
  <section
    id="work"
    data-aos="fade-up"
    data-aos-offset="100"
    data-aos-delay="400"
    tabindex="-1"
  >
    <div class="work container hp-grid">
      <h2>Work</h2>
      <PortfolioList
        :posts="featuredPosts"
        :show-more-btn="showMoreBtn"
        @clicked="showMore"
      />
    </div>
  </section>
</template>

<script>
import PortfolioList from '@/components/portfolio/PortfolioList'

export default {
  components: {
    PortfolioList,
  },
  // eslint-disable-next-line
  props: ['posts'],
  data() {
    return {
      featuredPosts: [],
      postLimit: 6,
      showMoreBtn: true,
    }
  },
  created() {
    this.featuredPosts =
      this.posts.length === this.postLimit
        ? this.posts
        : this.posts.slice(0, this.postLimit)
    // shows more button depending on number of posts
    this.showMoreBtn = this.postLimit < this.posts.length
  },
  methods: {
    showMore() {
      this.$nuxt.refresh()
      this.featuredPosts = this.posts
    },
  },
}
</script>
