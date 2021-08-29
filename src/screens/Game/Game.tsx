import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useHistory, useParams } from 'react-router';
import { useQuery } from 'react-query';
import { StyleProp, View, ViewStyle } from 'react-native';

import {
  AmplitudeContext,
  ApiContext,
  GameContext,
  WsContext,
} from '../../contexts';
import { TRACKS_PER_ROUND } from '../../utils';
import { Counter, Loader, Track } from '../../components';
import { ROUTES } from '../../routes/Routes.types';
import {
  ChooseAnswerDto,
  PlaylistDto,
  ShortTrackDto,
  TracksForUserDto,
} from '../../api/api.types';
import { Music } from './components/Music';
import { Header } from './components/Header';
import { Progressbar } from './components/Progressbar';
import { PauseMenu } from './components/PauseMenu';

const tracksStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
};
const gameStyle: StyleProp<ViewStyle> = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

export const Game = () => {
  const ws = useContext(WsContext);
  const api = useContext(ApiContext);
  const amp = useContext(AmplitudeContext);
  const history = useHistory();
  const { playlistId } = useParams<{ playlistId: string }>();
  const [tracks, setTracks] = useState<ShortTrackDto[]>([]);
  const [mp3, setMp3] = useState('');
  const [timer, setTimer] = useState(0);
  const [isMp3Loading, setMp3Loading] = useState(true);
  const [isPause, setPause] = useState(false);
  const [selected, setSelected] = useState('');
  const [correct, setCorrect] = useState('');
  const number = useRef(0);

  useQuery<PlaylistDto, Error>(
    ['getPlaylistById', playlistId],
    () => api.getPlaylist(playlistId),
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
      (await ws.next()).once('nextTracks', (answer: TracksForUserDto) => {
        setMp3Loading(true);
        setTracks(answer.tracks);
        setMp3(answer.mp3);
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
        (answer: ChooseAnswerDto) => {
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
        <View style={gameStyle}>
          <Header />
          {isMp3Loading || !tracks.length ? (
            <Loader />
          ) : (
            <>
              <View
                style={tracksStyle}
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
                    style={{ marginBottom: 16 }}
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
              </View>
              <Progressbar key={mp3} />
            </>
          )}
        </View>
        <PauseMenu />
      </Music>
    </GameContext.Provider>
  );
};
