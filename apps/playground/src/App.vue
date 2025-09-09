<template>
  <div class="card flex justify-center">
    <Breadcrumb :home="home" :model="items" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Breadcrumb from "primevue/breadcrumb"

const home = ref({
  icon: "pi pi-home",
  route: "/introduction",
})
const items = ref([
  { label: "Components" },
  { label: "Form" },
  { label: "InputText", route: "/inputtext" },
])
</script>
