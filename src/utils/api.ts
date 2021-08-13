import axios, { AxiosInstance } from 'axios';

import { PlaylistDto, TrackDto } from '../api/api.types';
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

  getPlaylists = (query?: string): Promise<PlaylistDto[]> =>
    this.axiosInstance
      .get('playlists', { params: { query } })
      .then(({ data }) => data);

  getPlaylistsByArtist = (query?: string): Promise<PlaylistDto[]> =>
    this.axiosInstance
      .get('playlists/artist', { params: { query } })
      .then(({ data }) => data);

  getPlaylist = (id: string): Promise<PlaylistDto> =>
    this.axiosInstance.get(`playlists/${id}`).then(({ data }) => data);

  findTracksByPlaylistId = (id: string): Promise<TrackDto[]> =>
    this.axiosInstance.get(`playlists/${id}/tracks`).then(({ data }) => data);

  share = (playlistId: string, guess: number): Promise<string> =>
    this.axiosInstance
      .get('share', { params: { playlistId, guess } })
      .then(({ data }) => data);
}
