<template>
  <div class="card flex justify-center">
    <Menu :model="items" />
  </div>
  <div class="card flex justify-center">
    <Button
      type="button"
      @click="toggle"
      aria-haspopup="true"
      aria-controls="overlay_menu" />
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
  </div>
  <div class="card text-center">
    <p class="mb-0">
      Right-Click anywhere on this page to view the global ContextMenu.
    </p>
    <ContextMenu global :model="items2" />
  </div>
  <div class="card flex justify-center">
    <TieredMenu :model="items" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import ContextMenu from "primevue/contextmenu"
import Menu from "primevue/menu"
import Button from "primevue/button"
import TieredMenu from "primevue/tieredmenu"

const menu = ref()
const toggle = (event) => {
  menu.value.toggle(event)
}
const items = ref([
  {
    label: "Documents",
    items: [
      {
        label: "New",
        icon: "pi pi-plus",
      },
      {
        label: "Search",
        icon: "pi pi-search",
      },
    ],
  },
  {
    label: "Profile",
    items: [
      {
        label: "Settings",
        icon: "pi pi-cog",
      },
      {
        label: "Logout",
        icon: "pi pi-sign-out",
      },
    ],
  },
])

const items2 = ref([
  {
    label: "Translate",
    icon: "pi pi-language",
  },
  {
    label: "Speech",
    icon: "pi pi-volume-up",
    items: [
      {
        label: "Start",
        icon: "pi pi-caret-right",
      },
      {
        label: "Stop",
        icon: "pi pi-pause",
      },
    ],
  },
  {
    separator: true,
  },
  {
    label: "Print",
    icon: "pi pi-print",
  },
])

const items3 = ref([
  {
    label: "File",
    icon: "pi pi-file",
    items: [
      {
        label: "New",
        icon: "pi pi-plus",
        items: [
          {
            label: "Document",
            icon: "pi pi-file",
          },
          {
            label: "Image",
            icon: "pi pi-image",
          },
          {
            label: "Video",
            icon: "pi pi-video",
          },
        ],
      },
      {
        label: "Open",
        icon: "pi pi-folder-open",
      },
      {
        label: "Print",
        icon: "pi pi-print",
      },
    ],
  },
  {
    label: "Edit",
    icon: "pi pi-file-edit",
    items: [
      {
        label: "Copy",
        icon: "pi pi-copy",
      },
      {
        label: "Delete",
        icon: "pi pi-times",
      },
    ],
  },
  {
    label: "Search",
    icon: "pi pi-search",
  },
  {
    separator: true,
  },
  {
    label: "Share",
    icon: "pi pi-share-alt",
    items: [
      {
        label: "Slack",
        icon: "pi pi-slack",
      },
      {
        label: "Whatsapp",
        icon: "pi pi-whatsapp",
      },
    ],
  },
])
</script>
