import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import styled from '@emotion/native';

import { BlurView, MenuItem, Text } from '../../../components';
import { ExitIcon, PlayIcon } from '../../../components/icons';
import { ROUTES } from '../../../routes/Routes.types';
import { TRACKS_PER_ROUND } from '../../../utils';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setGameState } from '../../../actions';

const Overlay = styled.View`
  margin: 0 auto;
  max-width: 520px;
  width: 100%;
  display: flex;
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 8px;
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

export const PauseMenu: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { number, state } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  return state === 'pause' ? (
    <Overlay>
      <BlurView blurRadius={15} overlayColor="transparent">
        <Layout>
          <Dragline />
          <Total>
            {t('Completed')}: {number} / {TRACKS_PER_ROUND}
          </Total>
          <MenuItem
            text={t('Play')}
            icon={PlayIcon}
            primary
            onPress={() => dispatch(setGameState('game'))}
          />
          <MenuItem
            icon={ExitIcon}
            text={t('Exit')}
            onPress={() => navigate(ROUTES.Playlists)}
          />
        </Layout>
      </BlurView>
    </Overlay>
  ) : null;
};
