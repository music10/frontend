import { useTheme } from '@emotion/react';
import React, { FC } from 'react';
import styled from '@emotion/native';
import { useVariant, VariantComponent } from '../../hooks';
import { SchevronRightIcon } from '../icons';
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

export const PlaylistInfo: FC<Props> = ({ variant: defaultVariant, name }) => {
  const theme = useTheme();
  const { variant, setVariant } = useVariant(defaultVariant);

  return (
    <VariantComponent setVariant={setVariant}>
      <StyledPlaylistInfo variant={variant}>
        <TitleLayout>
          <Title variant={variant}>Плейлист</Title>
          <SchevronRightIcon
            width={16}
            height={16}
            fill={
              variant === 'hover' || variant === 'focused'
                ? theme.colors.main80
                : theme.colors.main50
            }
          />
        </TitleLayout>
        <PlaylistName>{name}</PlaylistName>
      </StyledPlaylistInfo>
    </VariantComponent>
  );
};
