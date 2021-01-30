<template>
  <li class="portfolio-list-item">
    <figure>
      <a
        :href="`/portfolio/${post.attributes.title
          .toLowerCase()
          .replace(' ', '-')}`"
        class="portfolio-list-item__link"
      >
        <img
          :alt="post.attributes.title"
          :data-src="imgSrc"
          class="portfolio-list-item__img"
          :src="imgSrc"
          loading="lazy"
        />
        <figcaption class="portfolio-list-item__title">
          {{ post.attributes.title }}
          <span class="portfolio-list-item__tag">{{
            post.attributes.category.replace(', ', ' / ')
          }}</span>
        </figcaption>
      </a>
    </figure>
  </li>
</template>

<script>
export default {
  // eslint-disable-next-line
  props: ['post'],
  computed: {
    imgSrc(post) {
      return require(`~/content/portfolio/images/${this.post.attributes.thumbnail}`)
    },
  },
}
</script>

<style lang="sass" scoped></style>
