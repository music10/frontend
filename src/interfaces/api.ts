import { IPlaylist } from './playlist.interface';

export interface IApi {
  getPlaylists: (query: string) => Promise<IPlaylist[]>;
  getShareImage: (
    playlist: string,
    guess: number,
    all: number,
  ) => Promise<string>;
}
