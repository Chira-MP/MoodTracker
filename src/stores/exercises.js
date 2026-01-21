import { defineStore } from "pinia"

export const useExercisesStore = defineStore("exercises", {
  state: () => ({
    exercises: [
      { id: 1, name: "Respirație 4-7-8", duration: 120, difficulty: "Ușor" },
      { id: 2, name: "Respirație Cutie (Box)", duration: 180, difficulty: "Mediu" },
      { id: 3, name: "Relaxare Musculară", duration: 300, difficulty: "Avansat" }
    ],
    completedHistory: []
  }),

  getters: {
    // Getter 6: Numărul total de exerciții disponibile
    availableCount: (state) => state.exercises.length,

    // Getter 7: Total minute de relaxare (calculat din istoric)
    totalRelaxationMinutes: (state) => {
      const seconds = state.completedHistory.reduce((acc, curr) => acc + curr.duration, 0)
      return Math.round(seconds / 60)
    },

    // Getter 8: Ultimele 3 exerciții făcute
    recentHistory: (state) => state.completedHistory.slice(0, 3)
  },

  actions: {
    // Action 7: Salvează un exercițiu terminat
    completeExercise(exerciseId) {
      const exercise = this.exercises.find((e) => e.id === exerciseId)
      if (exercise) {
        this.completedHistory.unshift({
          ...exercise,
          completedAt: new Date().toLocaleString()
        })
      }
    },

    // Action 8: Șterge istoricul de exerciții

    resetExerciseProgress() {
      // eslint-disable-next-line no-alert
      if (confirm("Vrei să resetezi progresul exercițiilor?")) {
        this.completedHistory = []
      }
    }
  }
})
