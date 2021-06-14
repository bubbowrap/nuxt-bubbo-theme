---
title: NuxtJS Portfolio Theme
description: Personal website portfolio built with NuxtJS.
category: Design, Development
role: Design, Front-end Development, Back-end Development
link: https://jeremysamuel.dev
thumbnail: nuxt-theme/nuxt-theme-thumb.jpg
slides: ['nuxt-theme/nuxt-theme-mobile-ss.jpg', 'nuxt-theme/nuxt-theme-hp.jpg']
alt: NuxtJS Portfolio Theme Screenshot
client: Personal Project
tools: Sketch, VSCode, NuxtJS, SCSS, Markdown, Netlify
tags: NuxtJS, SCSS
order: 1
active: true
---

## Project Details

The last iteration of my portfolio site lived on Wordpress and was built with Timber/Twig/ACF, and while that worked out perfectly for my needs, it was also a bit bloated with unneccesary Wordpress junk and still used jQuery to do a few things, knocking down my Lighthouse scores and making the site load a little bit slower. I could've lived with all that, but *then* my long-time webhost Sitegrounds almost doubled their prices without so much as an e-mail and autorenewed my plan and well...needless to say, I wasn't very happy about that. It gave me *just* enough righteous anger and motivation to completely rebuild my portfolio as a much more secure static site with Nuxt!

I considered integrating a CMS, however since I was the only one who'd be updating the site and even then only every few months or so, I ultimately decided to just use markdown files to make any changes that I needed. I also went back and removed all instances of jQuery from my code, either converting what existed to plain javascript or finding a better way to do what I needed which helped a lot with the Lighthouse scores (All 100s baby!).

This site was designed in Sketch and built with **NuxtJS**/custom SASS (CSS Grid) to build out the UI. I deployed the site with **Netlify**, which means that I'm paying 0 dollars a year to host my now much lighter site rather than the 200ish I was hit with in 2020. In some ways I'm glad that it happened because Nuxt is a lot of fun and I'm really looking forward to building out some things with it in the future!