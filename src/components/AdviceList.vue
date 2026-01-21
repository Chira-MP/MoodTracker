<template>
  <div>
    <h3 class="text-lg font-semibold mb-2">Citate pozitive:</h3>
    <AdviceItem v-for="(a, i) in advices" :key="i" :advice="a" />
  </div>
</template>

<script setup>
import AdviceItem from "./AdviceItem.vue"

const advices = [
  "Respiră adânc, e doar o zi, nu o viață.",
  "Fii blând cu tine.",
  "Totul trece, inclusiv momentele grele."
]
</script>
