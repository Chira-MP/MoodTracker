<script setup>
import { ref } from "vue"

const emit = defineEmits(["save-mood"])

const mood = ref("")

function sendMood() {
  emit("save-mood", mood.value)
}
</script>

<template>
  <div class="p-4 bg-white rounded shadow">
    <input v-model="mood" class="border p-2 w-full mb-2" placeholder="Cum te simți?" />
    <button @click="sendMood" class="bg-blue-500 text-white w-full py-2 rounded">
      Salvează starea
    </button>
  </div>
</template>
