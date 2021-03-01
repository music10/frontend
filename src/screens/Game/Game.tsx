import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useHistory, useParams } from 'react-router';
import styled from '@emotion/native';

import { WsContext } from '../../contexts';
import { IWsAnswerChoose, IWsAnswerNext, TRACKS_PER_ROUND } from '../../utils';
import { ITrack } from '../../interfaces';
import { Counter, Loader } from '../../components';
import { ROUTES } from '../../routes/Routes.types';
import { Music } from './components/Music';
import { Header } from './components/Header';
import { Progressbar } from './components/Progressbar';
import { Track } from './components/Track';

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
  const history = useHistory();
  const { playlistId } = useParams<{ playlistId: string }>();
  const [tracks, setTracks] = useState<ITrack[]>([]);
  const [mp3, setMp3] = useState('');
  const [isMp3Loading, setMp3Loading] = useState(true);
  const [selected, setSelected] = useState('');
  const [correct, setCorrect] = useState('');
  const number = useRef(0);

  const getNextTracks = useCallback(async () => {
    if (number.current < TRACKS_PER_ROUND) {
      setSelected('');
      setCorrect('');
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

  const setPlaylist = useCallback(async () => {
    (await ws.setPlaylist(playlistId)).once('playlist', getNextTracks);
  }, [ws, getNextTracks, playlistId]);

  const choose = useCallback(
    async (trackId) => {
      setSelected(trackId);
      (await ws.choose(trackId)).once(
        'chooseResult',
        (answer: IWsAnswerChoose) => {
          setCorrect(answer.correct);

          setTimeout(getNextTracks, 1000);
        },
      );
    },
    [getNextTracks, ws],
  );

  useEffect(() => {
    setPlaylist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Music setMp3Loading={setMp3Loading} mp3={mp3}>
      <GameLayout>
        <Header />
        {isMp3Loading ? (
          <Loader />
        ) : (
          <>
            <TracksLayout>
              <Counter current={number.current} />
              {tracks.map((track) => (
                <Track
                  selected={selected}
                  correct={correct}
                  track={track}
                  choose={choose}
                />
              ))}
            </TracksLayout>
            <Progressbar key={mp3} />
          </>
        )}
      </GameLayout>
    </Music>
  );
};
