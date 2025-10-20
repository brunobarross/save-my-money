<template>
  <div class="px-6 py-8 w-full">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Bem vindo, fulano!</h1>
      <UButton icon="" label="Nova carteira" class="cursor-pointer" />
    </div>
    <HomeWallets />
    <div class="mt-6 grid grid-cols-12 gap-6">
      <HomeLastTransactions class="col-span-6" />
      <HomeTotalMoney class="col-span-6" />
    </div>
  </div>
</template>
