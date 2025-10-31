export interface Wallet {
  id?: number;
  name: string;
  balance: string;
}

export const enum Queries {
 FETCH_WALLETS = 'fetch-wallets'
}
