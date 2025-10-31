<script setup lang="ts">
import TransactionCard from '../transcations/TransactionCard.vue';

</script>

<template>
  <div>
    <h3 class="font-semibold text-lg">Últimas transações</h3>
    <ul class="mt-4 flex flex-col gap-2">
      <TransactionCard/>
    </ul>
  </div>
</template>
