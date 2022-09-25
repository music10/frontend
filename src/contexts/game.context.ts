import {
  createContext,
  Dispatch,
  MutableRefObject,
  SetStateAction,
} from 'react';

interface IGameContext {
  msAfterStart: number;
  setMsAfterStart: Dispatch<SetStateAction<number>>;
  startTime: MutableRefObject<number>;
  isLoaded: boolean;
  setLoaded: Dispatch<SetStateAction<boolean>>;
}

export const GameContext = createContext({} as IGameContext);
