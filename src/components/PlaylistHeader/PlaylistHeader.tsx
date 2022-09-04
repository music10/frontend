import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { Text } from '../Text';
import { PlaylistCover } from '../PlaylistCover';
import { PlaylistDto } from '../../api/api.types';
import {
  coverStyle,
  descriptionStyle,
  nameStyle,
  titleStyle,
  wrapperStyle,
} from './PlaylistHeader.style';

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
