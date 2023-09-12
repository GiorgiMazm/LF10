<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <header>
    <div>
      <select v-model="locale" class="mr-3">
        <option value="en">en</option>
        <option value="de">de</option>
        <option value="ru">ru</option>
      </select>
    </div>
  </header>
</template>
