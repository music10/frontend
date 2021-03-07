import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  InteractionState,
  Pressable,
  TextInput,
  TextInputProps,
} from 'react-native';
import { css } from '@emotion/native';
import { useTheme } from '@emotion/react';

import { SearchIcon } from '../icons';

export const SearchField: FC<TextInputProps> = (props) => {
  const { t } = useTranslation('translation');
  const theme = useTheme();

  return (
    <Pressable
      style={({ hovered, focused }: InteractionState) => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 16px;
        border: 2px solid ${focused ? theme.colors.main : 'transparent'};
        background: ${hovered || focused
          ? theme.colors.main20
          : theme.colors.main10};
        border-radius: 0;
      `}
    >
      {({ pressed }: InteractionState) => (
        <>
          <SearchIcon fill={theme.colors.main50} width={24} height={24} />
          <TextInput
            placeholder={t('SearchInSpotify')}
            style={css`
              width: 100%;
              padding: 8px;
              border: 0;
              color: ${pressed ? theme.colors.main80 : theme.colors.main50};
              margin-left: 16px;
              font-size: 18px;
            `}
            {...props}
          />
        </>
      )}
    </Pressable>
  );
};
