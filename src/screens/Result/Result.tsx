import React, { useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/native';
import { Alert } from 'react-native';
import { Link, Logo, MenuItem } from '../../components';
import { ROUTES } from '../../routes/Routes.types';
import { ReplayIcon, ShareIcon } from '../../components/icons';
import { ApiContext } from '../../contexts';
import { useShare } from '../../hooks';

const StartLayout = styled.View`
  display: flex;
  padding: 32px 16px;
  align-items: stretch;
  height: 100%;
`;
const LogoLayout = styled.View`
  display: flex;
  flex-grow: 1;
  align-self: center;
  justify-content: center;в
`;

export const Result = () => {
  const { t } = useTranslation();
  const api = useContext(ApiContext);
  const shareFunction = useShare();
  const share = useCallback(async () => {
    const playlistId = '37i9dQZF1DX93L1kSOomqn';
    const guess = 6;
    const data = await api.getShareImage(playlistId, guess);
    await shareFunction(data).catch((err: Record<string, unknown>) => {
      err && Alert.alert(JSON.stringify(err));
    });
  }, [api, shareFunction]);

  return (
    <StartLayout>
      <LogoLayout>
        <Logo />
      </LogoLayout>
      <Link
        to={ROUTES.Playlists}
        primary
        component={MenuItem}
        icon={ReplayIcon}
        text={t('ToPlaylists')}
      />
      <MenuItem icon={ShareIcon} text={t('Share')} onPress={share} />
    </StartLayout>
  );
};
