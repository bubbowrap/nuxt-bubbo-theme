<template>
  <div class="portfolio">
    <ul class="portfolio__list">
      <PortfolioBlock
        v-for="post in posts"
        :key="post.attributes.title"
        :post="post"
      />
    </ul>
    <div v-if="showMoreBtn" class="portfolio__button-container">
      <a href="#" class="btn btn--resume" @click="showMore">More Projects +</a>
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
  props: ['posts', 'showMoreBtn'],
  methods: {
    showMore(e) {
      e.preventDefault()
      this.$emit('clicked')
      this.$nextTick(() => {
        document
          .querySelector('.portfolio__button-container')
          .classList.add('is-hidden')
      })
    },
  },
}
</script>

<style lang="sass" scoped></style>
