<template>
  <UCard  >
      <div class="flex flex-col">
        <h3 class="text-sm">{{ name }}</h3>
        <p class="text-base font-medium mt-1">{{balance}}</p>
      </div>

  </UCard>
</template>

<script setup lang="ts">

defineProps({
  name: {
    type: String,
    default: 'Teste'
  },
  balance: {
    type: Number,
    default: 0
  },

})

</script>
