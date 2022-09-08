import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { BottomMenu, Logo, MenuItem } from '../../components';
import { ROUTES } from '../../routes/Routes.types';
import { PlayIcon } from '../../components/icons';
import styled from '@emotion/native';

const Layout = styled.View`
  display: flex;
  align-items: stretch;
  height: 100%;
`;

const LogoStyled = styled.View`
  display: flex;
  flex-grow: 1;
  align-self: center;
  justify-content: center;
`;

export const Start = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Layout>
      <LogoStyled>
        <Logo />
      </LogoStyled>
      <BottomMenu>
        <MenuItem
          text={t('Play')}
          icon={PlayIcon}
          primary
          onPress={() => navigate(ROUTES.Playlists)}
        />
      </BottomMenu>
    </Layout>
  );
};
