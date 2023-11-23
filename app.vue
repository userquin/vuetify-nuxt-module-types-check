<script setup lang="ts">
import { ssrClientHintsConfiguration } from 'virtual:vuetify-ssr-client-hints-configuration'

const vuetify = useNuxtApp().$vuetify
if (process.client) {
  console.log(vuetify.theme)
  console.log('ssrClientHintsConfiguration script setup', ssrClientHintsConfiguration)
  import('virtual:vuetify-ssr-client-hints-configuration').then(({
    ssrClientHintsConfiguration: x2
  }) => console.log('x2 script setup', x2))
}
useNuxtApp().hook('vuetify:configuration', ({ isDev }) => {})
useNuxtApp().hook('vuetify:before-create', ({ vuetifyOptions }) => {})
</script>
<template>
  <v-app>
    <pre>{{ $vuetify.theme }}</pre>
  </v-app>
</template>
