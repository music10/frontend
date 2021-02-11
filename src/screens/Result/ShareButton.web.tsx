import React, { useCallback, useContext } from 'react';

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
    console.log(123);
  }, [all, api, guess, playlistName]);

  return (
    <Button onPress={share} accessibilityRole="button">
      <ButtonText>Поделиться резульатами</ButtonText>
    </Button>
  );
};
