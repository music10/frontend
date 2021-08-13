import React, { FC, useContext } from 'react';

import { Text } from '../Text';
import { GameContext } from '../../contexts';
import { theme } from '../../themes';
import { TRACKS_PER_ROUND } from '../../utils';

export const Counter: FC = () => {
  const { number } = useContext(GameContext);

  return (
    <Text
      style={{
        fontSize: 16,
        fontFamily: theme.fontFamilyMedium,
        padding: 16,
        marginBottom: 24,
        textAlign: 'center',
        color: theme.colors.main,
      }}
    >
      {number.current} / {TRACKS_PER_ROUND}
    </Text>
  );
};
