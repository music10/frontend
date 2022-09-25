import { Reducer } from 'redux';
import { GameActions } from '../actions';
import { TrackDto } from '../api/api.types';
import { HintType } from '../types';

interface GameStore {
  number: number;
  mp3: string | null;
  selected: string | null;
  correct: string | null;
  tracks: TrackDto[];
  currentHint: HintType;
  usedHints: HintType[];
  state: 'game' | 'pause' | 'hint';
}

const initialState: GameStore = {
  number: 0,
  mp3: null,
  selected: null,
  correct: null,
  tracks: [],
  currentHint: null,
  usedHints: [],
  state: 'game',
};

export const gameReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GameActions.END_ROUND:
      return {
        ...state,
        mp3: null,
        selected: null,
        correct: null,
        tracks: [],
        usedHints: [],
      };
    case GameActions.NEW_ROUND:
      return {
        ...state,
        msAfterStart: 0,
        tracks: action.tracks,
        mp3: action.mp3,
        number: state.number + 1,
      };
    case GameActions.CHOOSE_TRACK:
      return {
        ...state,
        selected: action.track,
      };
    case GameActions.SHOW_CORRECT:
      return {
        ...state,
        correct: action.track,
      };
    case GameActions.SET_GAME_STATE:
      return {
        ...state,
        state: action.state,
      };
    case GameActions.SET_HINT:
      return {
        ...state,
        hint: action.hint,
        usedHints: action.hint
          ? [...state.usedHints, action.hint]
          : state.usedHints,
      };

    default:
      return state;
  }
};
