import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  InteractionState,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { SearchIcon } from '../icons';
import { Text } from '../Text';
import { ROUTES } from '../../routes/Routes.types';
import { Link } from '../Link';
import { theme } from '../../themes';

const linkStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 17,
  paddingHorizontal: 16,
  borderWidth: 2,
  borderColor: 'transparent',
  borderRadius: 0,
  marginBottom: 32,
};

export const Search: FC<PressableProps> = (props) => {
  const { t } = useTranslation('translation');

  return (
    <Link to={ROUTES.Search} component={Pressable} style={linkStyle} {...props}>
      {({ hovered, pressed }: InteractionState) => (
        <>
          <SearchIcon
            fill={
              hovered || pressed ? theme.colors.main80 : theme.colors.main50
            }
          />
          <Text
            style={{
              color: hovered
                ? theme.colors.main80
                : pressed
                ? theme.colors.main20
                : theme.colors.main50,
              marginLeft: 16,
              fontSize: 24,
            }}
          >
            {t('SearchInSpotify')}
          </Text>
        </>
      )}
    </Link>
  );
};
