<script setup lang="ts">
interface propsInterface {
  label: string;
  placeholder: string;
  fieldName: string;
}
const props = defineProps<propsInterface>();

const name = ref("");
function checkField() {
  const blackList = ["applicant", "firstParent", "secondParent"];
  return !blackList.some((item) => item === props.fieldName.slice(1));
}

function getInputType() {
  if (props.fieldName.slice(1) === "socSup") return "checkbox";
  else if (props.fieldName.slice(1) === "eMail") return "email";
  else return "text";
}
</script>

<template>
  <div class="mt-3" v-if="checkField()">
    <label>{{ props.label }}</label>

    <input
      v-model="name"
      @keyup="
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
