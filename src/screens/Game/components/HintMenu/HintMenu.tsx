import React, { FC, useContext, useEffect } from 'react';
import styled from '@emotion/native';

import { BlurView, MenuItem, Text } from '../../../../components';
import {
  FiftyFiftyIcon,
  ReplayIcon,
  RewindIcon,
} from '../../../../components/icons';
import { Hint } from './Hint';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { getHintAnswer, setGameState } from '../../../../actions';
import { WsContext } from '../../../../contexts';

const Overlay = styled.View`
  margin: 0 auto;
  max-width: 520px;
  width: 100%;
  display: flex;
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: flex-end;
`;

const Layout = styled.View`
  display: flex;
  flex-direction: column;
  padding: 8px 16px 32px;
  background-color: ${({ theme }) => theme.colors.bg75};
  box-shadow: 0 -25px 50px ${({ theme }) => theme.colors.bg};
`;

const Dragline = styled.View`
  align-self: center;
  margin-bottom: 24px;
  width: 42px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.main};
`;

const Total = styled(Text)`
  padding: 16px;
  margin-bottom: 16px;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.main};
`;
const Hints = styled.View`
  display: flex;
  flex-direction: row;
`;

export const HintMenu: FC = () => {
  const ws = useContext(WsContext);
  const { state, currentHint, tracks, isSoundEnd } = useAppSelector(
    (state) => state.game,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (currentHint) {
      case 'replay':
        ws.hintReplay().then((res) =>
          res.once('hint/replay/answer', (mp3: string) => {
            dispatch(getHintAnswer({ hint: 'replay', data: mp3 }));
          }),
        );
        break;
      case '50-50':
        ws.hint50(tracks.map(({ id }) => id)).then((res) =>
          res.once('hint/50-50/answer', (wrongTracks: string[]) => {
            dispatch(getHintAnswer({ hint: '50-50', data: wrongTracks }));
          }),
        );
        break;
    }
  }, [currentHint]);

  return state === 'hint' ? (
    <Overlay>
      <BlurView blurRadius={15} overlayColor="transparent">
        <Layout>
          <Dragline />
          <Total>Выберите подсказку</Total>
          <Hints>
            <Hint icon={FiftyFiftyIcon} name="50 / 50" coins={200} id="50-50" />
            <Hint
              icon={ReplayIcon}
              name="Ещё раз"
              coins={200}
              id="replay"
              isDisabledHint={!isSoundEnd}
            />
          </Hints>

          <MenuItem
            text="Назад"
            icon={RewindIcon}
            primary
            onPress={() => dispatch(setGameState('game'))}
          />
        </Layout>
      </BlurView>
    </Overlay>
  ) : null;
};
