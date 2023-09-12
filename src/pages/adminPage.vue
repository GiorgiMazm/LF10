<script setup lang="ts">
const { getForm } = useForm();
const formArray = await getForm();
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <h1 class="text-center text-5xl mt-8">Administrator Page</h1>
      </div>
      <div v-for="(value, key) in formArray">
        {{ value }}
      </div>
    </section>
  </div>
</template>
