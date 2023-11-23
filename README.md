# Checking Vuetify Nuxt Module Augmentation

It seems there are some issues with the Vuetify Nuxt module augmentation when using VS Code or JetBrains IDE. Depending on the module resolution configured, the IDE will either not recognize the Vuetify module augmentation or it will not recognize the Vuetify module augmentation types.

Node16 will not be used, the way Nuxt [module-builder](https://github.com/nuxt/module-builder) generates the types seems to break the IDEs, here we are going to report only Node and Bundler problems.

This repo will check the behavior for configuration and custom configuration, module hooks, runtime hooks and Vuetify augmentation ($vuetify inside Vue SFC, and script setup and Nuxt Plugins via `useNuxtApp()`).

Running `pnpm nuxt prepare && vue.tsc --noEmit` works, there are no errors.

## Node (Node10)

### VS Code

- configuration

### IntelliJ Ultimate Edition

- Configuration (nuxt.config.ts): 
  - ❌ `vuetify` resolves to `module:nuxt/schema.NuxtConfig.vuetify?: Partial<O> | Record<string, any>`
  - ✔️ types are ok with `Ctrl + Mouse Over`
  - ❌ `Ctrl + Mouse Click` on any entry doesn't go to the definition
- Custom configuration (vuetify.config.ts):
  - ✔️ `defineVuetifyConfiguration` resolves, `Ctrl + Mouse Click` goes to the definition
  - ❌ `Ctrl + Mouse Click` on the import doesn't go to the definition
- Vue SFC template (app.vue): 
  - ❌ `$vuetify` doesn't resolve (it is red in the editor)
  - ❌ `Ctrl + Mouse Click` doesn't go to the definition
- Vue SFC script setup (app.vue): 
  - ✔️ `useNuxtApp().$` shows all module augmentations (provide/inject)
  - ✔️ `Ctrl + Mouse Over` on `useNuxtApp().$vuetify` shows type
  - ✔️ `Ctrl + Mouse Over` on the `vuetify` variable in `const vuetify = useNuxtApp().$vuetify` shows type
  - ❌ `Ctrl + Mouse Click` on `useNuxtApp().$vuetify` doesn't go to the definition
  - ❌ `Ctrl + Mouse Click` on the vuetify variable in `const vuetify = useNuxtApp().$vuetify` doesn't go to the definition
- Runtime Hooks (app.vue & plugins/vuetify.ts):
  - ✔️ `useNuxtApp().hook('` shows all runtime hooks (Vue SFC script setup and plugins)
  - ✔️ `useNuxtApp().hook` resolves parameter types
  - ✔️ `Ctrl + Mouse Over` on any `useNuxtApp().hook` parameter types shows definition
  - ❌ `Ctrl + Mouse Click` on `useNuxtApp().hook` hook name doesn't go to the definition
  - ❌ `Ctrl + Mouse Click` on any `useNuxtApp().hook` parameter types doesn't go to the definition
Module Hooks (modules/vuetify.ts):
  - ❌ `nuxt.hook('` doesn't show any Vuetify module hooks: `Vue: Argument of type "vuetify:registerModule" is not assignable to parameter of type HookKeys<NuxtHooks>`
  - ❌ `vuetify:registerModule` hook resolves parameter types to any: `Vue: Parameter registerModule implicitly has an any type, but a better type may be inferred from usage.`
  - ❌ `Ctrl + Mouse Over` on any `useNuxtApp().hook` parameter types shows definition
  - ❌ `Ctrl + Mouse Click` on `useNuxtApp().hook` hook name doesn't go to the definition
  - ❌ `Ctrl + Mouse Click` on any `useNuxtApp().hook` parameter types doesn't go to the definition

### IntelliJ Beta 3 (EAP)

## Bundler (extensionless)

### VS Code

### IntelliJ Ultimate Edition

### IntelliJ Beta 3 (EAP)
