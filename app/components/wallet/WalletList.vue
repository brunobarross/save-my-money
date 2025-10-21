<template>
  <div class="grid grid-cols-12 gap-4">
    <WalletCard v-for="i in WalletList" :key="i.id" :class="cardColsSpan" :name="i.name" :balance="i.balance" />
  </div>
</template>

<script setup lang="ts">
import { requestWallets } from '@/components/wallet/wallet.queries'
const props = defineProps({
  rows: {
    type: Number,
    default: 3,
  },
})
const cardColsSpan = computed(() => {
  return `col-span-${12 / props.rows}`
})

const { data: WalletList } = requestWallets()
</script>
