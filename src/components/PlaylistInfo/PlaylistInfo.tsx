import React, { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { InteractionState, Pressable } from 'react-native';
import { useNavigate } from 'react-router';
import { css } from '@emotion/native';
import { useTheme } from '@emotion/react';

import { HeartIcon, HeartOutlinedIcon, SchevronRightIcon } from '../icons';
import { ROUTES } from '../../routes/Routes.types';
import { PlaylistDto } from '../../api/api.types';
import { FavoritesContext } from '../../contexts';
import { Link, Name, Title, TitleWrap, Wrapper } from './PlaylistInfo.styled';

export const PlaylistInfo: FC<PlaylistDto> = ({ name, id, type, cover }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const { isFavorite, add, remove } = useContext(FavoritesContext);

  return (
    <Wrapper>
      <Link onPress={() => navigate(`${ROUTES.Playlist}/${type}/${id}`)}>
        {({ hovered }: InteractionState) => (
          <>
            <TitleWrap>
              <Title
                style={css({
                  color: hovered ? theme.colors.main80 : theme.colors.main50,
                })}
              >
                {t('Playlist')}
              </Title>
              <SchevronRightIcon
                width={16}
                height={16}
                fill={hovered ? theme.colors.main80 : theme.colors.main50}
              />
            </TitleWrap>
            <Name>{name}</Name>
          </>
        )}
      </Link>
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
    </Wrapper>
  );
};
