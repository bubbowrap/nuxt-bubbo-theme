<template>
  <aside class="navigation-mobile">
    <ul class="navigation-mobile__list">
      <li
        v-for="(value, name, index) in menuItems"
        :key="index"
        class="navigation-mobile__list-item"
      >
        <a :href="value" class="navigation-mobile__link">{{ name }}</a>
      </li>
    </ul>
    <a :href="resumeLink" class="btn btn--resume">Resume</a>
  </aside>
</template>

<script>
export default {
  // eslint-disable-next-line
  props: ['menuItems', 'resumeLink'],
}
</script>
