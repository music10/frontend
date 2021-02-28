import React, { FC } from 'react';
import { Image } from 'react-native';
import styled from '@emotion/native';
import { Link } from '../Link';
import { VariantProps } from '../Variant.types';
import { useVariant, VariantComponent } from '../../hooks';
import { ROUTES } from '../../routes/Routes.types';

interface Props extends VariantProps {
  id: string;
  cover: string;
  name: string;
}

const StyledItem = styled.View<Partial<Props>>(
  ({ variant, theme }) => `
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  padding: 8px;
  background-color: ${
    variant === 'hover'
      ? theme.colors.main10
      : variant === 'active'
      ? theme.colors.main5
      : variant === 'focused'
      ? theme.colors.main10
      : 'transparent'
  };
  border: 2px solid ${
    variant === 'focused' ? theme.colors.main : 'transparent'
  };
`,
);
const StyledText = styled.Text`
  font-weight: 600;
  font-size: 14px;
  margin-left: 24px;
  color: ${({ theme }) => theme.colors.main};
`;

export const PlaylistItem: FC<Props> = ({
  id,
  name,
  cover,
  variant: defaultFilter,
  ...props
}) => {
  const { variant, setVariant } = useVariant(defaultFilter);

  return (
    <Link to={`${ROUTES.Game}/${id}`}>
      <VariantComponent setVariant={setVariant}>
        <StyledItem variant={variant} {...props} accessibilityRole="button">
          <Image
            source={{ uri: cover, height: 48, width: 48 }}
            style={{ height: 48, width: 48 }}
          />
          <StyledText>{name}</StyledText>
        </StyledItem>
      </VariantComponent>
    </Link>
  );
};
