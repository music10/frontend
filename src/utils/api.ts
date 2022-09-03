import axios, { AxiosInstance } from 'axios';

import { PlaylistDto, Type } from '../api/api.types';
import { API_HOST } from './variables';

export class Api {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_HOST,
    });
  }

  getCherryPickPlaylists = (): Promise<PlaylistDto[]> =>
    this.axiosInstance.get('playlists/cherry-pick').then(({ data }) => data);

  getRandomPlaylist = (): Promise<PlaylistDto> =>
    this.axiosInstance.get('playlists/random').then(({ data }) => data);

  getPlaylists = (type: Type, query?: string): Promise<PlaylistDto[]> =>
    this.axiosInstance
      .get(`playlists/${type}`, { params: { query } })
      .then(({ data }) => data);

  getPlaylist = (type: Type, id: string): Promise<PlaylistDto> =>
    this.axiosInstance.get(`playlists/${type}/${id}`).then(({ data }) => data);

  share = (playlistId: string | number, guess: number): Promise<string> =>
    this.axiosInstance
      .get('share', { params: { playlistId, guess } })
      .then(({ data }) => data);
}
