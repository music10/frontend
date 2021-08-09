import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/native';
import { Link, Logo, MenuItem, BottomMenu } from '../../components';
import { ROUTES } from '../../routes/Routes.types';
import { PlayIcon } from '../../components/icons';

const StartLayout = styled.View`
  display: flex;
  align-items: stretch;
  height: 100%;
`;
const LogoLayout = styled.View`
  display: flex;
  flex-grow: 1;
  align-self: center;
  justify-content: center;
`;

export const Start = () => {
  const { t } = useTranslation();

  return (
    <StartLayout>
      <LogoLayout>
        <Logo />
      </LogoLayout>
      <BottomMenu>
        <Link
          to={ROUTES.Playlists}
          component={MenuItem}
          primary
          icon={PlayIcon}
          text={t('Play')}
        />
      </BottomMenu>
    </StartLayout>
  );
};
