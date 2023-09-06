// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src",
  serverDir: "server/",
  modules: ["@nuxtjs/tailwindcss"],
  //@ts-ignore
  buildModules: ["@nuxt/typescript-build"],
  // @ts-ignore
  runtimeConfig: {
    dbUrl: process.env.DB_URL,
  },
});
