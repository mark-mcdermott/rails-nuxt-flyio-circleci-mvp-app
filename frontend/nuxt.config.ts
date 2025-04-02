const isCI = process.env.CI === 'true'
const isDev = process.env.NODE_ENV !== 'production'

export default defineNuxtConfig({
  devServer: { port: 3001 },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils'
  ],

  runtimeConfig: {
    public: {
      apiBase: isCI
        ? 'http://backend:3000/api/v1'
        : isDev
          ? 'http://localhost:3000/api/v1'
          : 'https://app001-backend.fly.dev/api/v1'
    }
  },
});