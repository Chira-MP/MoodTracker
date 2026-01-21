<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4 text-center">Bine ai revenit! 🌞</h2>

    <div class="grid gap-4 md:grid-cols-2">
      <RouterLink to="/exercises" class="block bg-green-100 p-4 rounded hover:bg-green-200">
        <h3 class="font-semibold">Exerciții de respirație</h3>
        <p class="text-sm text-gray-600">Inspiră... expiră... relaxează-te</p>
      </RouterLink>

      <RouterLink to="/" class="block bg-blue-100 p-4 rounded hover:bg-blue-200">
        <h3 class="font-semibold">Citate pozitive</h3>
        <p class="text-sm text-gray-600">O vorbă bună pentru suflet</p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup></script>
