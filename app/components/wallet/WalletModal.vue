<template>
  <UModal title="Nova Carteira">
    <UButton  label="Nova carteira" size="md" class="cursor-pointer" />

    <template #body>
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormField label="Nome" name="name">
          <UInput v-model="state.name" class="w-full" size="lg" />
        </UFormField>

        <UFormField label="Orçamento" name="balance">
          <UInput v-model="state.balance" class="w-full" size="lg" type="number" />
        </UFormField>

        <UButton class="w-full mt-4 justify-center cursor-pointer" type="submit" size="lg"
          >Enviar</UButton
        >
      </UForm>
    </template>
  </UModal>
</template>
<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { createNewWallet } from '@/components/wallet/wallet.queries'
import * as v from 'valibot'
import { useQueryClient } from '@tanstack/vue-query'
import { Queries } from '@/components/wallet/wallet.types'

type Schema = v.InferOutput<typeof schema>

const queryClient = useQueryClient()
const { mutateAsync, isSuccess, isError } = createNewWallet()
const state = reactive({
  name: 'Salário Outubro',
  balance: 4900,
})
const schema = v.object({
  name: v.pipe(v.string()),
  balance: v.pipe(v.number()),
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await mutateAsync(event.data)
    if (isError.value) throw new Error('Error!')
    if (isSuccess.value) queryClient.invalidateQueries({ queryKey: [Queries.FETCH_WALLETS] })
  } catch (error) {
    console.log(error)
  }
}
</script>
