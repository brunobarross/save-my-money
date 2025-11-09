<template>
  <div class="px-6 py-8 w-full overflow-x-hidden">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Bem vindo, fulano!</h1>
      <UButton
        label="Nova carteira"
        size="md"
        class="cursor-pointer"
        @click="modal.open()"
      />
    </div>
    <WalletListCarousel class="pt-6" />
    <div class="mt-6 grid grid-cols-12 gap-6">
      <HomeLastTransactions class="col-span-6" />
      <HomeTotalMoney class="col-span-6" />
    </div>
  </div>
</template>
<script setup lang="ts">
import WalletModal from "~/components/wallet/WalletModal.vue";

const modal = useOverlay().create(WalletModal, {
  props: {
    onSave: closeModal,
  },
});

function closeModal() {
  modal.close();
}
</script>
