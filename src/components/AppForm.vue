<script setup lang="ts">
import FormDirector from "~/types/FormDirector";
import Form from "~/types/Form";
const { addForm } = useForm();

const router = useRouter();

const director = new FormDirector("", "", "", "", "", 0, "", "", "");
const form = director.builder.buildForm();
async function createForm() {
  //@ts-ignore
  dataObject.value._isApproved = null;
  await addForm(dataObject.value);
  await router.push("/");
}

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
        v-for="(value, key) in form"
        :label="$t(`flatPage.label.${key.slice(1)}`)"
        :placeholder="$t(`flatPage.placeholder.${key.slice(1)}`)"
        :field-name="key"
        @passInputValue="createObject"
      />
      <button class="my-2" @click.prevent="createForm">
        {{ $t("flatPage.submit") }}
      </button>
      <br />
      <NuxtLink href="/">{{ $t("flatPage.cancel") }}</NuxtLink>
    </form>
  </div>
</template>
