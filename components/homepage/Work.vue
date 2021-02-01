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
      <PortfolioList :posts="posts" data-server-rendered="true" />
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
}
</script>
