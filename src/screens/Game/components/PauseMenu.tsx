import React, { FC, useContext } from 'react';
import styled from '@emotion/native';
import { useTranslation } from 'react-i18next';
import { Link, MenuItem, Text } from '../../../components';
import { ExitIcon, PlayIcon } from '../../../components/icons';
import { ROUTES } from '../../../routes/Routes.types';
import { TRACKS_PER_ROUND } from '../../../utils';
import { GameContext, WsContext } from '../../../contexts';

const PauseOverlay = styled.View`
  margin: 0 auto;
  max-width: 520px;
  width: 100%;
  z-index: 100;
  display: flex;
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: flex-end;
`;

const PauseLayout = styled.View`
  display: flex;
  padding: 8px 16px 32px;
  background: ${({ theme }) => theme.colors.bg};
  box-shadow: 0 -25px 50px ${({ theme }) => theme.colors.bg};
`;

const DragLine = styled.View`
  align-self: center;
  margin-bottom: 24px;
  width: 42px;
  height: 2px;
  background: ${({ theme }) => theme.colors.main};
`;

const StyledPauseTotal = styled(Text)`
  padding: 16px;
  margin-bottom: 16px;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.main};
`;

export const PauseMenu: FC = () => {
  const { t } = useTranslation();
  const { number, isPause, setPause } = useContext(GameContext);
  const ws = useContext(WsContext);

  return isPause ? (
    <PauseOverlay>
      <PauseLayout>
        <DragLine />
        <StyledPauseTotal>
          {t('Completed')}: {number.current} / {TRACKS_PER_ROUND}
        </StyledPauseTotal>
        <MenuItem
          text={t('Play')}
          icon={PlayIcon}
          primary
          onPress={() => setPause(false)}
        />
        <Link
          to={ROUTES.Playlists}
          onPress={ws.reconnect}
          component={MenuItem}
          icon={ExitIcon}
          text={t('Exit')}
        />
      </PauseLayout>
    </PauseOverlay>
  ) : null;
};
