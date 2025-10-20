<template>
  <UDashboardGroup>
    <AppSidebar/>
    <slot />
  </UDashboardGroup>
</template>
<script setup lang="ts">
import AppSidebar from '~/components/ui/AppSidebar.vue';

</script>