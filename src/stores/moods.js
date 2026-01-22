import { defineStore } from "pinia"

export const useMoodStore = defineStore("moods", {
  state: () => ({
    moodEntries: [],
    possibleMoods: ["Fericit", "Stresat", "Obosit", "Calm", "Anxios"],
    isLoading: false
  }),

  getters: {
    totalEntries: (state) => state.moodEntries.length,

    hasEntryToday: (state) => {
      const today = new Date().toLocaleDateString()
      return state.moodEntries.some((entry) => entry.date === today)
    },

    happyMoodsOnly: (state) => state.moodEntries.filter((m) => m.type === "Fericit")
  },

  actions: {
    addMood(moodType, note = "") {
      const newEntry = {
        id: Date.now(),
        type: moodType,
        note: note,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      }
      this.moodEntries.unshift(newEntry)
    },

    deleteMood(id) {
      this.moodEntries = this.moodEntries.filter((entry) => entry.id !== id)
    },

    clearHistory() {
      // eslint-disable-next-line no-alert
      if (confirm("Sigur vrei să ștergi tot istoricul?")) {
        this.moodEntries = []
      }
    }
  }
})
