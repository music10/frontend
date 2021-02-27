import io, { Socket } from 'socket.io-client';

import { ITrack } from '../interfaces';
import { WS_HOST } from './variables';

export interface IResult {
  progress: boolean[];
  isEnd: boolean;
}

export interface IWsAnswerNext {
  mp3: string;
  tracks: ITrack[];
}

export interface IWsAnswerChoose {
  correct: number;
  result: IResult;
}

export class WS {
  private socket: typeof Socket;

  constructor() {
    this.socket = io(`${WS_HOST}/game`, {
      transports: ['websocket'],
    });
  }

  setPlaylist = (playlistId: string) =>
    this.socket.emit('setPlaylist', playlistId);

  next = async () => this.socket.emit('next');

  choose = async (trackId: number) => this.socket.emit('choose', trackId);

  reconnect = async () => {
    await this.socket.disconnect();
    this.socket.connect();
  };
}
