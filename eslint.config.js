import pluginVue from 'eslint-plugin-vue'
import skipPrettier from 'eslint-config-prettier'

export default [
  // Regulile generale de JavaScript
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    rules: {
      "no-alert": "error",
      "no-unused-vars": "warn"
    }
  },
  // Integrarea cu Vue
  ...pluginVue.configs['flat/essential'].map(config => ({
    ...config,
    files: ["**/*.vue"]
  })),
  // Dezactivarea conflictelor cu Prettier
  skipPrettier,
  {
    rules: {
      "vue/multi-word-component-names": "off"
    }
  }
]