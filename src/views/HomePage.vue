<script setup>
import { computed } from "vue" // Importăm computed
import { RouterLink } from "vue-router"
import { useMoodStore } from "@/stores/moods"
import { useAuthStore } from "@/stores/auth"

const moodStore = useMoodStore()
const authStore = useAuthStore()

// Computed 1: Mesaj de întâmpinare personalizat în funcție de oră
const welcomeMessage = computed(() => {
  const hour = new Date().getHours()
  if (hour < 12) return `Bună dimineața, ${authStore.displayName}!`
  if (hour < 18) return `Bună ziua, ${authStore.displayName}!`
  return `Bună seara, ${authStore.displayName}!`
})

// Computed 2: Text pentru numărul de înregistrări de azi
const entriesTodayText = computed(() => {
  const count = moodStore.moodEntries.filter(
    (e) => e.date === new Date().toLocaleDateString()
  ).length
  return count === 0 ? "Nu ai adăugat nicio stare azi." : `Ai ${count} înregistrări azi.`
})
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen bg-blue-50 text-center p-4">
    <h1 class="text-3xl font-bold text-blue-700 mb-2">{{ welcomeMessage }}</h1>
    <p class="text-gray-600 mb-2">Găsește-ți echilibrul interior</p>
    <p class="text-sm font-medium text-blue-500 mb-6">{{ entriesTodayText }}</p>

    <div class="space-x-4 mb-8">
      <RouterLink to="/mood" class="underline text-blue-600">Mood</RouterLink>
      <RouterLink to="/exercises" class="underline text-blue-600">Exerciții</RouterLink>
      <RouterLink to="/settings" class="underline text-blue-600">Setări</RouterLink>
      <RouterLink to="/advice" class="underline text-blue-600">Advice</RouterLink>
    </div>

    <button
      @click="$router.push('/login')"
      class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
    >
      Contul meu
    </button>
  </div>
</template>
