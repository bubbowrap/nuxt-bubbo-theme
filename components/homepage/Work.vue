<template>
  <section
    id="work"
    class="work container hp-grid aos-init"
    data-aos="fade-up"
    data-aos-offset="100"
    data-aos-delay="400"
  >
    <h2>Work</h2>
    <PortfolioList />
  </section>
</template>

<script>
import PortfolioList from '@/components/portfolio/PortfolioList'

export default {
  components: {
    PortfolioList,
  },
}
</script>
