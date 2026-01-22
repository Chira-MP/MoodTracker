import { defineStore } from "pinia"

export const useExercisesStore = defineStore("exercises", {
  state: () => ({
    exercises: [
      {
        id: 1,
        name: "Respirație 4-7-8",
        duration: 120,
        difficulty: "Ușor",
        secondsIn: 4,
        secondsHold: 7,
        secondsOut: 8
      },
      {
        id: 2,
        name: "Respirație Cutie (Box)",
        duration: 180,
        difficulty: "Mediu",
        secondsIn: 4,
        secondsHold: 4,
        secondsOut: 4
      },
      {
        id: 3,
        name: "Relaxare Musculară",
        duration: 300,
        difficulty: "Avansat",
        secondsIn: 5,
        secondsHold: 2,
        secondsOut: 5
      }
    ],
    completedHistory: [],
    selectedId: null,
    isRunning: false
  }),

  getters: {
    availableCount: (state) => state.exercises.length,
    totalRelaxationMinutes: (state) => {
      const seconds = state.completedHistory.reduce((acc, curr) => acc + curr.duration, 0)
      return Math.round(seconds / 60)
    },
    recentHistory: (state) => state.completedHistory.slice(0, 3),

    selectedExercise: (state) => state.exercises.find((e) => e.id === state.selectedId)
  },

  actions: {
    selectExercise(id) {
      this.selectedId = id
    },
    start() {
      this.isRunning = true
    },
    stop() {
      this.isRunning = false

      if (this.selectedId) this.completeExercise(this.selectedId)
    },

    completeExercise(exerciseId) {
      const exercise = this.exercises.find((e) => e.id === exerciseId)
      if (exercise) {
        this.completedHistory.unshift({
          ...exercise,
          completedAt: new Date().toLocaleString()
        })
      }
    },

    resetExerciseProgress() {
      // eslint-disable-next-line no-alert
      if (confirm("Vrei să resetezi progresul exercițiilor?")) {
        this.completedHistory = []
      }
    }
  }
})
