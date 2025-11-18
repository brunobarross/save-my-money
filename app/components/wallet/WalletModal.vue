<template>
  <UModal title="Nova Carteira">
    <template #body>
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormField label="Nome" name="name">
          <UInput
            v-model="state.name"
            class="w-full"
            size="lg"
            data-testid="wallet-modal-input-name"
          />
        </UFormField>

        <UFormField label="Orçamento" name="balance">
          <UInput
            v-model="state.balance"
            v-maska
            data-testid="wallet-modal-input-balance"
            data-maska="9 99#.##"
            data-maska-tokens="9:[0-9]:repeated"
            data-maska-reversed
            class="w-full"
            size="lg"
          />
        </UFormField>
        <UButton
          class="w-full mt-4 justify-center cursor-pointer"
          data-testid="wallet-modal-send-button"
          type="submit"
          size="lg"
          :disabled="disableSendButton"
          >Enviar</UButton
        >
      </UForm>
    </template>
  </UModal>
</template>
<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { createNewWallet } from "@/components/wallet/wallet.queries";
import * as v from "valibot";
import { useQueryClient } from "@tanstack/vue-query";
import { Queries } from "@/components/wallet/wallet.types";
const props = defineProps<{
  onSave: () => void;
  type: string;
}>();
type Schema = v.InferOutput<typeof schema>;

const queryClient = useQueryClient();
const { mutateAsync } = createNewWallet();

const state = reactive({
  name: "",
  balance: "",
});
const schema = v.object({
  name: v.pipe(
    v.string("O nome deve ser um texto."),
    v.minLength(1, "Por favor, insira um nome.")
  ),
  balance: v.pipe(
    v.string("O orçamento deve ser um texto."),
    v.minLength(1, "Por favor, insira um orçamento.")
  ),
});

const toast = useToast();

const disableSendButton = computed(() => {
  return Object.values(state).some((i) => !i.length);
});

function normalizeBalanceValue(val: string): number {
  return parseFloat(val.replace(" ", ""));
}
async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await mutateAsync({
      ...event.data,
      balance: normalizeBalanceValue(event.data.balance),
    });
    queryClient.invalidateQueries({ queryKey: [Queries.FETCH_WALLETS] });
    toast.add({ title: "Carteira criada com sucesso!" });
  } catch (error) {
    console.log(error);
    toast.add({
      title: "Ocorreu um erro ao criar a carteira!",
      color: "error",
    });
  } finally {
    props.onSave();
  }
}
</script>
