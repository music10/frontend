import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useNavigate, useParams } from 'react-router';
import { StyleProp, View, ViewStyle } from 'react-native';

import { AmplitudeContext, GameContext, WsContext } from '../../contexts';
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

const TracksLoading = () => (
  <View style={{ marginBottom: 16 }}>
    <TrackLoading />
  </View>
);

export const Game = () => {
  const ws = useContext(WsContext);
  const amp = useContext(AmplitudeContext);
  const navigate = useNavigate();
  const { type, id } = useParams<{ type: Type; id: string }>();
  const [tracks, setTracks] = useState<ShortTrackDto[]>([]);
  const [mp3, setMp3] = useState('');
  const [timer, setTimer] = useState(0);
  const [isMp3Loading, setMp3Loading] = useState(true);
  const [isPause, setPause] = useState(false);
  const [selected, setSelected] = useState('');
  const [correct, setCorrect] = useState('');
  const number = useRef(0);

  useEffect(() => {
    amp.logEvent('Playlist Opened', { id });
  }, [amp, id]);

  const getNextTracks = useCallback(async () => {
    if (number.current < TRACKS_PER_ROUND) {
      setSelected('');
      setCorrect('');
      setTracks([]);
      (await ws.next()).once('nextTracks', (answer: TracksForUserDto) => {
        setMp3Loading(true);
        setTracks(answer.tracks);
        setMp3(answer.mp3);
        ++number.current;
      });
    } else {
      navigate(ROUTES.Results, { replace: true });
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
    ws.reconnect().then(setPlaylist);
  }, [setPlaylist, ws]);

  return (
    <GameContext.Provider value={{ number, isPause, setPause }}>
      <Music setMp3Loading={setMp3Loading} mp3={mp3}>
        <View style={gameStyle}>
          <Header />
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
            {!isMp3Loading && tracks.length ? (
              tracks.map((track) => (
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
              ))
            ) : (
              <PlaceholderLoaderList number={4} component={TracksLoading} />
            )}
          </View>
          {!isMp3Loading && <Progressbar key={mp3} />}
        </View>
        <PauseMenu />
      </Music>
    </GameContext.Provider>
  );
};
