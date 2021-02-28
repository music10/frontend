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
import { Loader } from '../../components';
import { Track } from '../../components/Track';
import { ROUTES } from '../../routes/Routes.types';
import { Music } from './Music/Music';

const HeaderLayout = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
`;
const TracksLayout = styled.View`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;
const Counter = styled.Text`
  font-size: 16px;
  padding: 14px 16px;
  margin-bottom: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.main};
`;

export const Game = () => {
  const ws = useContext(WsContext);
  const history = useHistory();
  const { playlistId } = useParams<{ playlistId: string }>();
  const [tracks, setTracks] = useState<ITrack[]>([]);
  const [mp3, setMp3] = useState('');
  const [isMp3Loading, setMp3Loading] = useState(false);
  const [selected, setSelected] = useState('');
  const [correct, setCorrect] = useState('');
  const number = useRef(0);

  const getNextTracks = useCallback(() => {
    if (number.current < TRACKS_PER_ROUND) {
      setSelected('');
      setCorrect('');
      ws.next().then((r) =>
        r.once('nextTracks', ({ tracks, mp3 }: IWsAnswerNext) => {
          setMp3Loading(true);
          setTracks(tracks);
          setMp3(mp3);
        }),
      );
      ++number.current;
    } else {
      console.log('GO TO Results');
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

  const getVariant = useCallback(
    (trackId) => {
      if (trackId === correct) {
        return 'success';
      }
      if (!selected || trackId === selected) {
        return 'default';
      }
      return 'inactive';
    },
    [correct, selected],
  );

  useEffect(() => {
    setPlaylist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderLayout>
        <Music mp3={mp3} setMp3Loading={setMp3Loading} />
      </HeaderLayout>
      {isMp3Loading ? (
        <Loader />
      ) : (
        <TracksLayout>
          <Counter>
            {number.current}/{TRACKS_PER_ROUND}
          </Counter>
          {tracks.map((track) => (
            <Track
              key={track.id + selected + correct}
              disabled={!!selected}
              onPress={() => {
                if (!selected) {
                  choose(track.id);
                }
              }}
              variant={getVariant(track.id)}
              style={{ marginTop: 14 }}
              {...track}
            />
          ))}
        </TracksLayout>
      )}
    </>
  );
};
