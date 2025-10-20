<template>
  <div>
    <h3 class="font-semibold text-lg">Últimas transações</h3>
    <ul class="mt-4 flex flex-col gap-2">
      <UCard v-for="i in 10" :key="i" class="col-span-4">
        <div class="flex items-center flex-nowrap">
          <UAvatar class="w-10 h-10 mr-4" text="N" />
          <div>
            <h3 class="text-sm">Nome da carteira</h3>
            <p class="text-base font-medium mt-1">asdasdads</p>
          </div>
        </div>
      </UCard>
    </ul>
  </div>
</template>
