<template>
  <UCarousel
    v-slot="{ item }"
    class="w-full max-w-max"
    :items="WalletList"
    :ui="{ item: 'basis-1/4', viewport: 'custom-viewport' }"
    auto-height
  >
    <WalletCard :name="item.name" :balance="item.balance" />
  </UCarousel>
</template>

<script setup lang="ts">
import { requestWallets } from '@/components/wallet/wallet.queries'

const { data: WalletList } = requestWallets()
</script>

<style>
.custom-viewport {
  padding: 0.0625rem;
}
</style>
