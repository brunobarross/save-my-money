<template>
  <div>
    <h3 class="font-semibold text-lg">Dinheiro Total</h3>
    <ul class="mt-4">
      <UCard class="col-span-4 p-2">
        <div class="flex items-center justify-between">
          <p class="text-base font-medium mt-1">{{ value }}</p>
          <p class="text-base font-medium mt-1">{{ currency }}</p>
        </div>
      </UCard>
    </ul>
  </div>
</template>
<script setup lang="ts">
interface Props {
  value?: string | number;
  currency?: string;
}

withDefaults(defineProps<Props>(), {
  value: "0.00",
  currency: "BRL",
});
</script>
