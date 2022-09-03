import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  InteractionState,
  Pressable,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { useNavigate } from 'react-router';

import { Text } from '../Text';
import { SchevronRightIcon } from '../icons';
import { ROUTES } from '../../routes/Routes.types';
import { theme } from '../../themes';
import { PlaylistDto } from '../../api/api.types';

interface Props extends PlaylistDto {}

const linkStyle: StyleProp<ViewStyle> = {
  marginHorizontal: 16,
  marginTop: 80,
  marginBottom: 0,
  paddingVertical: 8,
  paddingHorizontal: 8,
  borderWidth: 2,
  borderColor: 'transparent',
};

const titleWrapStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'row',
};

const nameStyle: StyleProp<TextStyle> = {
  marginTop: 8,
  fontFamily: theme.fontFamilySemiBold,
  fontSize: 14,
  lineHeight: 17,
  color: theme.colors.main80,
};

export const PlaylistInfo: FC<Props> = ({ name, id, type }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Pressable
      style={linkStyle}
      onPress={() => navigate(`${ROUTES.Playlist}/${type}/${id}`)}
    >
      {({ hovered }: InteractionState) => (
        <>
          <View style={titleWrapStyle}>
            <Text
              style={{
                fontFamily: theme.fontFamilyMedium,
                fontSize: 14,
                lineHeight: 17,
                marginRight: 8,
                color: hovered ? theme.colors.main80 : theme.colors.main50,
              }}
            >
              {t('Playlist')}
            </Text>
            <SchevronRightIcon
              width={16}
              height={16}
              fill={hovered ? theme.colors.main80 : theme.colors.main50}
            />
          </View>
          <Text style={nameStyle}>{name}</Text>
        </>
      )}
    </Pressable>
  );
};
