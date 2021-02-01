<template>
  <main class="site-main c-single-portfolio" role="main">
    <section
      class="hero hero--portfolio aos-init"
      data-aos="fade-up"
      data-aos-offset="200"
    >
      <div class="hero__block container">
        <div>
          <h1 class="hero__title">{{ post.attributes.title }}</h1>
          <p class="hero__category">{{ post.attributes.category }}</p>
        </div>
        <template v-if="post.attributes.link">
          <div>
            <a
              :href="post.attributes.link"
              class="btn btn--line"
              target="_blank"
              rel="noopener"
            >
              View Project
            </a>
          </div>
        </template>
      </div>
    </section>

    <section
      class="project-shots aos-init"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="100"
    >
      <flickity ref="flickity" class="flickity" :options="flickityOptions">
        <div v-for="(slide, i) in sliderImages" :key="i" class="carousel-cell">
          <img
            :src="placeholder"
            :data-flickity-lazyload-src="slide"
            :alt="post.attributes.alt"
            loading="lazy"
          />
        </div>
      </flickity>
    </section>

    <section
      class="project-info container aos-init"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <!-- eslint-disable vue/no-v-html -->
      <div class="project-details" v-html="post.html"></div>
      <ProjectSpecs :post-attributes="post.attributes" />
    </section>
    <section
      class="page-nav aos-init"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="100"
    >
      <NuxtLink to="/#work" class="btn btn--line">Back to Portfolio</NuxtLink>
    </section>
  </main>
</template>

<script>
import ProjectSpecs from '@/components/portfolio/ProjectSpecs'

export default {
  components: { ProjectSpecs },
  async asyncData({ params }) {
    try {
      const post = await import(`@/content/portfolio/${params.slug}.md`)
      return {
        post,
      }
    } catch (error) {
      return false
    }
  },
  computed: {
    flickityOptions() {
      return {
        wrapAround: true,
        imagesLoaded: true,
        contain: true,
        accessibility: true,
        lazyLoad: true,
      }
    },
    sliderImages() {
      return this.post.attributes.slides.map((slide) =>
        require(`@/content/portfolio/images/${slide}`)
      )
    },
    placeholder() {
      return require(`@/static/images/placeholder.png`)
    },
  },
  head() {
    return {
      title: `${this.post.attributes.title} | Jeremy Samuel | Front-end Designer`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.post.attributes.description}`,
        },
      ],
    }
  },
}
</script>

<style>
flickity {
  display: block;
}
</style>
