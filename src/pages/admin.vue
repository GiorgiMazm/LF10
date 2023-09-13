<script setup lang="ts">
const { getForm, putForm } = useForm();
const formArray = ref(await getForm());
const setStatus = async (id: string, status: boolean) => {
  await putForm(id, status);
  formArray.value = await getForm();
};
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <h1 class="text-center text-5xl py-8">{{ $t("admin.title") }}</h1>
        <div class="flex flex-wrap">
          <div class="border-2 p-5 m-3" v-for="form in formArray">
            <p v-for="(value, key) in form">
              {{ $t(`flatPage.label.${key.slice(1)}`) }}:
              {{ value ?? $t("admin.status") }}
            </p>
            <div class="flex justify-around">
              <button
                class="bg-lime-400 px-5 py-2 rounded-2xl mt-4 hover:bg-lime-600"
                @click="setStatus(form._id, true)"
              >
                {{ $t("admin.approve") }}
              </button>

              <button
                class="bg-red-600 px-5 py-2 rounded-2xl mt-4 hover:bg-red-800"
                @click="setStatus(form._id, false)"
              >
                {{ $t("admin.decline") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
