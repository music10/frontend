import React, { FC, useContext } from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';

import { Text } from './Text';
import { theme } from '../themes';
import { HeartIcon } from './icons';
import { PlaylistList } from './PlaylistList';
import { FavoritesContext } from '../contexts';

const titleStyle: StyleProp<ViewStyle> = {
  marginTop: 32,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 24,
};

const titleText: StyleProp<TextStyle> = {
  fontSize: 18,
  fontFamily: theme.fontFamilyBold,
  textAlign: 'center',
  color: theme.colors.main,
};

export const FavoritePlaylistList: FC = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <>
      {favorites.length ? (
        <>
          <View style={titleStyle}>
            <Text style={titleText}>Сохранённые</Text>
            <HeartIcon fill={theme.colors.accent} />
          </View>
          <PlaylistList items={favorites} />
        </>
      ) : null}
    </>
  );
};
