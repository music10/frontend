import React, { FC } from 'react';
import styled from '@emotion/native';
import { PressableProps } from 'react-native';
import { VariantProps } from '../Variant.types';
import { ITrack } from '../../interfaces';
import { useVariant, VariantComponent } from '../../hooks';

interface Props extends ITrack, VariantProps, PressableProps {}

const StyledTrack = styled.View<Partial<Props>>(
  ({ theme, variant }) => `
  padding: 16px;
  background: ${
    variant === 'hover' || variant === 'focused' || variant === 'active'
      ? theme.colors.main10
      : 'transparent'
  };
  border: 2px solid ${
    variant === 'focused'
      ? theme.colors.main
      : variant === 'success'
      ? theme.colors.accent
      : variant === 'inactive'
      ? theme.colors.main20
      : theme.colors.main50
  };
`,
);

const Artist = styled.Text<Partial<Props>>(
  ({ theme, variant }) => `
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: ${
    variant === 'inactive'
      ? theme.colors.main80
      : variant === 'success'
      ? theme.colors.accent
      : theme.colors.main
  };
`,
);

const TrackName = styled.Text<Partial<Props>>(
  ({ theme, variant }) => `
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
  color: ${
    variant === 'inactive'
      ? theme.colors.main80
      : variant === 'success'
      ? theme.colors.accent
      : theme.colors.main
  };
`,
);

export const Track: FC<Props> = ({
  id,
  name,
  artist,
  variant: defaultVariant,
  ...props
}) => {
  const { variant, setVariant } = useVariant(defaultVariant);

  return (
    <VariantComponent
      setVariant={setVariant}
      key={id}
      variant={defaultVariant}
      {...props}
    >
      <StyledTrack variant={variant}>
        <Artist variant={variant}>{artist}</Artist>
        <TrackName variant={variant}>{name}</TrackName>
      </StyledTrack>
    </VariantComponent>
  );
};
