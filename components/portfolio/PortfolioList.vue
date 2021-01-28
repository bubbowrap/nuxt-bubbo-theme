<template>
  <div class="portfolio">
    <ul class="portfolio__list">
      <PortfolioBlock />
    </ul>
  </div>
</template>

<script>
import PortfolioBlock from '@/components/portfolio/PortfolioBlock.vue'

export default {
  components: {
    PortfolioBlock,
  },
}
</script>

<style lang="sass" scoped></style>
