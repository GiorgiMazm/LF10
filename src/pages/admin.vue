<script setup lang="ts">
const { getForm, putForm } = useForm();
const formArray: { _id: string }[] = await getForm();
const approve = (id: string) => {
  putForm(id);
};

function decline(id: string) {
  console.log(id);
}
</script>

<template>
  <div>
    <section>
      <div class="container mx-auto">
        <h1 class="text-center text-5xl py-8">Administrator Page</h1>
        <div class="flex flex-wrap">
          <div class="border-2 p-5 m-3" v-for="form in formArray">
            <p v-for="(value, key) in form">
              {{ $t(`flatPage.label.${key.slice(1)}`) }}:
              {{ value ?? "In approval" }}
            </p>
            <div class="flex justify-around">
              <button
                class="bg-lime-400 px-5 py-2 rounded-2xl mt-4 hover:bg-lime-600"
                @click="approve(form._id)"
              >
                Approve
              </button>

              <button
                class="bg-red-600 px-5 py-2 rounded-2xl mt-4 hover:bg-red-800"
                @click="decline(form._id)"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
