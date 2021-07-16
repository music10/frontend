import React, { FC } from 'react';
import { css } from '@emotion/native';
import { useTranslation } from 'react-i18next';
import { InteractionState, Pressable, PressableProps } from 'react-native';
import { useTheme } from '@emotion/react';

import { SearchIcon } from '../icons';
import { Text } from '../Text';
import { ROUTES } from '../../routes/Routes.types';
import { Link } from '../Link';

export const Search: FC<PressableProps> = (props) => {
  const { t } = useTranslation('translation');
  const theme = useTheme();

  return (
    <Link
      to={ROUTES.Search}
      component={Pressable}
      style={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 17px 16px;
        border: 2px solid transparent;
        border-radius: 0;
      `}
      {...props}
    >
      {({ hovered, pressed }: InteractionState) => (
        <>
          <SearchIcon
            fill={
              hovered || pressed ? theme.colors.main80 : theme.colors.main50
            }
          />
          <Text
            style={css`
              color: ${hovered
                ? theme.colors.main80
                : pressed
                ? theme.colors.main20
                : theme.colors.main50};
              margin-left: 16px;
              font-size: 24px;
            `}
          >
            {t('SearchInSpotify')}
          </Text>
        </>
      )}
    </Link>
  );
};
