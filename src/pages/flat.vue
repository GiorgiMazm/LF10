<script setup lang="ts">
import useForm from "~/composables/useForm";

const { addForm } = useForm();
async function createForm() {
  await addForm({ name: "Giorgi" });
}
</script>

<template>
  <div>Flat formular</div>
  <button @click="createForm">CLICK ME!!!</button>
</template>
