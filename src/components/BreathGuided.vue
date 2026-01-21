<template>
  <div class="p-4 bg-green-50 rounded text-center">
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: "Respiră calm, ești în siguranță."
  }
})
</script>
