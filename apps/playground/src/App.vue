<template>
  <div class="card flex justify-center mx-auto">
    <Paginator
      :rows="10"
      :totalRecords="120"
      :rowsPerPageOptions="[10, 20, 30]"></Paginator>
  </div>
</template>

<script setup>
// import { ref } from "vue"
import Paginator from "primevue/paginator"
</script>
