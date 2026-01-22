import { defineStore } from "pinia"

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    darkMode: false,
    fontSize: 16,
    language: "ro",
    notificationsEnabled: true
  }),

  getters: {
    currentTheme: (state) => (state.darkMode ? "Dark Mode" : "Light Mode"),
    isLargeFont: (state) => state.fontSize > 20
  },

  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
    setLanguage(lang) {
      this.language = lang
    },
    updateFontSize(size) {
      this.fontSize = size
    }
  }
})
