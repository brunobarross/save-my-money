export interface Wallet {
  id?: number;
  name: string;
  balance: string | number;
}

export const enum Queries {
 FETCH_WALLETS = 'fetch-wallets'
}
