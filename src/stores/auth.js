import { defineStore } from "pinia"

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isAuthenticated: false,
    loginDate: null
  }),

  getters: {
    displayName: (state) => (state.user ? state.user.name : "Vizitator"),

    isAdmin: (state) => state.user?.role === "admin"
  },

  actions: {
    login(name) {
      this.user = { name: name, role: "user" }
      this.isAuthenticated = true
      this.loginDate = new Date().toLocaleString()
    },

    logout() {
      // eslint-disable-next-line no-alert
      if (confirm("Sigur vrei să te deloghezi?")) {
        this.user = null
        this.isAuthenticated = false
      }
    }
  }
})
