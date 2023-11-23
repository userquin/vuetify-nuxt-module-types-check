<script setup lang="ts">
const xxx = useNuxtApp().$vuetify
console.log(xxx)
</script>
<template>
  <v-app>
    <pre>{{ $vuetify.theme }}</pre>
  </v-app>
</template>
