import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/native';

import { useHistory } from 'react-router';
import {
  Link,
  Result as ResultComponent,
  MenuItem,
  PlaylistInfo,
  BottomMenu,
} from '../../components';
import { ROUTES } from '../../routes/Routes.types';
import { ReplayIcon, ShareIcon } from '../../components/icons';
import { AmplitudeContext, ApiContext, WsContext } from '../../contexts';
import { useShare } from '../../hooks';
import { IWsAnswerResult } from '../../utils';

const StartLayout = styled.View`
  display: flex;
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
  const history = useHistory();
  const api = useContext(ApiContext);
  const ws = useContext(WsContext);
  const amp = useContext(AmplitudeContext);
  const [result, setResult] = useState<IWsAnswerResult>({} as IWsAnswerResult);
  const [shareData, setShareData] = useState('');
  const shareFunction = useShare();

  useEffect(
    () => () => {
      ws.reconnect();
    },
    [ws],
  );

  const getResults = useCallback(async () => {
    (await ws.getResult())
      .once('result', setResult)
      .once('exception', () => history.replace(ROUTES.Start));
  }, [history, ws]);

  const loadShareImage = useCallback(async () => {
    const playlistId = result.playlist?.id;
    const guess = result.guessed;
    if (playlistId) {
      setShareData(await api.getShareImage(playlistId, guess));
    }
  }, [api, result]);

  const share = useCallback(() => {
    amp.logEvent('Shared');
    shareFunction(shareData);
  }, [amp, shareData, shareFunction]);

  useEffect(() => {
    amp.logEvent('Results Opened');
  }, [amp]);

  useEffect(() => {
    getResults();
  }, [getResults]);

  useEffect(() => {
    loadShareImage();
  }, [loadShareImage, result]);

  return (
    <StartLayout>
      <PlaylistInfo {...result.playlist} />
      <ResultLayout>
        <ResultComponent guess={result.guessed} text={result.text} />
      </ResultLayout>
      <BottomMenu>
        <Link
          to={ROUTES.Playlists}
          component={MenuItem}
          primary
          icon={ReplayIcon}
          text={t('ToPlaylists')}
          onClick={() => {
            amp.logEvent('Restarted');
          }}
        />
        {Platform.OS !== 'web' && (
          <MenuItem icon={ShareIcon} text={t('Share')} onPress={share} />
        )}
      </BottomMenu>
    </StartLayout>
  );
};
