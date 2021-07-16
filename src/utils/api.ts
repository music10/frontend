import axios, { AxiosInstance } from 'axios';

import { IApi } from '../interfaces/api';
import { IPlaylist } from '../interfaces';
import { API_HOST } from './variables';

export class Api implements IApi {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_HOST,
    });
  }

  getCherryPickPlaylists = (): Promise<IPlaylist[]> =>
    this.axiosInstance.get('playlists/cherry-pick').then(({ data }) => data);

  searchPlaylists = (query?: string): Promise<IPlaylist[]> =>
    this.axiosInstance
      .get('playlists', { params: { query } })
      .then(({ data }) => data);

  searchPlaylistsByArtist = (query?: string): Promise<IPlaylist[]> =>
    this.axiosInstance
      .get('playlists/artist', { params: { query } })
      .then(({ data }) => data);

  getPlaylistById = (id: string): Promise<IPlaylist> =>
    this.axiosInstance.get(`playlists/${id}`).then(({ data }) => data);

  getShareImage = (playlistId: string, guess: number): Promise<string> =>
    this.axiosInstance
      .get('share', { params: { playlistId, guess } })
      .then(({ data }) => data);
}
