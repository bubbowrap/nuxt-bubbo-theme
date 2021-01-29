<template>
  <div
    class="project-specs aos-init"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="200"
  >
    <div class="project-specs__item">
      <h4 class="project-specs__title">Role</h4>
      <p class="project-specs__content">{{ postAttributes.role }}</p>
    </div>
    <div class="project-specs__item">
      <h4 class="project-specs__title">Client</h4>
      <p class="project-specs__content">
        {{ postAttributes.client }}
      </p>
    </div>
    <div class="project-specs__item">
      <h4 class="project-specs__title">Tools</h4>
      <p class="project-specs__content">{{ postAttributes.tools }}</p>
    </div>
    <div class="project-specs__item">
      <h4 class="project-specs__title">Development</h4>
      <p class="project-specs__content">
        {{ postAttributes.tags }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postAttributes: {
      type: Object,
      default: () => 'N/A',
    },
  },
}
</script>
