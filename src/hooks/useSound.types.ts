export type UseSound = (mp3: string) => {
  play: () => void;
  stop: () => void;
  pause: () => void;
  isPlaying: () => boolean;
};
