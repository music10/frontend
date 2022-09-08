import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PlaylistCover } from '../PlaylistCover';
import { PlaylistDto } from '../../api/api.types';
import {
  Cover,
  Description,
  Name,
  Title,
  Wrapper,
} from './PlaylistHeader.styled';

export const PlaylistHeader: FC<PlaylistDto> = ({ cover, name }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Cover>
        <PlaylistCover size={80} cover={cover} />
      </Cover>
      <Description>
        <Title>{t('Playlist')}</Title>
        <Name numberOfLines={3}>{name}</Name>
      </Description>
    </Wrapper>
  );
};
