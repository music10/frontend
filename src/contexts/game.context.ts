import {
  createContext,
  Dispatch,
  MutableRefObject,
  SetStateAction,
} from 'react';

interface IGameContext {
  isPause: boolean;
  setPause: Dispatch<SetStateAction<boolean>>;
  msAfterStart: number;
  setMsAfterStart: Dispatch<SetStateAction<number>>;
  startTime: MutableRefObject<number>;
  isLoaded: boolean;
  setLoaded: Dispatch<SetStateAction<boolean>>;
  number: MutableRefObject<number>;
}

export const GameContext = createContext({} as IGameContext);
