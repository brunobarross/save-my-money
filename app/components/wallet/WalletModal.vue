<template>
  <UModal title="Nova Carteira">
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
const props = defineProps<{
  onSave: () => void
  type: string
}>()
type Schema = v.InferOutput<typeof schema>

const queryClient = useQueryClient()
const { mutateAsync} = createNewWallet()
const state = reactive({
  name: 'Salário Outubro',
  balance: "4900",
})
const schema = v.object({
  name: v.pipe(v.string()),
  balance: v.pipe(v.string()),
})

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await mutateAsync(event.data)
    queryClient.invalidateQueries({ queryKey: [Queries.FETCH_WALLETS] })
    toast.add({title: "Carteira criada com sucesso!"})
  } catch (error) {
    console.log(error)
    toast.add({title: "Ocorreu um erro ao criar a carteira!"})
  } finally {
    props.onSave()
  }
}


</script>
