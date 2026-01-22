<script setup>
import { useAuthStore } from "@/stores/auth"
import { useMoodStore } from "@/stores/moods"

const authStore = useAuthStore()
const moodStore = useMoodStore()

const handleLogout = () => {
  authStore.logout()
}
</script>

<template>
  <div
    style="
      padding: 20px;
      max-width: 500px;
      margin: 0 auto;
      text-align: left;
      font-family: sans-serif;
    "
  >
    <h1 style="border-bottom: 2px solid #ccc; padding-bottom: 10px">Profil Utilizator</h1>

    <div
      style="
        background: #f9f9f9;
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 20px;
        border: 1px solid #ddd;
      "
    >
      <p><strong>Nume:</strong> {{ authStore.displayName }}</p>
      <p><strong>Statut:</strong> {{ authStore.isAuthenticated ? "Conectat" : "Vizitator" }}</p>
      <p v-if="authStore.loginDate"><strong>Ultima logare:</strong> {{ authStore.loginDate }}</p>
    </div>

    <h3>Statistici Activitate</h3>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px">
      <div style="padding: 10px; border: 1px solid #eee; border-radius: 5px; text-align: center">
        <span style="font-size: 0.8em; color: #666">Total Intrări</span>
        <div style="font-size: 1.5em; font-weight: bold">{{ moodStore.totalEntries }}</div>
      </div>
      <div style="padding: 10px; border: 1px solid #eee; border-radius: 5px; text-align: center">
        <span style="font-size: 0.8em; color: #666">Stări Fericite</span>
        <div style="font-size: 1.5em; font-weight: bold; color: green">
          {{ moodStore.happyMoodsOnly.length }}
        </div>
      </div>
    </div>

    <div style="margin-top: 30px; display: flex; gap: 10px">
      <button
        @click="handleLogout"
        style="
          padding: 10px 20px;
          background: #ff4d4d;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        "
      >
        Deconectare
      </button>

      <button
        @click="$router.back()"
        style="
          padding: 10px 20px;
          background: #eee;
          border: 1px solid #ccc;
          border-radius: 5px;
          cursor: pointer;
        "
      >
        Înapoi
      </button>
    </div>
  </div>
</template>
