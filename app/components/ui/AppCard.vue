<template>
  <UCard>
    <slot name="content">
      <h3 class="text-sm">{{ title }}</h3>
      <p class="text-base font-medium mt-2">{{ content }}</p>
    </slot>
  </UCard>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  content?: string;
}
withDefaults(defineProps<Props>(), {
  title: "Título",
  content: "Conteúdo",
});
</script>
