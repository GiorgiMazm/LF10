<script setup lang="ts">
const { addForm } = useForm();
async function createForm() {
  await addForm(dataObject.value);
}

const formFields = ["First", "Lastname", "Age", "Nationality", "sex"];

function createObject(data: object) {
  //@ts-ignore
  dataObject.value[data.name] = data.value;
}

const dataObject = ref({});
</script>

<template>
  <div>
    <form>
      <text-input
        v-for="filed in formFields"
        :label="filed"
        :placeholder="filed"
        :field-name="filed"
        @passInputValue="createObject"
      />
      <button class="my-2" @click.prevent="createForm">Submit</button>
      <br />
      <NuxtLink href="/">Zurück</NuxtLink>
    </form>
  </div>
</template>
