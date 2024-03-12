// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/image",
    "@vee-validate/nuxt",
  ],
  css: ["~/assets/css/main.css"],

  googleFonts: {
    families: {
      Inter: [400, 700],
    },
  },
/* 
  site: {
    url: "https://example.at",
    name: "Example Title",
    description: "Example Description",
    defaultLocale: "se-SE",
  }, */
  devtools: { enabled: true },
  hooks: {
    // @ts-ignore:next-line
    "vite:extendConfig": (config, { isClient, isServer }) => {
      // @ts-ignore:next-line
      if (isClient) config.resolve.alias.vue = "vue/dist/vue.esm-bundler.js";
    },
  },
});
