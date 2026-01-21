<script setup>
defineProps({
  advice: String
})
</script>

<template>
  <div class="bg-yellow-100 p-3 rounded mb-2">
    <p class="text-gray-800 italic">"{{ advice }}"</p>
  </div>
</template>
