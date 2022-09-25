import axios, { AxiosInstance } from 'axios';

import { PlaylistDto, Type } from '../api/api.types';
import { API_HOST } from './variables';
import { Bugsnag } from './bugsnag';

export class Api {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_HOST,
    });
  }

  getCherryPickPlaylists = (): Promise<PlaylistDto[]> => {
    return this.axiosInstance
      .get('playlists/cherry-pick')
      .then(({ data }) => data)
      .catch(Bugsnag.notify);
  };

  getRandomPlaylist = (): Promise<PlaylistDto> =>
    this.axiosInstance
      .get('playlists/random')
      .then(({ data }) => data)
      .catch(Bugsnag.notify);

  getPlaylists = (type: Type, query?: string): Promise<PlaylistDto[]> =>
    this.axiosInstance
      .get(`playlists/${type}`, { params: { query } })
      .then(({ data }) => data)
      .catch(Bugsnag.notify);

  getPlaylist = (type: Type, id: string): Promise<PlaylistDto> =>
    this.axiosInstance
      .get(`playlists/${type}/${id}`)
      .then(({ data }) => data)
      .catch(Bugsnag.notify);

  share = (
    playlistId: string | number,
    type: Type,
    guess: number,
  ): Promise<string> =>
    this.axiosInstance
      .get('share', { params: { playlistId, type, guess } })
      .then(({ data }) => data)
      .catch(Bugsnag.notify);
}
