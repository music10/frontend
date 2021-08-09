import React, { FC } from 'react';
import styled from '@emotion/native';
import { useTranslation } from 'react-i18next';

import { Text } from '../Text';
import { Components } from '../../api/api.types';

interface Props extends Components.Schemas.PlaylistDto {}

const StyledPlaylistInfo = styled.View<Partial<Props>>`
  padding: 8px;
  border: 2px solid transparent;
`;

const TitleLayout = styled.View<Partial<Props>>`
  display: flex;
  flex-direction: row;
`;

const Title = styled(Text)<Partial<Props>>`
  font-family: ${({ theme }) => theme.fontFamilyMedium};
  font-size: 14px;
  line-height: 17px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.main50};
`;

const PlaylistName = styled(Text)<Partial<Props>>`
  margin-top: 8px;
  font-family: ${({ theme }) => theme.fontFamilySemiBold};
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.main80};
`;

export const PlaylistInfo: FC<Props> = ({ name }) => {
  const { t } = useTranslation();

  return (
    <StyledPlaylistInfo>
      <TitleLayout>
        <Title>{t('Playlist')}</Title>
      </TitleLayout>
      <PlaylistName>{name}</PlaylistName>
    </StyledPlaylistInfo>
  );
};
