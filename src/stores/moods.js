import { defineStore } from "pinia"

export const useMoodStore = defineStore("moods", {
  // 1. STATE - Aici ținem datele
  state: () => ({
    moodEntries: [], // Lista în care salvăm obiectele cu stări
    possibleMoods: ["Fericit", "Stresat", "Obosit", "Calm", "Anxios"],
    isLoading: false
  }),

  // 2. GETTERS - Logica de calcul (avem nevoie de 10 în total pe proiect)
  getters: {
    // Calculează numărul total de intrări
    totalEntries: (state) => state.moodEntries.length,

    // Verifică dacă utilizatorul a adăugat ceva azi
    hasEntryToday: (state) => {
      const today = new Date().toLocaleDateString()
      return state.moodEntries.some((entry) => entry.date === today)
    },

    // Returnează doar intrările "Fericite" (pentru statistici)
    happyMoodsOnly: (state) => state.moodEntries.filter((m) => m.type === "Fericit")
  },

  // 3. ACTIONS - Funcțiile care modifică datele (avem nevoie de 10 în total)
  actions: {
    // Adaugă o stare nouă
    addMood(moodType, note = "") {
      const newEntry = {
        id: Date.now(),
        type: moodType,
        note: note,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      }
      this.moodEntries.unshift(newEntry) // Punem cea mai nouă intrare prima
    },

    // Șterge o intrare după ID
    deleteMood(id) {
      this.moodEntries = this.moodEntries.filter((entry) => entry.id !== id)
    },

    // Resetează tot istoricul
    clearHistory() {
      // eslint-disable-next-line no-alert
      if (confirm("Sigur vrei să ștergi tot istoricul?")) {
        this.moodEntries = []
      }
    }
  }
})
