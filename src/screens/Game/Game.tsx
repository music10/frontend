import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useHistory, useParams } from 'react-router';
import styled, { css } from '@emotion/native';

import { View } from 'react-native';
import { useQuery } from 'react-query';
import {
  AmplitudeContext,
  ApiContext,
  GameContext,
  WsContext,
} from '../../contexts';
import { IWsAnswerChoose, IWsAnswerNext, TRACKS_PER_ROUND } from '../../utils';
import { Counter, Loader, Track } from '../../components';
import { ROUTES } from '../../routes/Routes.types';
import { Components } from '../../api/api.types';
import { Music } from './components/Music';
import { Header } from './components/Header';
import { Progressbar } from './components/Progressbar';
import { PauseMenu } from './components/PauseMenu';

const TracksLayout = styled.View`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const GameLayout = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Game = () => {
  const ws = useContext(WsContext);
  const api = useContext(ApiContext);
  const amp = useContext(AmplitudeContext);
  const history = useHistory();
  const { playlistId } = useParams<{ playlistId: string }>();
  const [tracks, setTracks] = useState<Components.Schemas.TrackDto[]>([]);
  const [mp3, setMp3] = useState('');
  const [timer, setTimer] = useState(0);
  const [isMp3Loading, setMp3Loading] = useState(true);
  const [isPause, setPause] = useState(false);
  const [selected, setSelected] = useState('');
  const [correct, setCorrect] = useState('');
  const number = useRef(0);

  useQuery<Components.Schemas.PlaylistDto, Error>(
    ['getPlaylistById', playlistId],
    () => api.getPlaylistById(playlistId),
    {
      onSuccess: ({ name, id }) =>
        amp.logEvent('Playlist Opened', { name, id }),
    },
  );

  const getNextTracks = useCallback(async () => {
    if (number.current < TRACKS_PER_ROUND) {
      setSelected('');
      setCorrect('');
      setTracks([]);
      (await ws.next()).once('nextTracks', ({ tracks, mp3 }: IWsAnswerNext) => {
        setMp3Loading(true);
        setTracks(tracks);
        setMp3(mp3);
      });

      ++number.current;
    } else {
      history.replace(ROUTES.Results);
    }
  }, [ws, history]);

  const setPlaylist = useCallback(
    async () =>
      (await ws.setPlaylist(playlistId))
        .once('playlist', getNextTracks)
        .once('exception', () => history.replace(ROUTES.Start)),
    [ws, playlistId, getNextTracks, history],
  );

  const choose = useCallback(
    async (trackId) => {
      setSelected(trackId);
      (await ws.choose(trackId)).once(
        'chooseResult',
        (answer: IWsAnswerChoose) => {
          amp.logEvent('Track Chosen', {
            variants: tracks.map(({ artist, name }) => ({ artist, name })),
            chosen: tracks.findIndex(({ id }) => id === trackId) + 1,
            right: tracks.findIndex(({ id }) => id === answer.correct) + 1,
          });
          setTimer(+setTimeout(getNextTracks, 1500));
          setCorrect(answer.correct);
        },
      );
    },
    [amp, getNextTracks, tracks, ws],
  );

  useEffect(() => {
    setPlaylist();
  }, [setPlaylist]);

  return (
    <GameContext.Provider value={{ number, isPause, setPause }}>
      <Music setMp3Loading={setMp3Loading} mp3={mp3}>
        <GameLayout>
          <Header />
          {isMp3Loading || !tracks.length ? (
            <Loader />
          ) : (
            <>
              <TracksLayout
                onClick={() => {
                  if (selected) {
                    clearTimeout(timer);
                    getNextTracks();
                    amp.logEvent('Result Skipped');
                  }
                }}
              >
                <Counter />
                {tracks.map((track) => (
                  <View
                    key={track.id + selected + correct}
                    style={css`
                      margin-bottom: 16px;
                    `}
                  >
                    <Track
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
                  </View>
                ))}
              </TracksLayout>
              <Progressbar key={mp3} />
            </>
          )}
        </GameLayout>
        <PauseMenu />
      </Music>
    </GameContext.Provider>
  );
};
