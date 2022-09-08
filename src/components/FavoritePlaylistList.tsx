import React, { FC, useContext } from 'react';
import styled from '@emotion/native';

import { HeartIcon } from './icons';
import { PlaylistList } from './PlaylistList';
import { FavoritesContext } from '../contexts';
import { Text } from './Text';
import { useTheme } from '@emotion/react';

const Title = styled.View`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
`;

const TitleText = styled(Text)`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamilyBold};
  text-align: center;
  color: ${({ theme }) => theme.colors.main};
`;

export const FavoritePlaylistList: FC = () => {
  const { favorites } = useContext(FavoritesContext);
  const theme = useTheme();

  return (
    <>
      {favorites.length ? (
        <>
          <Title>
            <TitleText>Сохранённые</TitleText>
            <HeartIcon fill={theme.colors.accent} />
          </Title>
          <PlaylistList items={favorites} />
        </>
      ) : null}
    </>
  );
};
