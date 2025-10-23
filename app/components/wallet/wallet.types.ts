export interface Wallet {
  id?: number;
  name: string;
  balance: number;
}

export const enum Queries {
 FETCH_WALLETS = 'fetch-wallets'
}
