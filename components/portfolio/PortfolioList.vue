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

  // async asyncData() {
  // async function asyncImport (blogName) {
  //   const wholeMD = await import(`~/content/${app.i18n.locale}/blog/${blogName}.md`)
  //   return wholeMD.attributes
  // }
  // },
}
</script>

<style lang="sass" scoped></style>
