import React, { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { InteractionState, Pressable, View } from 'react-native';
import { useNavigate } from 'react-router';

import { Text } from '../Text';
import { HeartIcon, HeartOutlinedIcon, SchevronRightIcon } from '../icons';
import { ROUTES } from '../../routes/Routes.types';
import { theme } from '../../themes';
import { PlaylistDto } from '../../api/api.types';
import { FavoritesContext } from '../../contexts';
import {
  linkStyle,
  nameStyle,
  titleWrapStyle,
  wrapStyle,
} from './PlaylistInfo.style';

export const PlaylistInfo: FC<PlaylistDto> = ({ name, id, type, cover }) => {
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
