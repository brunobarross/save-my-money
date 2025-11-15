<template>
  <ul v-if="!walletsIsEmpty">
    <li v-for="item in WalletList" :key="item.id">
      <WalletCard can-delete class="mt-4 w-full" :wallet="item" />
    </li>
  </ul>
  <UEmpty
    v-else
    class="mt-8"
    variant="outline"
    icon="i-lucide-wallet"
    title="Sem carteiras."
    description="Não há carteiras a serem mostradas aqui."
  />
</template>

<script setup lang="ts">
import { requestWallets } from "@/components/wallet/wallet.queries";

const { data: WalletList} = requestWallets(5 * 60 * 1000);

const walletsIsEmpty = computed(() => !WalletList.value?.length);
</script>

<style>
.custom-viewport {
  padding: 0.0625rem;
}
</style>
