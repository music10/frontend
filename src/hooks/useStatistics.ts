import { useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Bugsnag } from '../utils';
import { useStoreKey } from './useStoreKey';
import { IStatistics } from '../types';
import { IStatisticsContext } from '../contexts';

const DEFAULT_STATISTICS: IStatistics = {
  games: 0,
  guess: 0,
};

export const useStatistics = (): IStatisticsContext => {
  const { value: statistics, trigger } = useStoreKey<IStatistics>(
    'statistics',
    DEFAULT_STATISTICS,
  );

  const updateStatistics = useCallback(
    (guess: number) => {
      AsyncStorage.setItem(
        'statistics',
        JSON.stringify({
          games: (statistics?.games ?? 0) + 1,
          guess: (statistics?.guess ?? 0) + guess,
        }),
      )
        .then(trigger)
        .catch(Bugsnag.notify);
    },
    [statistics, trigger],
  );
  const clearStatistics = useCallback(() => {
    AsyncStorage.setItem('statistics', JSON.stringify(DEFAULT_STATISTICS))
      .then(trigger)
      .catch(Bugsnag.notify);
  }, [statistics, trigger]);

  return {
    statistics,
    updateStatistics,
    clearStatistics,
  };
};
