<script setup lang="ts">
interface propsInterface {
  label: string;
  placeholder: string;
}
const props = defineProps<propsInterface>();
</script>

<template>
  <div class="mt-3">
    <label>{{ props.label }}</label>
    <input
      class="ml-2 w-[10%] p-1 inline-block border border-gray-400 rounded"
      type="text"
      :placeholder="props.placeholder"
    />
  </div>
</template>
