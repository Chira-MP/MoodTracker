import { defineStore } from "pinia"

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isAuthenticated: false,
    loginDate: null
  }),

  getters: {
    // Getter 11: Numele afișat al utilizatorului
    displayName: (state) => (state.user ? state.user.name : "Vizitator"),

    // Getter 12: Verifică dacă utilizatorul este admin (exemplu)
    isAdmin: (state) => state.user?.role === "admin"
  },

  actions: {
    // Action 11: Logare
    login(name) {
      this.user = { name: name, role: "user" }
      this.isAuthenticated = true
      this.loginDate = new Date().toLocaleString()
    },

    // Action 12: Delogare
    logout() {
      // eslint-disable-next-line no-alert
      if (confirm("Sigur vrei să te deloghezi?")) {
        this.user = null
        this.isAuthenticated = false
      }
    }
  }
})
