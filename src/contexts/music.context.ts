import { createContext } from 'react';

export interface IMusicContext {
  play: () => void;
  stop: () => void;
  pause: () => void;
  isPlaying: () => boolean;
}

export const MusicContext = createContext({} as IMusicContext);
