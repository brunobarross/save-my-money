import { type Wallet, Queries } from '@/components/wallet/wallet.types'
import { getWallets, createWallet } from '@/components/wallet/wallet.api'
import type { UseQueryReturnType } from '@tanstack/vue-query'

export function requestWallets(staleTime: number = 0): UseQueryReturnType<Wallet[], Error> {
  return useQuery({
    queryKey: [Queries.FETCH_WALLETS],
    queryFn: () => getWallets(),
    staleTime,
  })
}

export function createNewWallet() {
  return useMutation({
    mutationFn: (wallet: Wallet) => createWallet(wallet),
  })
}
