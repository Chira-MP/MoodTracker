<script setup>
import { ref, watch } from "vue"
import { useExercisesStore } from "@/stores/exercises"

const store = useExercisesStore()
const newName = ref("")

function add() {
  if (newName.value.trim()) {
    store.addExercise(newName.value)
    newName.value = ""
  }
}

watch(
  () => store.selectedId,
  (newVal) => {
    console.log("Ai selectat exercițiul cu ID:", newVal)
  }
)
</script>

<template>
  <div class="space-y-6">
    <div class="text-center py-2">
      <h2 class="text-2xl font-extrabold text-emerald-800">Exerciții</h2>
      <p class="text-lime-700 font-medium italic">Total: {{ store.totalExercises }}</p>
    </div>

    <div class="grid gap-3">
      <button
        v-for="e in store.exercises"
        :key="e.id"
        @click="store.selectExercise(e.id)"
        class="w-full text-left p-4 rounded-2xl border-2 transition-all flex justify-between items-center"
        :class="
          store.selectedId === e.id
            ? 'bg-emerald-100 border-emerald-400 shadow-md'
            : 'bg-white border-lime-100 shadow-sm'
        "
      >
        <span class="font-bold text-slate-700">{{ e.name }}</span>
        <span v-if="store.selectedId === e.id" class="text-emerald-600 font-black">SELECTAT</span>
      </button>
    </div>

    <div
      v-if="store.selectedExercise"
      class="bg-gradient-to-br from-emerald-500 to-lime-400 rounded-[2rem] p-8 text-white shadow-xl text-center"
    >
      <h3 class="text-xl font-black mb-4">{{ store.selectedExercise.name }}</h3>

      <div class="grid grid-cols-3 gap-2 mb-8 text-[10px] font-bold uppercase tracking-tighter">
        <div class="bg-white/10 p-2 rounded-lg">In: {{ store.selectedExercise.secondsIn }}s</div>
        <div class="bg-white/10 p-2 rounded-lg">
          Hold: {{ store.selectedExercise.secondsHold }}s
        </div>
        <div class="bg-white/10 p-2 rounded-lg">Out: {{ store.selectedExercise.secondsOut }}s</div>
      </div>

      <div class="flex justify-center">
        <button
          v-if="!store.isRunning"
          @click="store.start()"
          class="bg-white text-emerald-600 px-12 py-3 rounded-2xl font-black shadow-lg hover:scale-105 active:scale-95 transition"
        >
          PORNEȘTE
        </button>

        <button
          v-else
          @click="store.stop()"
          class="bg-red-500 text-white px-12 py-3 rounded-2xl font-black shadow-lg animate-pulse"
        >
          OPREȘTE
        </button>
      </div>

      <p v-if="store.isRunning" class="mt-4 text-xs font-bold animate-bounce text-lime-100">
        Exercițiul rulează...
      </p>
    </div>
  </div>
</template>
