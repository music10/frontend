import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Platform, StyleProp, View, ViewStyle } from 'react-native';

import {
  Result as ResultComponent,
  MenuItem,
  PlaylistInfo,
  BottomMenu,
} from '../../components';
import { ROUTES } from '../../routes/Routes.types';
import { ReplayIcon, ShareIcon } from '../../components/icons';
import { AmplitudeContext, ApiContext, WsContext } from '../../contexts';
import { useShare } from '../../hooks';
import { ResultDto } from '../../api/api.types';

const layoutStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100%',
};

const resultStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexGrow: 1,
  alignSelf: 'center',
  justifyContent: 'center',
};

export const Result = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const api = useContext(ApiContext);
  const ws = useContext(WsContext);
  const amp = useContext(AmplitudeContext);
  const [result, setResult] = useState<ResultDto>({} as ResultDto);
  const [shareData, setShareData] = useState('');
  const shareFunction = useShare();

  const getResults = useCallback(async () => {
    (await ws.getResult())
      .once('result', setResult)
      .once('exception', () => navigate(ROUTES.Start, { replace: true }));
  }, [navigate, ws]);

  const loadShareImage = useCallback(async () => {
    const playlistId = result.playlist?.id;
    const guess = result.guessed;
    if (playlistId) {
      setShareData(await api.share(playlistId, guess));
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
    <View style={layoutStyle}>
      <PlaylistInfo {...result.playlist} />
      <View style={resultStyle}>
        <ResultComponent guess={result.guessed} text={result.text} />
      </View>
      <BottomMenu>
        <MenuItem
          primary
          icon={ReplayIcon}
          text={t('ToPlaylists')}
          onPress={() => {
            amp.logEvent('Restarted');
            navigate(ROUTES.Playlists);
          }}
        />
        {Platform.OS !== 'web' && (
          <MenuItem icon={ShareIcon} text={t('Share')} onPress={share} />
        )}
      </BottomMenu>
    </View>
  );
};
