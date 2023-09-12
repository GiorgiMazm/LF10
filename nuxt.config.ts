// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src",
  serverDir: "server/",
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./translations/i18n.config.ts",
  },
  //@ts-ignore
  buildModules: ["@nuxt/typescript-build"],
  // @ts-ignore
  runtimeConfig: {
    dbUrl: process.env.DB_URL,
  },
});
