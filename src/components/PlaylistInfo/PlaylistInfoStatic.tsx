import React, { FC } from 'react';
import styled from '@emotion/native';
import { useTranslation } from 'react-i18next';
import { VariantProps } from '../Variant.types';
import { IPlaylist } from '../../interfaces';

interface Props extends VariantProps, IPlaylist {}

const StyledPlaylistInfo = styled.View<Partial<Props>>(
  ({ theme, variant }) => `
  padding: 8px;
  border: 2px solid ${
    variant === 'focused' ? theme.colors.main80 : 'transparent'
  };
`,
);
const TitleLayout = styled.View<Partial<Props>>`
  display: flex;
  flex-direction: row;
`;

const Title = styled.Text<Partial<Props>>`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-right: 8px;
  color: ${({ theme, variant }) =>
    variant === 'hover' || variant === 'focused'
      ? theme.colors.main80
      : theme.colors.main50};
`;

const PlaylistName = styled.Text<Partial<Props>>`
  margin-top: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.main80};
`;

export const PlaylistInfo: FC<Props> = ({ variant, name }) => {
  const { t } = useTranslation();

  return (
    <StyledPlaylistInfo variant={variant}>
      <TitleLayout>
        <Title variant={variant}>{t('Playlist')}</Title>
      </TitleLayout>
      <PlaylistName>{name}</PlaylistName>
    </StyledPlaylistInfo>
  );
};
