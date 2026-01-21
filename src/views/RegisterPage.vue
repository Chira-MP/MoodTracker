<template>
  <div class="flex flex-col justify-center items-center min-h-screen bg-blue-50">
    <div class="bg-white p-6 rounded-xl shadow-md w-80 text-center">
      <h2 class="text-2xl font-bold mb-4">Înregistrare</h2>

      <input placeholder="Nume" class="border w-full p-2 rounded mb-3" />
      <input placeholder="Email" class="border w-full p-2 rounded mb-3" />
      <input placeholder="Parolă" type="password" class="border w-full p-2 rounded mb-3" />
      <input placeholder="Confirmă parola" type="password" class="border w-full p-2 rounded mb-4" />

      <button
        @click="$router.push('/login')"
        class="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition"
      >
        Register
      </button>

      <RouterLink to="/login" class="block text-sm mt-4 text-blue-600 underline">
        Ai deja cont? Autentifică-te
      </RouterLink>
    </div>
    <button @click="$router.back()" class="mt-4 text-blue-600 underline text-sm">← Înapoi</button>
  </div>
</template>

<script setup></script>
