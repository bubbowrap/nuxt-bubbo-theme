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
              Visit Site
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
      <div class="main-carousel"></div>
    </section>

    <section
      class="project-info container aos-init"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="project-details">
        <h2 class="project-details__title">Project Details</h2>
        <p>
          ITPA is the volunteer organization created by and for the independent
          telecommunications industry. Dedicated to community service, ITPA has
          been serving the public on behalf of telecommunications companies
          since 1920.
        </p>
        <h3>The Problem</h3>
        <p>
          It was important for the site to be fast, engaging, easy to navigate,
          and easily managed by the client. Some of the biggest issues the
          client had with their previous site were:
        </p>
        <ul>
          <li>Very outdated design.</li>
          <li>Important information difficult to find.</li>
          <li>Very difficult to update.</li>
          <li>Not mobile responsive.</li>
        </ul>
        <h3>Initial Ideas/Style Concepts</h3>
        <p>
          One of the problems I had with ITPA is their color scheme. It was
          initially very difficult for me to figure out how to work with the
          bright yellow and baby clue. However, the organization has a long and
          rich history of leaders, so I decided to focus more on that antique
          feel and build upon that. I also wanted their most important sections
          to be easily visible and accessible as soon as the user visits the
          site. I sketched out a few different mobile and desktop low-fidelity
          wireframes quickly on paper, getting feedback from our internal team
          before starting on the design mockup in Photoshop.
        </p>
        <figure><img /></figure>
        <h3>Bringing It All Together</h3>
        <p>
          I developed the site on the Bootstrap framework using a mix of HTML5,
          CSS3, and JQuery and integrated it with Netsource’s SiteSource 3 CMS
          platform (built using ASP.net) which makes it very easy for the client
          to manage their website. I made sure that the design stayed consistent
          and easy to use on both mobile and tablet.
        </p>
        <h3>Final Thoughts</h3>
        <p>
          I’m very pleased with the outcome of this site, and more importantly
          the client loves the design.
        </p>
      </div>
      <div
        class="project-specs aos-init"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
      >
        <div class="project-specs__item">
          <h4 class="project-specs__title">Role</h4>
          <p class="project-specs__content">{{ post.attributes.role }}</p>
        </div>
        <div class="project-specs__item">
          <h4 class="project-specs__title">Client</h4>
          <p class="project-specs__content">
            {{ post.attributes.client }}
          </p>
        </div>
        <div class="project-specs__item">
          <h4 class="project-specs__title">Tools</h4>
          <p class="project-specs__content">{{ post.attributes.tools }}</p>
        </div>
        <div class="project-specs__item">
          <h4 class="project-specs__title">Development</h4>
          <p class="project-specs__content">
            {{ post.attributes.tags }}
          </p>
        </div>
      </div>
    </section>
    <section
      class="page-nav aos-init"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="100"
    >
      <a href="/#work" class="btn btn--line">Back to Portfolio</a>
    </section>
  </main>
</template>
<script>
export default {
  async asyncData({ params }) {
    try {
      const post = await import(`~/content/portfolio/${params.slug}.md`)
      return {
        post,
      }
    } catch (error) {
      return false
    }
  },
  computed: {
    imgSrc() {
      return require(`~/assets/img/portfolio/${this.post.attributes.thumbnail}`)
    },
  },
  head() {
    return {
      title: `${this.post.attributes.title} | Jeremy Samuel | Front-end Designer`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
      script: [
        {
          src: '/js/flickity.pkgd.min.js',
          type: 'text/javascript',
          body: true,
          defer: true,
        },
        {
          src: '/js/single-portfolio.js',
          type: 'text/javascript',
          body: true,
          defer: true,
        },
      ],
    }
  },
}
</script>
