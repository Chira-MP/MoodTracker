<script setup>
import { RouterView } from "vue-router"
import { useSettingsStore } from "@/stores/settings"
import { useRegisterSW } from "virtual:pwa-register/vue"

useRegisterSW()

const settings = useSettingsStore()
</script>

<template>
  <div class="min-h-screen bg-[#f8faf2] font-sans text-slate-900">
    <header
      class="bg-gradient-to-r from-emerald-400 to-lime-300 p-5 shadow-sm sticky top-0 z-50 flex items-center justify-between text-emerald-900"
    >
      <button @click="$router.push('/settings')" class="text-2xl">🔔</button>
      <h1 class="text-2xl font-black tracking-tight drop-shadow-sm">MoodTracker</h1>
      <button @click="$router.push('/settings')" class="text-2xl">⚙️</button>
    </header>

    <main class="max-w-md mx-auto p-5 pb-28">
      <RouterView />
    </main>

    <nav
      class="fixed bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-lime-100 flex justify-around py-4 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-50"
    >
      <RouterLink
        to="/"
        class="flex flex-col items-center text-slate-400"
        active-class="text-emerald-600 font-bold scale-110"
      >
        <span class="text-2xl">🏠</span>
        <span class="text-[10px] mt-1">Acasă</span>
      </RouterLink>
      <RouterLink
        to="/mood"
        class="flex flex-col items-center text-slate-400"
        active-class="text-emerald-600 font-bold scale-110"
      >
        <span class="text-2xl">📒</span>
        <span class="text-[10px] mt-1">Jurnal</span>
      </RouterLink>
      <RouterLink
        to="/stats"
        class="flex flex-col items-center text-slate-400"
        active-class="text-emerald-600 font-bold scale-110"
      >
        <span class="text-2xl">📊</span>
        <span class="text-[10px] mt-1">Statistici</span>
      </RouterLink>
      <RouterLink
        to="/profile"
        class="flex flex-col items-center text-slate-400"
        active-class="text-emerald-600 font-bold scale-110"
      >
        <span class="text-2xl">👤</span>
        <span class="text-[10px] mt-1">Profil</span>
      </RouterLink>
    </nav>
  </div>
</template>
