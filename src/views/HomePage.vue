<script setup>
import { computed } from "vue"
import { RouterLink } from "vue-router"
import { useMoodStore } from "@/stores/moods"
import { useAuthStore } from "@/stores/auth"

const moodStore = useMoodStore()
const authStore = useAuthStore()

const welcomeMessage = computed(() => {
  const hour = new Date().getHours()
  if (hour < 12) return `Bună dimineața, ${authStore.displayName}!`
  if (hour < 18) return `Bună ziua, ${authStore.displayName}!`
  return `Bună seara, ${authStore.displayName}!`
})

const entriesTodayText = computed(() => {
  const count = moodStore.moodEntries.filter(
    (e) => e.date === new Date().toLocaleDateString()
  ).length
  return count === 0 ? "Nu ai adăugat nicio stare azi." : `Ai ${count} înregistrări azi.`
})
</script>

<template>
  <div class="space-y-8 animate-in fade-in duration-500">
    <div class="text-center py-2">
      <h2 class="text-2xl font-extrabold text-emerald-800">{{ welcomeMessage }}</h2>
      <p class="text-lime-700 font-medium opacity-80">{{ entriesTodayText }}</p>
    </div>

    <div class="grid grid-cols-4 gap-4">
      <button
        @click="moodStore.addMood('Sad')"
        class="flex flex-col items-center py-5 bg-yellow-50 rounded-[2rem] shadow-sm border-b-4 border-yellow-200 active:translate-y-1 transition-all"
      >
        <span class="text-3xl mb-1">😟</span>
        <span class="text-[11px] font-bold text-yellow-700">Trist</span>
      </button>
      <button
        @click="moodStore.addMood('Okay')"
        class="flex flex-col items-center py-5 bg-lime-50 rounded-[2rem] shadow-sm border-b-4 border-lime-200 active:translate-y-1 transition-all"
      >
        <span class="text-3xl mb-1">😐</span>
        <span class="text-[11px] font-bold text-lime-700">OK</span>
      </button>
      <button
        @click="moodStore.addMood('Happy')"
        class="flex flex-col items-center py-5 bg-emerald-50 rounded-[2rem] shadow-sm border-b-4 border-emerald-200 active:translate-y-1 transition-all"
      >
        <span class="text-3xl mb-1">😊</span>
        <span class="text-[11px] font-bold text-emerald-700">Fericit</span>
      </button>
      <button
        @click="moodStore.addMood('Great')"
        class="flex flex-col items-center py-5 bg-green-100 rounded-[2rem] shadow-sm border-b-4 border-green-300 active:translate-y-1 transition-all"
      >
        <span class="text-3xl mb-1">🤩</span>
        <span class="text-[11px] font-bold text-green-700">Super</span>
      </button>
    </div>

    <div
      class="bg-gradient-to-br from-emerald-500 to-teal-400 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group"
    >
      <div class="relative z-10">
        <h3 class="text-xl font-black mb-1">Respirație Controlată</h3>
        <p class="text-sm text-emerald-50 mb-6">3 minute pentru calmare</p>
        <button
          @click="$router.push('/exercises')"
          class="bg-white text-emerald-600 px-10 py-3 rounded-2xl font-black text-sm shadow-lg hover:scale-105 transition"
        >
          ÎNCEPE ACUM
        </button>
      </div>
      <span
        class="absolute -right-6 -bottom-6 text-[10rem] opacity-20 rotate-12 group-hover:rotate-0 transition-transform"
        >🧘‍♂️</span
      >
    </div>

    <div class="bg-white rounded-[2.5rem] p-8 shadow-sm border border-lime-50 text-center relative">
      <div class="text-lime-400 text-4xl absolute top-4 left-6 opacity-30 font-serif">“</div>
      <p class="text-slate-700 text-lg italic font-semibold leading-relaxed px-4">
        "Fiecare zi este o nouă șansă să fii fericit."
      </p>
      <button
        @click="$router.push('/advice')"
        class="mt-6 text-emerald-600 font-bold text-xs uppercase tracking-widest hover:underline"
      >
        Vreau alt sfat
      </button>
    </div>

    <button
      @click="$router.push('/login')"
      class="w-full bg-emerald-900 text-white py-5 rounded-[2rem] font-black shadow-xl shadow-emerald-100 hover:bg-emerald-800 transition-all active:scale-95"
    >
      CREEAZĂ CONTUL MEU
    </button>
  </div>
</template>
