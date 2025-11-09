<template>
  <main class="w-full px-6 py-8 overflow-x-hidden">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Carteiras</h1>
      <UButton
        label="Nova carteira"
        size="md"
        class="cursor-pointer"
        @click="modal.open()"
      />
    </div>
    <div class="max-w-[800px] w-full">
      <WalletList class="pt-6" />
    </div>
  </main>
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
