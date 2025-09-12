<template>
  <div class="bg-red-100">
    <SelectButton v-model="value" :options="options1" />
    <SelectButton v-model="value" :options="options2" />
    <SelectButton v-model="value" :options="options3" />
    <div>
      <SelectButton v-model="value" :options="options2" size="small" />
      <SelectButton v-model="value" :options="options2" />
      <SelectButton v-model="value" :options="options2" size="large" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import SelectButton from "primevue/selectbutton"

const value = ref("One-Way")
const options1 = ref(["One-Way"])
const options2 = ref(["One-Way", "Return"])
const options3 = ref(["One-Way", "Return", "Three-Way"])
</script>
