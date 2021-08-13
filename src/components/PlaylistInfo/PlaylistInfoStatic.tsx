import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';

import { Text } from '../Text';
import { theme } from '../../themes';
import { PlaylistDto } from '../../api/api.types';

const layoutStyle: StyleProp<ViewStyle> = {
  paddingVertical: 8,
  paddingHorizontal: 8,
  borderWidth: 2,
  borderColor: 'transparent',
};

const titleWrapStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'row',
};

const titleStyle: StyleProp<TextStyle> = {
  fontFamily: theme.fontFamilyMedium,
  fontSize: 14,
  lineHeight: 17,
  marginRight: 8,
  color: theme.colors.main50,
};
const nameStyle: StyleProp<TextStyle> = {
  marginTop: 8,
  fontFamily: theme.fontFamilySemiBold,
  fontSize: 14,
  lineHeight: 17,
  color: theme.colors.main80,
};

export const PlaylistInfo: FC<PlaylistDto> = ({ name }) => {
  const { t } = useTranslation();

  return (
    <View style={layoutStyle}>
      <View style={titleWrapStyle}>
        <Text style={titleStyle}>{t('Playlist')}</Text>
      </View>
      <Text style={nameStyle}>{name}</Text>
    </View>
  );
};
