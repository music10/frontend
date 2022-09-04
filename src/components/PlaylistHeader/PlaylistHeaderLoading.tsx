import React, { FC } from 'react';
import { View } from 'react-native';
import { PlaceholderLoader } from '../PlaceholderLoader';
import { Text } from '../Text';
import { useTranslation } from 'react-i18next';
import {
  coverStyle,
  descriptionStyle,
  titleStyle,
  wrapperStyle,
} from './PlaylistHeader.style';

export const PlaylistHeaderLoading: FC = () => {
  const { t } = useTranslation();

  return (
    <View style={wrapperStyle}>
      <View style={coverStyle}>
        <PlaceholderLoader width={80} height={80} />
      </View>
      <View style={descriptionStyle}>
        <Text style={titleStyle}>{t('Playlist')}</Text>
        <PlaceholderLoader height={14} width={170} />
      </View>
    </View>
  );
};
