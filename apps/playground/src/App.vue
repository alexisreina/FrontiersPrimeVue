<script setup lang="ts">
import Avatar from "primevue/avatar"
import AvatarGroup from "primevue/avatargroup" //Optional for grouping
import OverlayBadge from "primevue/overlaybadge"
</script>

<template>
  <div class="p-12">
    <OverlayBadge value="4" severity="danger" class="inline-flex">
      <Avatar
        class="p-overlay-badge"
        image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg"
        size="xlarge" />
    </OverlayBadge>

    <Avatar
      label="JD"
      class="flex items-center justify-center mr-2"
      size="xlarge" />

    <Avatar
      class="mr-2"
      size="xlarge"
      label="JD"
      image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg"
      shape="circle" />
  </div>
</template>
