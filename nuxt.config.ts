// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', 'vuetify-nuxt-module'],
  vuetify: {
    moduleOptions: {
      includeTransformAssetsUrls: {
        'v-card': [
          'image',
          'prepend-avatar',
          'append-avatar',
        ],
      },
    },
    // vuetifyOptions: {
    //   optionsPath: 'vuetify.config.ts',
    // }
  },
  experimental: {
    typescriptBundlerResolution: false,
  }
})
