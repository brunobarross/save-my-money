<template>
  <UDashboardSidebar
    collapsible
    resizable
    :ui="{ footer: 'border-t border-default' }"
  >
    <template #header>
      <h3 class="text-2xl uppercase font-semibold">Save My Money</h3>
    </template>

    <template #default="{ collapsed }">
      <UNavigationMenu
        :collapsed="collapsed"
        :items="items[0]"
        orientation="vertical"
      />
    </template>
  </UDashboardSidebar>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[][] = [
  [
    {
      label: "Home",
      icon: "i-lucide-house",
      to: "/",

    },
    {
      label: "Carteiras",
      icon: "i-lucide-wallet",
      to: "/wallet",
    },
  ],
];
</script>
