<template>
  <UModal title="Nova Carteira">
    <template #body>
      <WalletModalForm @on-save="onSave" />
    </template>
  </UModal>
</template>
<script setup lang="ts">
import WalletModalForm from "./WalletModalForm.vue";
defineProps<{
  onSave: () => void;
  type: string;
}>();

</script>
