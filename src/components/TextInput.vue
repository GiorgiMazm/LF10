<script setup lang="ts">
interface IpropsInterface {
  label: string;
  placeholder: string;
  fieldName: string;
}
const props = defineProps<IpropsInterface>();

const name = ref("");
function checkField() {
  const blackList = ["applicant", "firstParent", "secondParent"];
  return !blackList.some((item) => item === props.fieldName.slice(1));
}

function getInputType() {
  if (
    props.fieldName.slice(1) === "socSup" ||
    props.fieldName.slice(1) === "careSecurity"
  )
    return "checkbox";
  else if (props.fieldName.slice(1) === "eMail") return "email";
  else return "text";
}
</script>

<template>
  <div class="mt-3" v-if="checkField()">
    <label>{{ props.label }}</label>

    <select
      class="mx-4 border-2"
      v-if="props.fieldName.slice(1) === 'healthSecurity'"
      v-model="name"
      @change="
        $emit(
          'passInputValue',
          { name: props.fieldName, value: name },
          props.fieldName
        )
      "
    >
      <option selected hidden=""></option>
      <option>{{ $t("flatPage.placeholder.lawFamily") }}</option>
      <option>{{ $t("flatPage.placeholder.lawStudent") }}</option>
      <option>{{ $t("flatPage.placeholder.private") }}</option>
      <option>{{ $t("flatPage.placeholder.lawVolunteer") }}</option>
      <option>{{ $t("flatPage.placeholder.other") }}</option>
    </select>

    <input
      v-else
      v-model="name"
      @change="
        $emit(
          'passInputValue',
          { name: props.fieldName, value: name },
          props.fieldName
        )
      "
      class="ml-2 w-[30%] p-1 inline-block border border-gray-400 rounded"
      :type="getInputType()"
      :placeholder="props.placeholder"
    />
  </div>
</template>
