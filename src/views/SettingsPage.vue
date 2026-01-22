<script setup>
import { computed, watch } from "vue"
import { useSettingsStore } from "@/stores/settings"

const settingsStore = useSettingsStore()

watch(
  () => settingsStore.darkMode,
  (isDark) => {
    console.log(`[Sistem] Tema a fost schimbată în: ${isDark ? "Dark Mode" : "Light Mode"}`)
  }
)

const fontSizeStatus = computed(() => {
  return settingsStore.fontSize > 20 ? "Font Mare (Accesibilitate activă)" : "Font Normal"
})
</script>

<template>
  <div class="p-6 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-6">Setări Aplicație</h1>

    <div class="space-y-6">
      <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow">
        <span>Mod Întunecat ({{ settingsStore.currentTheme }})</span>
        <button
          @click="settingsStore.toggleDarkMode()"
          class="px-4 py-2 rounded bg-blue-500 text-white text-sm"
        >
          {{ settingsStore.darkMode ? "Dezactivează" : "Activează" }}
        </button>
      </div>

      <div class="p-4 bg-white rounded-lg shadow">
        <label class="block mb-2">Dimensiune Text: {{ settingsStore.fontSize }}px</label>
        <input type="range" min="12" max="30" v-model="settingsStore.fontSize" class="w-full" />
        <p class="text-xs mt-2 text-gray-500 italic">{{ fontSizeStatus }}</p>
      </div>

      <div class="p-4 bg-white rounded-lg shadow">
        <label class="block mb-2">Limbă Aplicație</label>
        <select v-model="settingsStore.language" class="w-full border p-2 rounded">
          <option value="ro">Română</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  </div>
</template>
