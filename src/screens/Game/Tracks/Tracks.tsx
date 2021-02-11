import React, { useCallback, useContext, useEffect, useState } from 'react';

import { Track, TrackCardVariant, TracksGrid } from '../../../components';
import { GameContext, WsContext } from '../../../contexts';
import { ITrack } from '../../../interfaces';
import { IWsAnswerChoose } from '../../../utils';

interface Props {
  tracks: ITrack[];
}

export const Tracks: React.FC<Props> = ({ tracks }) => {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const [correctTrack, setCorrectTrack] = useState(0);
  const { setResult, gameState, setGameState } = useContext(GameContext);
  const ws = useContext(WsContext);

  useEffect(() => {
    setSelectedTrack(0);
    setGameState({ ...gameState, isSelectTrack: false });
    setCorrectTrack(0);
  }, [tracks]);

  const select = useCallback(
    (trackId) => {
      setSelectedTrack(trackId);
      setGameState({ ...gameState, isSelectTrack: true });
      ws.choose(trackId).then((socket) =>
        socket.once('chooseResult', ({ correct, result }: IWsAnswerChoose) => {
          setCorrectTrack(correct);
          setResult(result);
        }),
      );
    },
    [setResult, ws],
  );

  const cardVariant = useCallback(
    (trackId: number): TrackCardVariant => {
      if (correctTrack) {
        if (correctTrack === trackId) return TrackCardVariant.Success;
        if (selectedTrack === trackId) return TrackCardVariant.Wrong;
      }
      return TrackCardVariant.Default;
    },
    [selectedTrack, correctTrack],
  );

  return (
    <TracksGrid>
      {tracks.map(({ name, id, author }) => (
        <Track
          key={id}
          onPress={() => !correctTrack && select(id)}
          track={name}
          author={author}
          type={cardVariant(id)}
        />
      ))}
    </TracksGrid>
  );
};
