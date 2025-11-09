<template>
  <UCard data-testid="wallet-card">
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <h3 data-testid="wallet-card-name"  class="text-sm">{{ wallet.name }}</h3>
        <p data-testid="wallet-card-balance" class="text-lg font-medium mt-1">{{ wallet.balance }}</p>
      </div>
      <UButton
        v-if="canDelete"
        data-testid="wallet-card-delete"
        icon="i-lucide-trash-2"
        size="sm"
        color="error"
        variant="outline"
        class="cursor-pointer"
        @click="openDeleteModal"
      />
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { UiAppModalBase } from '#components'
import { removeWallet } from '@/components/wallet/wallet.queries'
import type { Wallet } from '@/components/wallet/wallet.types'
import { Queries } from '@/components/wallet/wallet.types'
import { useQueryClient } from '@tanstack/vue-query'

const queryClient = useQueryClient()

interface Props {
  wallet: Wallet
  canDelete: boolean
}
const props = defineProps<Props>()
const { mutateAsync, isSuccess, isError } = removeWallet()
const overlay = useOverlay()
const toast = useToast()
const modal = overlay.create(UiAppModalBase, {
  props: {
    onAccept: handleDeleteWallet,
    type: 'delete',
  },
})

async function handleDeleteWallet() {
  try {
    await mutateAsync(props.wallet?.id)
    if (isError.value) throw new Error('Error!')
    if (isSuccess.value) {
      queryClient.invalidateQueries({ queryKey: [Queries.FETCH_WALLETS] })
      modal.close()
    }
  } catch (error) {
    toast.add({ title: 'Ocorreu um erro ao deletar esta carteira!', color: 'error' })
    console.log(error)
  }
}

function openDeleteModal() {
  modal.open({
    title: `Deseja remover a carteira "${props.wallet.name}" ?`,
  })
}
</script>
