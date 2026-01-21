<template>
  <input type="date" v-model="selectedDate" class="border p-2 rounded" />
</template>

<script setup>
import { ref } from "vue"
const selectedDate = ref("")
</script>
