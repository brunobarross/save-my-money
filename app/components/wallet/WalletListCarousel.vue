<template>
  <UCarousel
    v-slot="{ item }"
    class="w-full "
    :items="WalletList"
    :ui="{ item: 'basis-1/4', viewport: 'custom-viewport' }"
    auto-height
  >
    <WalletCard :wallet="item" :can-delete="false" />
  </UCarousel>
</template>

<script setup lang="ts">
import { requestWallets } from '@/components/wallet/wallet.queries'

const { data: WalletList } = requestWallets(5 * 60 * 1000)
</script>

<style>
.custom-viewport {
  padding: 0.0625rem;
  width: 100%;
}
</style>
