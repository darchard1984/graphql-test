import ApolloClient from 'apollo-client'
import '@nuxtjs/axios'
import '@nuxtjs/apollo'
// add type to Vue context
declare module 'vue/types/vue' {
  interface Vue {
    readonly $apollo: ApolloClient<any>
  }
}

// App Context and NuxtAppOptions
declare module '@nuxt/types' {
  interface Context {
    readonly $apollo: ApolloClient<any>
  }

  interface NuxtAppOptions {
    readonly $apollo: ApolloClient<any>
  }

  interface NuxtOptions {
    readonly $apollo?: ApolloClient<any>
  }
}

// add types for Vuex Store
declare module 'vuex/types' {
  interface Store<S> {
    readonly $apollo: ApolloClient<any>
  }
}
