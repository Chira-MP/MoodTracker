<script setup></script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen bg-blue-50">
    <div class="bg-white p-6 rounded-xl shadow-md w-80 text-center">
      <h2 class="text-2xl font-bold mb-4">Ai uitat parola?</h2>
      <p class="text-sm text-gray-600 mb-4">
        Introdu adresa de email pentru a primi un link de resetare.
      </p>

      <input placeholder="Email" class="border w-full p-2 rounded mb-4" />

      <button
        @click="$router.push('/login')"
        class="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition"
      >
        Trimite link-ul
      </button>
    </div>

    <RouterLink to="/login" class="mt-4 text-blue-600 underline text-sm">
      ← Înapoi la login
    </RouterLink>
  </div>
</template>
