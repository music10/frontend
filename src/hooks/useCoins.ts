import { useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Bugsnag } from '../utils';
import { useStoreKey } from './useStoreKey';
import { ICoinsContext } from '../contexts';

const DEFAULT_COINS = '0';

export const useCoins = (): ICoinsContext => {
  const { value: coins, trigger } = useStoreKey<string>('coins', DEFAULT_COINS);

  const addCoins = useCallback(
    (addCoins: number) => {
      AsyncStorage.setItem('coins', `${+(coins ?? DEFAULT_COINS) + addCoins}`)
        .then(trigger)
        .catch(Bugsnag.notify);
    },
    [coins, trigger],
  );

  return {
    coins: +(coins ?? DEFAULT_COINS),
    addCoins,
  };
};
