import { IPlaylist } from './playlist.interface';

export interface IApi {
  getCherryPickPlaylists: () => Promise<IPlaylist[]>;
  searchPlaylists: (query: string) => Promise<IPlaylist[]>;
  searchPlaylistsByArtist: (query: string) => Promise<IPlaylist[]>;
  getShareImage: (
    playlist: string,
    guess: number,
    all: number,
  ) => Promise<string>;
}
