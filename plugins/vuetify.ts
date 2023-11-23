import { ssrClientHintsConfiguration } from 'virtual:vuetify-ssr-client-hints-configuration'

export default defineNuxtPlugin((nuxt) => {
    if (process.client) {
        import('virtual:vuetify-ssr-client-hints-configuration').then(({
            ssrClientHintsConfiguration: x2
        }) => console.log('x2', x2))
        console.log('ssrClientHintsConfiguration', ssrClientHintsConfiguration)

    }
    nuxt.hook('vuetify:configuration', ({ isDev }) => {

    })
    nuxt.hook('vuetify:before-create', (vuetify) => {
    })
})
