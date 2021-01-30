import { Context, Inject } from '@nuxt/types/app'

export default (ctx: Context, inject: Inject) => {
  const apolloClient = ctx.app.apolloProvider.defaultClient

  inject('apollo', apolloClient)
}
