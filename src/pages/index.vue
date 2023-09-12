<script setup lang="ts"></script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div class="text-center pt-20">
          <h1 class="text-5xl">{{ $t("home.title") }}</h1>
          <h2 class="text-3xl pt-12 pb-4">{{ $t("home.select") }}</h2>
          <ul class="flex flex-col items-center">
            <li
              class="bg-lime-400 w-[15%] px-6 rounded-xl hover:bg-blue-400 py-4 my-4"
            >
              <NuxtLink href="/flat">{{ $t("flatPage.title") }}</NuxtLink>
            </li>

            <li
              class="w-[15%] bg-lime-400 px-6 rounded-xl hover:bg-blue-400 py-4"
            >
              <NuxtLink href="/flat">{{ $t("flatPage.title") }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
