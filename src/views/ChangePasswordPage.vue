<template>
  <div class="flex flex-col justify-center items-center min-h-screen bg-blue-50">
    <div class="bg-white p-6 rounded-xl shadow-md w-80 text-center">
      <h2 class="text-2xl font-bold mb-4">Schimbă parola</h2>

      <input placeholder="Parola veche" type="password" class="border w-full p-2 rounded mb-3" />
      <input placeholder="Parola nouă" type="password" class="border w-full p-2 rounded mb-3" />
      <input
        placeholder="Confirmă parola nouă"
        type="password"
        class="border w-full p-2 rounded mb-4"
      />

      <button
        @click="$router.push('/login')"
        class="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition"
      >
        Schimbă parola
      </button>
    </div>

    <button @click="$router.back()" class="mt-4 text-blue-600 underline text-sm">← Înapoi</button>
  </div>
</template>

<script setup></script>
