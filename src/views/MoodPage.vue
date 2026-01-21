<script setup>
import { computed, watch, ref } from "vue" // Ambele importate aici
import { useMoodStore } from "@/stores/moods"

const moodStore = useMoodStore()
const noteText = ref("")

// --- SECȚIUNEA COMPUTED (Cerința 2p) ---

// Computed 3: Filtrează doar intrările de azi
const todaysEntries = computed(() => {
  const today = new Date().toLocaleDateString()
  return moodStore.moodEntries.filter((entry) => entry.date === today)
})

// Computed 4: Calculează indicele de fericire
const happinessIndex = computed(() => {
  if (moodStore.totalEntries === 0) return 0
  const happyCount = moodStore.happyMoodsOnly.length
  return Math.round((happyCount / moodStore.totalEntries) * 100)
})

// Computed 5: Mesaj dinamic de motivare
const motivationMessage = computed(() => {
  if (moodStore.moodEntries.length === 0) return "Începe prin a adăuga prima stare de azi!"
  const lastMood = moodStore.moodEntries[0].type
  return lastMood === "Stresat" || lastMood === "Anxios"
    ? "Nu uita să faci un exercițiu de respirație!"
    : "Continuă tot așa!"
})

// --- SECȚIUNEA WATCH (Cerința 2p) ---

// Watch 2: Alertă pentru stări negative
watch(
  () => moodStore.moodEntries.length,
  (newCount, oldCount) => {
    if (newCount > oldCount) {
      const lastEntry = moodStore.moodEntries[0]
      if (lastEntry.type === "Anxios" || lastEntry.type === "Stresat") {
        // eslint-disable-next-line no-alert
        alert("Am observat că ești stresat. Poate încerci un exercițiu de respirație?")
      }
    }
  }
)

// Watch 3: Mesaj de felicitare la fiecare 5 înregistrări
watch(
  () => moodStore.totalEntries,
  (count) => {
    if (count % 5 === 0 && count > 0) {
      console.log(`Bravo! Ai ajuns la ${count} înregistrări.`)
    }
  }
)

const saveMood = (type) => {
  moodStore.addMood(type, noteText.value)
  noteText.value = ""
}
</script>

<template>
  <div class="p-6 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Jurnalul de Stări</h1>

    <p class="text-blue-600 italic mb-6">{{ motivationMessage }}</p>

    <div class="bg-white p-4 rounded-lg shadow mb-6">
      <p class="mb-2 font-medium">Cum te simți acum?</p>
      <div class="grid grid-cols-2 gap-2 mb-4">
        <button
          v-for="mood in moodStore.possibleMoods"
          :key="mood"
          @click="saveMood(mood)"
          class="bg-blue-100 hover:bg-blue-200 p-2 rounded transition"
        >
          {{ mood }}
        </button>
      </div>
      <input
        v-model="noteText"
        placeholder="Adaugă o notă (opțional)..."
        class="w-full border p-2 rounded text-sm"
      />
    </div>

    <div class="mb-6 p-4 bg-yellow-50 rounded-lg">
      <p class="text-sm">
        Indice de fericire: <strong>{{ happinessIndex }}%</strong>
      </p>
    </div>

    <h2 class="font-bold mb-2">Activitate azi ({{ todaysEntries.length }}):</h2>
    <ul class="space-y-2">
      <li v-for="entry in todaysEntries" :key="entry.id" class="text-sm border-b pb-1">
        <span class="font-bold">{{ entry.time }}</span> - {{ entry.type }}
        <p v-if="entry.note" class="text-gray-500 italic">{{ entry.note }}</p>
      </li>
    </ul>
  </div>
</template>
