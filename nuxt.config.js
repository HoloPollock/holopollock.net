export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Quinn Pollocks',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Quinn Pollock's links on the Internet ",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary"

      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@holopollock"
      },
      {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "@holopollock"
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: "Quinn Pollock's Links",
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: "Quinn Pollock's links on the Internet",
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://d1fdloi71mui9q.cloudfront.net/fgmfFgR8OiNCVWLAskTA_fW0zTf3ZmiPgfEqp',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: "Quinn Pollock's links on the Internet",
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Quinn Pollock's Links",
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Quinn Pollock's links on the Internet",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://d1fdloi71mui9q.cloudfront.net/fgmfFgR8OiNCVWLAskTA_fW0zTf3ZmiPgfEqp',
      },
      { hid: 'og:url', property: 'og:url', content: 'https://holopollock.net' },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content:
          'https://d1fdloi71mui9q.cloudfront.net/fgmfFgR8OiNCVWLAskTA_fW0zTf3ZmiPgfEqp',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: "Quinn Pollock's Links",
      },
      {
        property: 'profile:username',
        content: 'holopollock',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://holopollock.net' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~layouts/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
