import type { Wallet } from '@/components/wallet/wallet.types'
import { getWallets } from '@/components/wallet/wallet.api'
import type { UseQueryReturnType } from '@tanstack/vue-query'

export function requestWallets(staleTime: number = 0): UseQueryReturnType<Wallet[], Error> {
  return useQuery({
    queryKey: ['fetch-wallets'],
    queryFn: () => getWallets(),
    staleTime,
  })
}
