<script setup>
import { RouterView } from "vue-router"
import { useSettingsStore } from "@/stores/settings"
import { useRegisterSW } from "virtual:pwa-register/vue"

useRegisterSW()

const settings = useSettingsStore()
</script>

<template>
  <div
    :class="
      settings.darkMode
        ? 'bg-gray-900 text-white min-h-screen'
        : 'bg-gray-50 text-black min-h-screen'
    "
  >
    <RouterView />
  </div>
</template>
