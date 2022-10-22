import { createContext } from 'react';
import { PlaylistDto } from '../api/api.types';

export interface IFavoritesContext {
  favorites: PlaylistDto[];
  add: (item: PlaylistDto) => void;
  remove: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const FavoritesContext = createContext({} as IFavoritesContext);
