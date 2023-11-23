import { md3 } from 'vuetify/blueprints'
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
  ssr: {
    clientWidth: 100,
  },
  aliases: {
    MyBadge: 'VBadge',
  },
  directives: ['ClickOutside', 'Resize', 'Ripple'],
  components: ['VDialog', 'VExpansionPanel', 'VExpansionPanelText', 'VExpansionPanelTitle'],
  blueprint: md3,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
      },
      dark: {
        dark: true,
      },
    },
  },
  icons: {
    defaultSet: 'unocss-mdi',
  },
})
