import { defineStore } from "pinia"

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    darkMode: false,
    fontSize: 16,
    language: "ro",
    notificationsEnabled: true
  }),

  getters: {
    // Getter 4: Returnează numele temei curente
    currentTheme: (state) => (state.darkMode ? "Dark Mode" : "Light Mode"),
    // Getter 5: Verifică dacă textul este setat pe "Mare"
    isLargeFont: (state) => state.fontSize > 20
  },

  actions: {
    // Action 4: Schimbă tema
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
    // Action 5: Schimbă limba
    setLanguage(lang) {
      this.language = lang
    },
    // Action 6: Ajustează fontul
    updateFontSize(size) {
      this.fontSize = size
    }
  }
})
