import React, { useCallback, useContext } from 'react';
import { Alert } from 'react-native';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Share from 'react-native-share';

import { Button, ButtonText } from '../../components';
import { ApiContext, GameContext } from '../../contexts';

interface ShareButtonProps {
  guess: number;
  all: number;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ guess, all }) => {
  const api = useContext(ApiContext);
  const {
    gameState: { playlistName },
  } = useContext(GameContext);

  const share = useCallback(async () => {
    const data = await api.getShareImage(playlistName || '', guess, all);
    Share.open({ url: data }).catch((err: Record<string, unknown>) => {
      err && Alert.alert(JSON.stringify(err));
    });
  }, [all, api, guess, playlistName]);

  return (
    <Button onPress={share} accessibilityRole="button">
      <ButtonText>Поделиться резульатами</ButtonText>
    </Button>
  );
};
