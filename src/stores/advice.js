import { defineStore } from "pinia"

export const useAdviceStore = defineStore("advice", {
  state: () => ({
    quotes: [
      { id: 1, text: "Fiecare zi este o nouă șansă.", author: "Anonim", category: "Motivațional" },
      {
        id: 2,
        text: "Respiră adânc. E doar o zi grea, nu o viață grea.",
        author: "Anonim",
        category: "Relaxare"
      },
      { id: 3, text: "Fericirea depinde de noi înșine.", author: "Aristotel", category: "Fericire" }
    ],
    favoriteQuotes: [],
    dailyAdviceVisible: true
  }),

  getters: {
    favoriteCount: (state) => state.favoriteQuotes.length,

    relaxationQuotes: (state) => state.quotes.filter((q) => q.category === "Relaxare")
  },

  actions: {
    addToFavorites(quote) {
      if (!this.favoriteQuotes.find((q) => q.id === quote.id)) {
        this.favoriteQuotes.push(quote)
      }
    },

    toggleAdviceVisibility() {
      this.dailyAdviceVisible = !this.dailyAdviceVisible
    }
  }
})
