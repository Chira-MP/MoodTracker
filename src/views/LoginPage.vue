<script setup>
import { ref } from "vue"
import { useAuthStore } from "@/stores/auth"
import { useRouter } from "vue-router"

const auth = useAuthStore()
const router = useRouter()

const email = ref("")
const password = ref("")

function doLogin() {
  auth.login(email.value)
  router.push("/mood")
}
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen bg-blue-50">
    <div class="bg-white p-6 rounded-xl shadow-md w-80 text-center">
      <h2 class="text-2xl font-bold mb-4">Login</h2>

      <!-- EMAIL -->
      <input v-model="email" placeholder="Email" class="border w-full p-2 rounded mb-3" />

      <!-- PAROLA -->
      <input
        v-model="password"
        placeholder="Parolă"
        type="password"
        class="border w-full p-2 rounded mb-3"
      />

      <div class="flex items-center mb-3 text-sm">
        <input type="checkbox" id="remember" class="mr-2" />
        <label for="remember">Ține-mă minte</label>
      </div>

      <!-- LOGIN BUTTON -->
      <button
        @click="doLogin"
        class="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition"
      >
        LOGIN
      </button>

      <!-- FEEDBACK PINIA -->
      <p v-if="auth.isLoggedIn" class="mt-3 text-green-700 text-sm">
        Logat ca: {{ auth.userEmail }}
      </p>

      <RouterLink to="/forgot" class="block text-sm mt-3 text-blue-600 underline">
        Ai uitat parola?
      </RouterLink>

      <RouterLink to="/register" class="block text-sm mt-4 text-blue-600 underline">
        Nu ai cont? Creează unul
      </RouterLink>
    </div>

    <button @click="$router.back()" class="mt-4 text-blue-600 underline text-sm">← Înapoi</button>
  </div>
</template>
