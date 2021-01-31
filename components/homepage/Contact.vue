<template>
  <section
    id="contact"
    class="contact container hp-grid"
    data-aos="fade-up"
    data-aos-offset="200"
    tabindex="-1"
  >
    <h2>Contact</h2>
    <div>
      <p>
        Check out my
        <a href="https://www.codepen.io/bubbowrap">Codepen</a> and
        <a href="https://www.github.com/bubbowrap">Github</a> to see what I’m
        working on, or my
        <a href="https://www.twitter.com/bubbowrap">Twitter</a> to see what I’m
        up to. I’m always down to chat about code (or heck, just life in
        general), so send me an email and I’ll do my very best to get back to
        you!
      </p>
      <a :href="`mailto:${$store.state.emailAddress}`" class="btn btn--line"
        >Message Me</a
      >
    </div>
  </section>
</template>
