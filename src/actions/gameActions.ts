export const enum GameActions {
  END_ROUND = 'GAME/END_ROUND',
  NEW_ROUND = 'GAME/NEW_ROUND',
  CHOOSE_TRACK = 'GAME/CHOOSE_TRACK',
  SHOW_CORRECT = 'GAME/SHOW_CORRECT',
  SET_GAME_STATE = 'GAME/SET_GAME_STATE',
  SET_HINT = 'GAME/SET_HINT',
}

export const endRound = () => ({
  type: GameActions.END_ROUND,
});

export const newRound = (tracks, mp3) => ({
  type: GameActions.NEW_ROUND,
  tracks,
  mp3,
});

export const chooseTrack = (track) => ({
  type: GameActions.CHOOSE_TRACK,
  track,
});

export const showCorrect = (track) => ({
  type: GameActions.SHOW_CORRECT,
  track,
});

export const setGameState = (state: 'game' | 'pause' | 'hint') => ({
  type: GameActions.SET_GAME_STATE,
  state,
});

export const setHint = (hint: '50-50' | 'replay' | null) => ({
  type: GameActions.SET_HINT,
  hint,
});
