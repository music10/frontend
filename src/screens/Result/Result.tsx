import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/native';
import { Alert } from 'react-native';
import { Link, Result as ResultComponent, MenuItem } from '../../components';
import { ROUTES } from '../../routes/Routes.types';
import { ReplayIcon, ShareIcon } from '../../components/icons';
import { ApiContext, WsContext } from '../../contexts';
import { useShare } from '../../hooks';
import { IWsAnswerResult } from '../../utils';
import { PlaylistInfo } from '../../components/PlaylistInfo/PlaylistInfo';

const StartLayout = styled.View`
  display: flex;
  padding: 32px 16px;
  align-items: stretch;
  height: 100%;
`;
const ResultLayout = styled.View`
  display: flex;
  flex-grow: 1;
  align-self: center;
  justify-content: center;в
`;

export const Result = () => {
  const { t } = useTranslation();
  const api = useContext(ApiContext);
  const ws = useContext(WsContext);
  const [result, setResult] = useState<IWsAnswerResult>({} as IWsAnswerResult);
  const shareFunction = useShare();
  const share = useCallback(async () => {
    const playlistId = result.playlist?.id;
    const guess = result.guessed;
    const data = await api.getShareImage(playlistId, guess);
    await shareFunction(data).catch((err: Record<string, unknown>) => {
      err && Alert.alert(JSON.stringify(err));
    });
  }, [api, result, shareFunction]);

  const getResults = useCallback(async () => {
    (await ws.getResult()).once('result', setResult);
  }, [ws]);

  useEffect(() => {
    getResults();
  }, [getResults]);

  return (
    <StartLayout>
      <PlaylistInfo {...result.playlist} />
      <ResultLayout>
        <ResultComponent guess={result.guessed} text={result.text} />
      </ResultLayout>
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
