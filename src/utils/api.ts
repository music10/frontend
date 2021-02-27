import axios, { AxiosInstance } from 'axios';

import { IApi } from '../interfaces/api';
import { API_HOST } from './variables';

export class Api implements IApi {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_HOST,
    });
  }

  getCherryPickPlaylists = () =>
    this.axiosInstance.get('playlists/cherry-pick').then(({ data }) => data);

  searchPlaylists = (query?: string) =>
    this.axiosInstance
      .get(`playlists${query ? `?query=${query}` : ''}`)
      .then(({ data }) => data);

  searchPlaylistsByArtist = (query?: string) =>
    this.axiosInstance
      .get(`playlists/artist${query ? `?query=${query}` : ''}`)
      .then(({ data }) => data);

  getShareImage = (playlist: string, guess: number, all: number) =>
    this.axiosInstance
      .get('share', { params: { playlist, guess, all } })
      .then(({ data }) => data);
}
