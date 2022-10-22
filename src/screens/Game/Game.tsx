import React, { useContext, useEffect } from 'react';
import styled from '@emotion/native';

import { AmplitudeContext } from '../../contexts';
import {
  ButtonWithIcon,
  Counter,
  PlaceholderLoaderList,
  Track,
  TrackLoading,
} from '../../components';
import { Music } from './components/Music';
import { Header } from './components/Header';
import { Progressbar } from './components/Progressbar';
import { PauseMenu } from './components/PauseMenu';
import { useGame } from '../../hooks';
import { LampIcon } from '../../components/icons';
import { HintMenu } from './components/HintMenu';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { resetGame, setGameState } from '../../actions';

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

const HintCounterWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

const Hint = styled.View`
  flex: 0 0 50%;
`;

const TracksLoadingWrapper = () => (
  <TracksLoadingStyled>
    <TrackLoading />
  </TracksLoadingStyled>
);

export const Game = () => {
  const amp = useContext(AmplitudeContext);
  const { choose, getNextTracks, timer } = useGame();

  const { mp3, tracks, selected, correct, mp3Loaded, disabledTracks } =
    useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetGame());
  }, []);

  return (
    <Music>
      <GameStyled>
        <Header />
        <Tracks>
          {mp3Loaded && tracks.length ? (
            tracks.map((track) => (
              <TrackStyled
                key={track.id + selected + correct}
                disabled={!!selected || disabledTracks.includes(track.id)}
                selected={track.id === selected}
                success={track.id === correct}
                onPress={() => {
                  if (!selected) {
                    choose(track.id);
                  } else {
                    clearTimeout(timer);
                    getNextTracks();
                    amp.logEvent('Result Skipped');
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
          <HintCounterWrapper>
            <Hint>
              <ButtonWithIcon
                text="Подсказка"
                icon={LampIcon}
                onPress={() => dispatch(setGameState('hint'))}
              />
            </Hint>
            <Counter />
          </HintCounterWrapper>
        </Tracks>
        <Progressbar key={mp3} />
      </GameStyled>
      <PauseMenu />
      <HintMenu />
    </Music>
  );
};
