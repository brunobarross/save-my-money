<template>
  <main class="w-full px-6 py-8 overflow-x-hidden">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Carteiras</h1>
      <WalletModal />
    </div>
    <div class="max-w-[800px] w-full">
      <WalletList class="pt-6" />
    </div>
  </main>
</template>
