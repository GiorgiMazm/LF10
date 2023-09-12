<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <header class="py-10 bg-blue-400">
    <div class="container mx-auto">
      <nav class="flex justify-around">
        <ul class="w-4/5">
          <NuxtLink class="mr-8 hover:text-white" href="/">Home</NuxtLink>
          <NuxtLink class="hover:text-white" href="/admin">Admin</NuxtLink>
        </ul>

        <select v-model="locale" class="mr-3">
          <option value="en">en</option>
          <option value="de">de</option>
          <option value="ru">ru</option>
        </select>
      </nav>
    </div>
  </header>
</template>
