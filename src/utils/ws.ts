import io, { Socket } from 'socket.io-client';
import { Type } from '../api/api.types';

import { WS_HOST } from './variables';

export class WS {
  private socket: Socket;

  constructor() {
    this.socket = io(`${WS_HOST}/game`, {
      transports: ['websocket'],
      autoConnect: true,
    });
  }

  setPlaylist = async (playlistId: string, type?: Type) =>
    this.socket.emit('setPlaylist', playlistId, type);

  next = async () => this.socket.emit('next');

  choose = async (trackId: string | number) =>
    this.socket.emit('choose', trackId);

  getResult = async () => this.socket.emit('getResult');

  reconnect = async () => {
    await this.socket.disconnect();
    this.socket.connect();
  };
}
