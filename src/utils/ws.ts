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

  destructor() {
    this.socket.disconnect().close();
  }

  setPlaylist = async (playlistId: string, type?: Type) =>
    this.socket.emit('setPlaylist', playlistId, type);

  next = async () => this.socket.emit('next');

  choose = async (trackId: string) => this.socket.emit('choose', trackId);

  hint50 = async (trackIds: string[]) =>
    this.socket.emit('hint/50-50', trackIds);

  hintReplay = async () => this.socket.emit('hint/replay');

  getResult = async () => this.socket.emit('getResult');

  reconnect = async () => {
    await this.socket.disconnect();
    this.socket.connect();
  };
}
