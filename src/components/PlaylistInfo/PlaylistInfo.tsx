import React, { FC, useContext } from 'react';
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
import { HeartIcon, HeartOutlinedIcon, SchevronRightIcon } from '../icons';
import { ROUTES } from '../../routes/Routes.types';
import { theme } from '../../themes';
import { PlaylistDto } from '../../api/api.types';
import { FavoritesContext } from '../../contexts';

interface Props extends PlaylistDto {}

const wrapStyle: StyleProp<ViewStyle> = {
  marginHorizontal: 16,
  marginTop: 80,
  marginBottom: 0,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const linkStyle: StyleProp<ViewStyle> = {
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

export const PlaylistInfo: FC<Props> = ({ name, id, type, cover }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isFavorite, add, remove } = useContext(FavoritesContext);

  return (
    <View style={wrapStyle}>
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
      <Pressable
        onPress={() =>
          isFavorite(id) ? remove(id) : add({ id, name, type, cover })
        }
      >
        {isFavorite(id) ? (
          <HeartIcon fill={theme.colors.accent} />
        ) : (
          <HeartOutlinedIcon fill={theme.colors.accent} />
        )}
      </Pressable>
    </View>
  );
};
