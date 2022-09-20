import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from '@emotion/native';

import {
  AmplitudeContext,
  CoinsContext,
  GameContext,
  WsContext,
} from '../../contexts';
import { Bugsnag, TRACKS_PER_ROUND } from '../../utils';
import {
  Counter,
  PlaceholderLoaderList,
  Track,
  TrackLoading,
} from '../../components';
import { ROUTES } from '../../routes/Routes.types';
import {
  ChooseAnswerDto,
  ShortTrackDto,
  TracksForUserDto,
  Type,
} from '../../api/api.types';
import { Music } from './components/Music';
import { Header } from './components/Header';
import { Progressbar } from './components/Progressbar';
import { PauseMenu } from './components/PauseMenu';

const Tracks = styled.View`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;
const TrackStyled = styled(Track)`
  margin-bottom: 16px;
`;

const GameStyled = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TracksLoadingStyled = styled.View`
  margin-bottom: 16px;
`;

const TracksLoadingWrapper = () => (
  <TracksLoadingStyled>
    <TrackLoading />
  </TracksLoadingStyled>
);

export const Game = () => {
  const ws = useContext(WsContext);
  const amp = useContext(AmplitudeContext);
  const navigate = useNavigate();
  const { type, id } = useParams<{ type: Type; id: string }>();
  const { addCoins } = useContext(CoinsContext);

  const [tracks, setTracks] = useState<ShortTrackDto[]>([]);
  const [mp3, setMp3] = useState('');
  const seconds = useRef(0);
  const [timer, setTimer] = useState(0);
  const startTime = useRef<number>(0);
  const [msAfterStart, setMsAfterStart] = useState(0);
  const [isPause, setPause] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [selected, setSelected] = useState('');
  const [correct, setCorrect] = useState('');
  const number = useRef(0);

  useEffect(() => {
    amp.logEvent('Playlist Opened', { type, id });
  }, [amp, type, id]);

  const getNextTracks = useCallback(async () => {
    if (number.current < TRACKS_PER_ROUND) {
      setSelected('');
      setCorrect('');
      setTracks([]);
      (await ws.next()).once('nextTracks', (answer: TracksForUserDto) => {
        setMsAfterStart(0);
        setTracks(answer.tracks);
        setMp3(answer.mp3);
        ++number.current;
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
      setSelected(trackId);
      (await ws.choose(trackId)).once(
        'chooseResult',
        (answer: ChooseAnswerDto) => {
          amp.logEvent('Track Chosen', {
            variants: tracks.map(({ artist, name }) => ({ artist, name })),
            chosen: tracks.findIndex((track) => track.id === trackId) + 1,
            right: tracks.findIndex((track) => track.id === answer.correct) + 1,
          });

          const secondsFromStart = Math.min(
            Math.floor((Date.now() - startTime.current) / 1000),
            10,
          );

          if (trackId === answer.correct) {
            // fixForGuess + remainingTimeInSeconds
            addCoins(5 + 10 - secondsFromStart);
          }

          seconds.current += secondsFromStart;

          setTimer(+setTimeout(getNextTracks, 1500));
          setCorrect(answer.correct);
        },
      );
    },
    [amp, getNextTracks, tracks, ws],
  );

  useEffect(() => {
    ws.reconnect().then(setPlaylist);
  }, [setPlaylist, ws]);

  return (
    <GameContext.Provider
      value={{
        number,
        isPause,
        setPause,
        isLoaded,
        setLoaded,
        startTime,
        msAfterStart,
        setMsAfterStart,
      }}
    >
      <Music mp3={mp3}>
        <GameStyled>
          <Header />
          <Tracks
            onClick={() => {
              if (selected) {
                clearTimeout(timer);
                getNextTracks();
                amp.logEvent('Result Skipped');
              }
            }}
          >
            <Counter />
            {isLoaded && tracks.length ? (
              tracks.map((track) => (
                <TrackStyled
                  key={track.id + selected + correct}
                  disabled={!!selected}
                  selected={track.id === selected}
                  success={track.id === correct}
                  onPress={() => {
                    if (!selected) {
                      choose(track.id);
                    }
                  }}
                  {...track}
                />
              ))
            ) : (
              <PlaceholderLoaderList
                number={4}
                component={TracksLoadingWrapper}
              />
            )}
          </Tracks>
          <Progressbar key={mp3} />
        </GameStyled>
        <PauseMenu />
      </Music>
    </GameContext.Provider>
  );
};
