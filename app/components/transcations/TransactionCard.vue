<template>
  <UCard>
    <div class="flex items-center flex-nowrap">
      <UAvatar class="w-10 h-10 mr-4" :text="avatarName" />
      <div>
        <h3 class="text-lg font-medium">{{ amount }}</h3>
        <p class="text-sm mt-1">{{ name }}</p>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: 'Teste',
  },
  amount: {
    type: Number,
    default: 0,
  },
})

const avatarName = computed(() => props.name[0])
</script>
