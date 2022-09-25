import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Bugsnag, TRACKS_PER_ROUND } from '../utils';
import { ChooseAnswerDto, TracksForUserDto, Type } from '../api/api.types';
import { ROUTES } from '../routes/Routes.types';
import { useNavigate, useParams } from 'react-router';
import { CoinsContext, WsContext } from '../contexts';
import { chooseTrack, endRound, newRound, showCorrect } from '../actions';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export const useGame = () => {
  const navigate = useNavigate();

  const ws = useContext(WsContext);
  const { addCoins } = useContext(CoinsContext);

  const [timer, setTimer] = useState(0);

  const { number, startTime } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const seconds = useRef(0);

  const { type, id } = useParams<{ type: Type; id: string }>();

  const getNextTracks = useCallback(async () => {
    if (number < TRACKS_PER_ROUND) {
      dispatch(endRound());
      (await ws.next()).once('nextTracks', (answer: TracksForUserDto) => {
        dispatch(newRound(answer.tracks, answer.mp3));
      });
    } else {
      navigate(`${ROUTES.Results}?seconds=${seconds.current}`, {
        replace: true,
      });
    }
  }, [ws, navigate]);

  const setPlaylist = useCallback(
    async () =>
      (await ws.setPlaylist(id ?? '', type))
        .once('playlist', getNextTracks)
        .once('exception', (error) => {
          Bugsnag.notify(error);
          navigate(ROUTES.Start, { replace: true });
        }),
    [ws, id, type, getNextTracks, navigate],
  );

  const choose = useCallback(
    async (trackId: string) => {
      dispatch(chooseTrack(trackId));
      (await ws.choose(trackId)).once(
        'chooseResult',
        (answer: ChooseAnswerDto) => {
          const secondsFromStart = Math.min(
            Math.floor((Date.now() - startTime) / 1000),
            10,
          );

          if (trackId === answer.correct) {
            // fixForGuess + remainingTimeInSeconds
            addCoins(5 + 10 - secondsFromStart);
          }

          seconds.current += secondsFromStart;

          setTimer(+setTimeout(getNextTracks, 1500));
          dispatch(showCorrect(answer.correct));
        },
      );
    },
    [getNextTracks, ws, startTime, addCoins],
  );

  useEffect(() => {
    ws.reconnect().then(setPlaylist);
  }, [setPlaylist, ws]);

  return {
    choose,
    getNextTracks,
    timer,
  };
};
