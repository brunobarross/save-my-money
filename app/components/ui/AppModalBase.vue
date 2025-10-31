<template>
  <UModal :close="{ onClick: () => emit('close', false) }">
    <template #footer>
      <div class="flex justify-end gap-2 flex-1">
        <UButton color="neutral" label="Cancelar" @click="emit('close', false)" />
        <UButton :color="color" label="Confirmar" @click="onAccept" />
      </div>
    </template>
  </UModal>
</template>
<script setup lang="ts">
const props = defineProps<{
  onAccept: () => void
  type: string
}>()
const emit = defineEmits<{ close: [boolean] }>()

const color = computed(() => {
  switch (props.type) {
    case 'delete':
      return 'error'
    default:
      return 'primary'
  }
})
</script>
