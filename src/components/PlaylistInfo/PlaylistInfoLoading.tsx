import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleProp, View, ViewStyle } from 'react-native';

import { Text } from '../Text';
import { SchevronRightIcon } from '../icons';
import { theme } from '../../themes';
import { PlaceholderLoader } from '../PlaceholderLoader';
import { linkStyle, titleWrapStyle, wrapStyle } from './PlaylistInfo.style';

const nameStyle: StyleProp<ViewStyle> = {
  marginTop: 8,
};

export const PlaylistInfoLoading: FC = () => {
  const { t } = useTranslation();

  return (
    <View style={wrapStyle}>
      <View style={linkStyle}>
        <View style={titleWrapStyle}>
          <Text
            style={{
              fontFamily: theme.fontFamilyMedium,
              fontSize: 14,
              lineHeight: 17,
              marginRight: 8,
              color: theme.colors.main50,
            }}
          >
            {t('Playlist')}
          </Text>
          <SchevronRightIcon
            width={16}
            height={16}
            fill={theme.colors.main50}
          />
        </View>
        <PlaceholderLoader height={14} width={170} style={nameStyle} />
      </View>
    </View>
  );
};
