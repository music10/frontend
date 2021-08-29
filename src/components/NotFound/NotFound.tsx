import React, { FC } from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';

import { NoArtists, NoPlaylists } from '../icons';
import { Text } from '../Text';
import { theme } from '../../themes';

interface Props {
  byArtist?: boolean;
}

const layoutStyles: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
};

const textStyle: StyleProp<TextStyle> = {
  color: theme.colors.main,
  fontSize: 16,
  fontFamily: theme.fontFamilySemiBold,
};

const subTextStyle: StyleProp<TextStyle> = {
  marginTop: 8,
  textAlign: 'center',
  color: theme.colors.main50,
  fontSize: 14,
  fontFamily: theme.fontFamilyMedium,
};

export const NotFound: FC<Props> = ({ byArtist }) => {
  const { t } = useTranslation();

  return (
    <View style={layoutStyles}>
      {byArtist ? <NoArtists /> : <NoPlaylists />}
      <Text style={textStyle}>{t('NotFound')}</Text>
      <Text style={subTextStyle}>{t('NotFoundSubtext')}</Text>
    </View>
  );
};
