<script setup>
import { useMoodStore } from "@/stores/moods"
import { useExercisesStore } from "@/stores/exercises"

const moodStore = useMoodStore()
const exStore = useExercisesStore()

const totalStari = moodStore.totalEntries
const minuteRelaxare = exStore.totalRelaxationMinutes
</script>

<template>
  <div style="padding: 20px; font-family: sans-serif">
    <h2 style="text-align: center; margin-bottom: 30px">Statistici Activitate</h2>

    <div style="border: 1px solid #ccc; padding: 15px; border-radius: 15px; margin-bottom: 20px">
      <h3 style="margin-top: 0">Monitorizare Stări</h3>
      <p>
        Total înregistrări: <strong>{{ totalStari }}</strong>
      </p>
      <div style="background: #eee; height: 10px; border-radius: 5px; overflow: hidden">
        <div :style="{ width: totalStari * 10 + '%', background: '#42b883', height: '100%' }"></div>
      </div>
      <p style="font-size: 0.8em; color: #666; margin-top: 5px">
        Progres către obiectivul de 10 stări
      </p>
    </div>

    <div style="border: 1px solid #ccc; padding: 15px; border-radius: 15px">
      <h3 style="margin-top: 0">Relaxare</h3>
      <p>
        Minute totale: <strong>{{ minuteRelaxare }} min</strong>
      </p>
      <p>
        Exerciții în istoric: <strong>{{ exStore.completedHistory.length }}</strong>
      </p>
    </div>

    <button
      @click="$router.back()"
      style="margin-top: 20px; width: 100%; padding: 10px; cursor: pointer"
    >
      Înapoi
    </button>
  </div>
</template>
