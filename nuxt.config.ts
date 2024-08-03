// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    `nuxt-vuefire`,
    '@nuxtjs/tailwindcss',
  ],

  vuefire: {
    auth: {
      enabled: true,
      sessionCookie: true,
    },
    config: {
      apiKey: "AIzaSyAJ9Xu5HokhED_QYVXRK0H2GDOFxBSWQaE",
      authDomain: "goldplus-6668a.firebaseapp.com",
      projectId: "goldplus-6668a",
      storageBucket: "goldplus-6668a.appspot.com",
      messagingSenderId: "704536930243",
      appId: "1:704536930243:web:625591e87166102e167f76",
      measurementId: "G-M0H2W4KNW0"
    },
  },
})
