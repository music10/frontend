import React, { Dispatch, SetStateAction } from 'react';
import { IResult } from '../utils';

export enum GameScreen {
  PLAYLIST,
  GAME,
  RESULT,
}

export interface IGameState {
  playlistName?: string;
  isSelectTrack?: boolean;
}

interface GameContext {
  screen: GameScreen;
  setScreen: Dispatch<SetStateAction<GameScreen>>;
  result: IResult;
  setResult: Dispatch<SetStateAction<IResult>>;
  gameState: IGameState;
  setGameState: Dispatch<SetStateAction<IGameState>>;
}

export const GameContext = React.createContext<GameContext>({
  screen: GameScreen.PLAYLIST,
  setScreen: {} as Dispatch<SetStateAction<GameScreen>>,
  result: {} as IResult,
  setResult: {} as Dispatch<SetStateAction<IResult>>,
  gameState: {} as IGameState,
  setGameState: {} as Dispatch<SetStateAction<IGameState>>,
});
