// @ts-ignore
import type { Strapi4Error } from '@nuxtjs/strapi'
import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin((nuxt) => {
  nuxt.hooks.hook('strapi:error' as any, (e: Strapi4Error) => {
    nuxt.$toast.error({ title: e.error.name, description: e.error.message })
  })
})
