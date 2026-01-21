<script setup>
import { ref } from "vue"

const sound = ref("ploaie")

function changeSound() {
  sound.value = sound.value === "ploaie" ? "mare" : "ploaie"
}
</script>

<template>
  <div class="bg-blue-50 p-3 rounded text-center">
    <p>🎧 Sunet de fundal: {{ sound }}</p>
    <button @click="changeSound" class="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
      Schimbă
    </button>
  </div>
</template>
