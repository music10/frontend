import { createContext } from 'react';

export interface ICoinsContext {
  coins: number;
  addCoins: (item: number) => void;
}

export const CoinsContext = createContext({} as ICoinsContext);
