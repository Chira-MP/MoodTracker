<script setup>
import { ref } from "vue"
import { useAdviceStore } from "@/stores/advice"

const store = useAdviceStore()
const newAdvice = ref("")

function add() {
  store.addAdvice(newAdvice.value)
  newAdvice.value = ""
}
</script>

<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4 text-center">Citate & sfaturi</h2>

    <div class="bg-white p-4 rounded shadow">
      <p class="text-sm text-gray-600 mb-2">Total: {{ store.totalAdvice }}</p>

      <div class="flex gap-2 mb-3">
        <input
          v-model="newAdvice"
          placeholder="Scrie un citat scurt..."
          class="border p-2 rounded w-full"
        />
        <button @click="add" class="bg-blue-500 text-white px-3 rounded hover:bg-blue-600">
          +
        </button>
      </div>

      <div class="space-y-2 text-left">
        <div
          v-for="(a, i) in store.items"
          :key="i"
          class="border rounded p-2 flex items-start justify-between gap-2"
        >
          <div>
            <p class="italic">"{{ a }}"</p>
            <button @click="store.toggleFavorite(i)" class="text-xs underline mt-1">
              {{ store.favoriteIndexes.includes(i) ? "Scoate din favorite" : "Adaugă la favorite" }}
            </button>
          </div>

          <button @click="store.removeAdvice(i)" class="text-red-600 underline text-sm">
            Șterge
          </button>
        </div>
      </div>

      <div v-if="store.hasFavorites" class="mt-4">
        <h3 class="font-semibold mb-2">Favorite:</h3>
        <ul class="list-disc ml-5 text-sm text-gray-700">
          <li v-for="(f, idx) in store.favorites" :key="idx">{{ f }}</li>
        </ul>
      </div>
    </div>

    <button @click="$router.back()" class="mt-4 text-blue-600 underline text-sm block mx-auto">
      ← Înapoi
    </button>
  </div>
</template>
