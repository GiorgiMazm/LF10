// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src",
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  //@ts-ignore
  buildModules: ["@nuxt/typescript-build"],
})
