<template>
  <div class="bg-white border p-4 rounded shadow">
    <p class="mb-3">{{ text }}</p>
    <button @click="$emit('confirm')" class="bg-green-500 text-white px-4 py-1 rounded mr-2">
      OK
    </button>
    <button @click="$emit('cancel')" class="bg-gray-300 px-4 py-1 rounded">Anulează</button>
  </div>
</template>

<script setup>
defineProps(["text"])
defineEmits(["confirm", "cancel"])
</script>
