import React, { FC } from 'react';
import { css } from '@emotion/native';
import { useTranslation } from 'react-i18next';
import { InteractionState, Pressable, PressableProps } from 'react-native';
import { useTheme } from '@emotion/react';

import { SearchIcon } from '../icons';
import { Text } from '../Text';

export const Search: FC<PressableProps> = (props) => {
  const { t } = useTranslation('translation');
  const theme = useTheme();

  return (
    <Pressable
      style={({ focused }: InteractionState) => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 17px 16px;
        border: 2px solid ${focused ? theme.colors.main : 'transparent'};
        border-radius: 0;
      `}
      {...props}
    >
      {({ focused, hovered, pressed }: InteractionState) => (
        <>
          <SearchIcon
            fill={
              focused || hovered || pressed
                ? theme.colors.main80
                : theme.colors.main50
            }
          />
          <Text
            style={css`
              color: ${!(focused || hovered || pressed)
                ? theme.colors.main50
                : pressed
                ? theme.colors.main20
                : theme.colors.main80};
              margin-left: 16px;
              font-size: 24px;
            `}
          >
            {t('SearchInSpotify')}
          </Text>
        </>
      )}
    </Pressable>
  );
};
