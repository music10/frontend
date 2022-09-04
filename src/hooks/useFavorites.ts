import { useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { PlaylistDto } from '../api/api.types';
import { Bugsnag } from '../utils';
import { useStoreKey } from './useStoreKey';
import { IFavoritesContext } from '../contexts';

const DEFAULT_FAVORITES = [];

export const useFavorites = (): IFavoritesContext => {
  const { value: favorites, trigger } = useStoreKey<PlaylistDto[]>(
    'favorites',
    DEFAULT_FAVORITES,
  );

  const add = useCallback(
    (item: PlaylistDto) => {
      AsyncStorage.setItem(
        'favorites',
        JSON.stringify([item, ...(favorites ?? [])]),
      )
        .then(trigger)
        .catch(Bugsnag.notify);
    },
    [favorites, trigger],
  );

  const remove = useCallback(
    (id: string) => {
      AsyncStorage.setItem(
        'favorites',
        JSON.stringify((favorites ?? []).filter((p) => p.id !== id)),
      )
        .then(trigger)
        .catch(Bugsnag.notify);
    },
    [favorites, trigger],
  );

  const isFavorite = useCallback(
    (id: string) => {
      return !!favorites?.find((p) => p.id === id);
    },
    [favorites],
  );

  return {
    favorites: favorites ?? DEFAULT_FAVORITES,
    add,
    remove,
    isFavorite,
  };
};
