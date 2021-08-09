import { Components } from '../api/api.types';

export interface IApi {
  getCherryPickPlaylists: () => Promise<Components.Schemas.PlaylistDto[]>;
  searchPlaylists: (query: string) => Promise<Components.Schemas.PlaylistDto[]>;
  searchPlaylistsByArtist: (
    query: string,
  ) => Promise<Components.Schemas.PlaylistDto[]>;
  getShareImage: (
    playlist: string,
    guess: number,
    all: number,
  ) => Promise<string>;
}
