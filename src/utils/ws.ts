import io, { Socket } from 'socket.io-client';

import { IPlaylist, ITrack } from '../interfaces';
import { WS_HOST } from './variables';

export interface IResult {
  progress: boolean[];
  isEnd: boolean;
}

export interface IWsAnswerNext {
  mp3: string;
  tracks: ITrack[];
}

export interface IWsAnswerResult {
  playlist: IPlaylist;
  guessed: number;
  text: string;
}

export interface IWsAnswerChoose {
  correct: string;
  result: IResult;
}

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
