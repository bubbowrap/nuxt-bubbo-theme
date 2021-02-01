<template>
  <div class="portfolio">
    <ul class="portfolio__list">
      <PortfolioBlock
        v-for="post in featuredPosts"
        :key="post.attributes.title"
        :post="post"
      />
    </ul>
    <div v-if="showMoreBtn" class="portfolio__button-container">
      <a href="javascript:void(0)" class="btn btn--resume" @click="showMore"
        >More Projects +</a
      >
    </div>
  </div>
</template>

<script>
import PortfolioBlock from '@/components/portfolio/PortfolioBlock.vue'

export default {
  components: {
    PortfolioBlock,
  },
  // eslint-disable-next-line
  props: ['posts'],
  data() {
    return {
      allPosts: [],
      featuredPosts: [],
      postLimit: 6,
      showMoreBtn: null,
    }
  },
  created() {
    this.allPosts = this.posts
    this.featuredPosts = this.posts.slice(0, this.postLimit)
    // shows more button depending on number of posts
    this.showMoreBtn = this.postLimit < this.posts.length
  },
  methods: {
    showMore(e) {
      e.preventDefault()
      this.featuredPosts = this.allPosts
      this.showMoreBtn = false
    },
  },
}
</script>
