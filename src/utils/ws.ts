import io, { Socket } from 'socket.io-client';

import { WS_HOST } from './variables';

export class WS {
  private socket: Socket;

  constructor() {
    this.socket = io(`${WS_HOST}/game`, {
      transports: ['websocket'],
    });
  }

  setPlaylist = async (playlistId: string) =>
    this.socket.emit('setPlaylist', playlistId);

  next = async () => this.socket.emit('next');

  choose = async (trackId: number) => this.socket.emit('choose', trackId);

  getResult = async () => this.socket.emit('getResult');

  reconnect = async () => {
    await this.socket.disconnect();
    this.socket.connect();
  };
}
