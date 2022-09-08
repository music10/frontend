import React, { FC } from 'react';
import { InteractionState, PressableProps } from 'react-native';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import styled, { css } from '@emotion/native';

import { SearchIcon } from './icons';
import { Text } from './Text';
import { ROUTES } from '../routes/Routes.types';
import { useTheme } from '@emotion/react';

const Link = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 17px 16px;
  border: 2px solid transparent;
  border-radius: 0;
  margin-bottom: 32px;
`;

export const Search: FC<PressableProps> = (props) => {
  const { t } = useTranslation('translation');
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Link onPress={() => navigate(ROUTES.Search)} {...props}>
      {({ hovered, pressed }: InteractionState) => (
        <>
          <SearchIcon
            fill={
              hovered || pressed ? theme.colors.main80 : theme.colors.main50
            }
          />
          <Text
            style={css({
              color: hovered
                ? theme.colors.main80
                : pressed
                ? theme.colors.main20
                : theme.colors.main50,
              marginLeft: 16,
              fontSize: 24,
            })}
          >
            {t('Search')}
          </Text>
        </>
      )}
    </Link>
  );
};
