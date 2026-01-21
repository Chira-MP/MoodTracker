<script setup>
import { ref, watch } from "vue"
import { useExercisesStore } from "@/stores/exercises"

const store = useExercisesStore()
const newName = ref("")

function add() {
  store.addExercise(newName.value)
  newName.value = ""
}

watch(
  () => store.selectedId,
  (newVal, oldVal) => {
    console.log("Exercițiu schimbat:", oldVal, "->", newVal)
  }
)
</script>

<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4 text-center">Exerciții de respirație</h2>

    <div class="bg-white p-4 rounded shadow text-left">
      <p class="text-sm text-gray-600 mb-2">Total: {{ store.totalExercises }}</p>

      <div class="flex gap-2 mb-3">
        <input
          v-model="newName"
          placeholder="Adaugă un exercițiu (nume)"
          class="border p-2 rounded w-full"
        />
        <button @click="add" class="bg-blue-500 text-white px-3 rounded hover:bg-blue-600">
          +
        </button>
      </div>

      <div class="space-y-2">
        <button
          v-for="e in store.exercises"
          :key="e.id"
          @click="store.selectExercise(e.id)"
          class="w-full text-left border rounded p-2 hover:bg-gray-50"
          :class="store.selectedId === e.id ? 'border-blue-500' : ''"
        >
          {{ e.name }}
        </button>
      </div>

      <div v-if="store.selectedExercise" class="mt-4 border-t pt-3">
        <h3 class="font-semibold">{{ store.selectedExercise.name }}</h3>
        <p class="text-sm text-gray-700">
          In: {{ store.selectedExercise.secondsIn }}s, Hold:
          {{ store.selectedExercise.secondsHold }}s, Out: {{ store.selectedExercise.secondsOut }}s
        </p>

        <div class="mt-3 flex gap-2">
          <button
            v-if="!store.isRunning"
            @click="store.start()"
            class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Start
          </button>

          <button
            v-else
            @click="store.stop()"
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Stop
          </button>
        </div>
      </div>
    </div>

    <button @click="$router.back()" class="mt-4 text-blue-600 underline text-sm block mx-auto">
      ← Înapoi
    </button>
  </div>
</template>
