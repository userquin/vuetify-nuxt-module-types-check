<script setup lang="ts">
const vuetify = useNuxtApp().$vuetify
console.log(vuetify)
useNuxtApp().hook('vuetify:configuration', ({ isDev }) => {})
useNuxtApp().hook('vuetify:before-create', ({ vuetifyOptions }) => {})
</script>
<template>
  <v-app>
    <pre>{{ $vuetify.theme }}</pre>
  </v-app>
</template>
