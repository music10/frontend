import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  InteractionState,
  Pressable,
  TextInput,
  TextInputProps,
} from 'react-native';

import { theme } from '../../themes';
import { SearchIcon } from '../icons';

export const SearchField: FC<TextInputProps> = (props) => {
  const { t } = useTranslation('translation');

  return (
    <Pressable
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 2,
        borderColor: 'transparent',
        backgroundColor: theme.colors.main10,
      }}
    >
      {({ pressed }: InteractionState) => (
        <>
          <SearchIcon fill={theme.colors.main50} width={24} height={24} />
          <TextInput
            placeholder={t('SearchInSpotify')}
            style={{
              width: '100%',
              padding: 0,
              borderWidth: 0,
              color: pressed ? theme.colors.main80 : theme.colors.main50,
              marginLeft: 16,
              fontSize: 18,
              fontFamily: theme.fontFamilyMedium,
            }}
            {...props}
          />
        </>
      )}
    </Pressable>
  );
};
