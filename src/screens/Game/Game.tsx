import React, { useCallback, useContext, useState } from 'react';
import { ScrollView } from 'react-native';

import { Button, ButtonText, Loader } from '../../components';

import { ITrack } from '../../interfaces';
import { GameContext, GameScreen, WsContext } from '../../contexts';
import { IWsAnswerNext } from '../../utils';
import { Music } from './Music/Music';
import { Tracks } from './Tracks/Tracks';
import { Progress } from './Progress/Progress';
import { GameLayout } from './GameLayout';

export const Game: React.FC = () => {
  const [tracks, setTracks] = useState<ITrack[]>([]);
  const [mp3, setMp3] = useState('');
  const [isMp3Loading, setMp3Loading] = useState(false);

  const ws = useContext(WsContext);
  const {
    gameState: { isSelectTrack },
    result: { isEnd },
    setScreen,
  } = useContext(GameContext);

  const play = useCallback(() => {
    if (isEnd) {
      setScreen(GameScreen.RESULT);
    } else {
      ws.next().then((r) =>
        r.once('nextTracks', (answer: IWsAnswerNext) => {
          setMp3Loading(true);
          setTracks(answer.tracks);
          setMp3(answer.mp3);
        }),
      );
    }
  }, [isEnd, setScreen, ws]);

  return (
    <ScrollView>
      <GameLayout>
        <Music mp3={mp3} setMp3Loading={setMp3Loading} />
        {tracks.length && isMp3Loading ? (
          <Loader />
        ) : (
          <Tracks tracks={tracks} />
        )}
        <Progress />
        <Button
          onPress={play}
          disabled={!isSelectTrack && !!tracks.length}
          primary
        >
          <ButtonText>{tracks.length ? 'Дальше' : 'Поехали'}</ButtonText>
        </Button>
      </GameLayout>
    </ScrollView>
  );
};
