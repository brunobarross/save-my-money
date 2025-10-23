import type { Wallet } from '@/components/wallet/wallet.types'

const baseURL = 'http://localhost:8080'

export async function getWallets(): Promise<Wallet[]> {
  const response: Wallet[] = await $fetch(`${baseURL}/api/wallets`)
  return response
}

export async function createWallet(wallet: Wallet): Promise<Wallet> {
  const response: Wallet = await $fetch(`${baseURL}/api/wallets`, {
    method: 'POST',
    body: wallet,
  })
  return response
}
