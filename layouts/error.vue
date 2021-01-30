<template>
  <div>
    <div class="overlay"></div>
    <main class="site-main c-404" role="main">
      <section
        class="hero aos-init"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
      >
        <div class="container">
          <template v-if="error.statusCode === 404">
            <h1>404</h1>
            <h2 class="sub">Sorry! There's nothing here.</h2>
            <p>
              If you were just trying to see what my 404 page looked like, well,
              here you go.
            </p>
          </template>
          <template v-else>
            <h1>{{ error.statusCode }}</h1>
            <h2 class="sub"></h2>
            <p>
              An error occurred. Who knows what happened here? Either way,
              yikes.
            </p>
          </template>
          <br />
          <NuxtLink to="/" class="btn btn--line">Back to Homepage</NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  props: ['error'],
  layout: 'error',
}
</script>
