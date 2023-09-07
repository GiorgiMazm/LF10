<script setup lang="ts">
const { addForm } = useForm();
async function createForm() {
  await addForm({ name: "Giorgi" });
}
</script>

<template>
  <div>
    <form>
      <text-input label="Name" placeholder="John" />
      <text-input label="Name" placeholder="John" />
      <button @click.prevent="createForm">Submit</button>
      <br />
      <NuxtLink href="/">Zurück</NuxtLink>
    </form>
  </div>
</template>
