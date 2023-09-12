<script setup lang="ts">
import { ObjectId } from "mongodb";

const { getForm, putForm } = useForm();
const formArray: { _id: ObjectId }[] = await getForm();
const update = (_id: ObjectId) => {
  putForm(_id);
};
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <h1 class="text-center text-5xl mt-8">Administrator Page</h1>
      </div>
      <div v-for="value in formArray">
        {{ value }}
        <button @click="update(value._id)">Approved</button>
      </div>
    </section>
  </div>
</template>
