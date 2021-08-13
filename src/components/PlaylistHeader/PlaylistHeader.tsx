import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';

import { Text } from '../Text';
import { PlaylistCover } from '../PlaylistCover';
import { theme } from '../../themes';
import { PlaylistDto } from '../../api/api.types';

const wrapperStyle: StyleProp<ViewStyle> = {
  margin: 16,
  display: 'flex',
  flexDirection: 'row',
};

const coverStyle: StyleProp<ViewStyle> = {
  paddingVertical: 6,
  paddingHorizontal: 0,
  marginRight: 16,
};

const descriptionStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'column',
  padding: 8,
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: 'auto',
};

const titleStyle: StyleProp<TextStyle> = {
  fontFamily: theme.fontFamilyMedium,
  fontSize: 14,
  color: theme.colors.main50,
  marginBottom: 8,
};

const nameStyle: StyleProp<TextStyle> = {
  fontFamily: theme.fontFamilySemiBold,
  fontSize: 14,
  color: theme.colors.main,
};

export const PlaylistHeader: FC<PlaylistDto> = ({ cover, name }) => {
  const { t } = useTranslation();

  return (
    <View style={wrapperStyle}>
      <View style={coverStyle}>
        <PlaylistCover size={80} cover={cover} />
      </View>
      <View style={descriptionStyle}>
        <Text style={titleStyle}>{t('Playlist')}</Text>
        <Text style={nameStyle} numberOfLines={3}>
          {name}
        </Text>
      </View>
    </View>
  );
};
