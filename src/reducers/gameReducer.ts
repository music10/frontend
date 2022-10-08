import { Reducer } from 'redux';
import { GameActions } from '../actions';
import { TrackDto } from '../api/api.types';
import { HintType } from '../types';

interface GameStore {
  number: number;
  mp3: string | null;
  mp3Loaded: boolean;
  selected: string | null;
  correct: string | null;
  tracks: TrackDto[];
  disabledTracks: string[];
  currentHint: HintType;
  usedHints: HintType[];
  state: 'game' | 'pause' | 'hint';
  startTime: number | null;
  msAfterStart: number;
  isSoundEnd: boolean;
}

const initialState: GameStore = {
  number: 0,
  mp3: null,
  mp3Loaded: false,
  selected: null,
  correct: null,
  tracks: [],
  disabledTracks: [],
  currentHint: null,
  usedHints: [],
  state: 'game',
  startTime: null,
  msAfterStart: 0,
  isSoundEnd: false,
};

export const gameReducer: Reducer<GameStore> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case GameActions.END_ROUND:
      return {
        ...state,
        mp3: null,
        selected: null,
        correct: null,
        tracks: [],
        disabledTracks: [],
        usedHints: [],
      };
    case GameActions.NEW_ROUND:
      return {
        ...state,
        tracks: action.tracks,
        number: state.number + 1,
        mp3: action.mp3,
        mp3Loaded: false,
      };
    case GameActions.SET_MP3_LOADED:
      return {
        ...state,
        isSoundEnd: false,
        mp3Loaded: true,
        msAfterStart: 0,
        startTime: Date.now(),
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
      if (action.state === 'game') {
        return {
          ...state,
          startTime: Date.now(),
          state: action.state,
        };
      }
      return {
        ...state,
        msAfterStart:
          state.msAfterStart + Date.now() - (state.startTime ?? Date.now()),
        state: action.state,
      };
    case GameActions.SET_HINT:
      return {
        ...state,
        currentHint: action.hint,
        usedHints: action.hint
          ? [...state.usedHints, action.hint]
          : state.usedHints,
      };

    case GameActions.GET_HINT_ANSWER:
      switch (action.hint) {
        case '50-50':
          return {
            ...state,
            state: 'game',
            currentHint: null,
            disabledTracks: action.data,
          };
        case 'replay':
          return {
            ...state,
            state: 'game',
            currentHint: null,
            mp3: action.data,
            mp3Loaded: false,
          };
        default:
          return {
            ...state,
            state: 'game',
            currentHint: null,
          };
      }

    case GameActions.SOUND_END:
      return { ...state, isSoundEnd: true };
    case GameActions.RESET_GAME:
      return initialState;

    default:
      return state;
  }
};
