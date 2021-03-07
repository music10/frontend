import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/native';

import {
  Link,
  Result as ResultComponent,
  MenuItem,
  PlaylistInfo,
} from '../../components';
import { ROUTES } from '../../routes/Routes.types';
import { ReplayIcon, ShareIcon } from '../../components/icons';
import { ApiContext, WsContext } from '../../contexts';
import { useShare } from '../../hooks';
import { IWsAnswerResult } from '../../utils';

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
  const [shareData, setShareData] = useState('');
  const shareFunction = useShare();

  const getResults = useCallback(async () => {
    (await ws.getResult()).once('result', setResult);
  }, [ws]);

  const loadShareImage = useCallback(async () => {
    const playlistId = result.playlist?.id;
    const guess = result.guessed;
    setShareData(await api.getShareImage(playlistId, guess));
  }, [api, result.guessed, result.playlist?.id]);

  const share = useCallback(() => {
    shareFunction(shareData)
      .then((res) => Alert.alert(JSON.stringify(res)))
      .catch((err: Record<string, unknown>) => {
        err && Alert.alert(JSON.stringify(err));
      });
  }, [shareData, shareFunction]);

  useEffect(() => {
    getResults();
  }, [getResults]);

  useEffect(() => {
    loadShareImage();
  }, [loadShareImage]);

  return (
    <StartLayout>
      <PlaylistInfo {...result.playlist} />
      <ResultLayout>
        <ResultComponent guess={result.guessed} text={result.text} />
      </ResultLayout>
      <Link to={ROUTES.Playlists}>
        <MenuItem primary icon={ReplayIcon} text={t('ToPlaylists')} />
      </Link>
      {Platform.OS === 'web' ? (
        !!navigator.share && (
          <MenuItem icon={ShareIcon} text={t('Share')} onPress={share} />
        )
      ) : (
        <MenuItem icon={ShareIcon} text={t('Share')} onPress={share} />
      )}
    </StartLayout>
  );
};
