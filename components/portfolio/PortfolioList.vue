<template>
  <div class="portfolio">
    <ul class="portfolio__list">
      <PortfolioBlock
        v-for="post in posts"
        :key="post.attributes.title"
        :post="post"
      />
    </ul>
  </div>
</template>

<script>
import PortfolioBlock from '@/components/portfolio/PortfolioBlock.vue'

export default {
  components: {
    PortfolioBlock,
  },
  // eslint-disable-next-line
  props: ['posts']
}
</script>

<style lang="sass" scoped></style>
