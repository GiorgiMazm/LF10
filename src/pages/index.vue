<script setup lang="ts">
import FormDirector from "~/types/FormDirector";

const director = new FormDirector(
  "Cramer",
  "Mathis",
  "16.11.1995",
  "Emil-Janßen-Straße",
  "36",
  22307,
  "Hamburg",
  "mathis.cramer@icloud.com",
  "123456789"
);
director.buildWohngeldantrag(
  "deutsch",
  "Male",
  false,
  "Büngener",
  "Aiyana",
  "05.04.1999",
  50,
  "flat",
  840,
  "Jungheinrich",
  "Friedrich-Ebert-Damm",
  "129",
  22870,
  "Hamburg",
  1200,
  "Mathis Cramer",
  "Emil-Janßen-Straße",
  "DE151466538546",
  "NOLDADE175815",
  "Sparkasse",
  true,
  "middle school",
  new Date(),
  new Date(),
  "Plumber",
  "The Plumber",
  new Date(),
  new Date(),
  "Harward",
  false,
  4,
  "KFZ",
  "start!",
  "end!!",
  50
);
const form = director.builder.buildForm();
console.log(form);
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div class="text-center pt-20">
          <h1 class="text-5xl">Welcome to our page!</h1>
          <h2 class="text-3xl pt-12 pb-4">Select your form</h2>
          <ul class="flex flex-col items-center">
            <li
              class="bg-lime-400 w-[15%] px-6 rounded-xl hover:bg-blue-400 py-4 my-4"
            >
              <NuxtLink href="/flat">Wohngeldantrag</NuxtLink>
            </li>

            <li
              class="w-[15%] bg-lime-400 px-6 rounded-xl hover:bg-blue-400 py-4"
            >
              <NuxtLink href="/flat">Wohngeldantrag</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
