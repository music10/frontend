import React, { FC } from 'react';
import styled from '@emotion/native';
import { useTranslation } from 'react-i18next';
import { PressableProps, TextProps, ViewProps } from 'react-native';
import { useTheme } from '@emotion/react';
import { SearchIcon } from '../icons';
import { VariantProps } from '../Variant.types';
import { useVariant, VariantComponent } from '../../hooks';

const StyledSearch = styled.View<VariantProps & PressableProps>(
  ({ variant, theme }) => `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 17px 16px;
  border: 2px solid ${
    variant === 'focused' ? theme.colors.main : 'transparent'
  };
  border-radius: 0;
  `,
);

const StyledText = styled.Text<VariantProps & TextProps>(
  ({ theme, variant }) => `
  color: ${
    variant === 'default'
      ? theme.colors.main50
      : variant === 'active'
      ? theme.colors.main20
      : theme.colors.main80
  };
  margin-left: 16px;
  font-size: 24px;`,
);

export const Search: FC<VariantProps & ViewProps> = ({
  variant: defaultVariant,
  ...props
}) => {
  const { t } = useTranslation('translation');
  const theme = useTheme();
  const { variant, setVariant } = useVariant(defaultVariant);

  return (
    <VariantComponent setVariant={setVariant}>
      <StyledSearch variant={variant} {...props}>
        <SearchIcon
          fill={
            variant === 'default' ? theme.colors.main50 : theme.colors.main80
          }
        />
        <StyledText variant={variant}>{t('SearchInSpotify')}</StyledText>
      </StyledSearch>
    </VariantComponent>
  );
};
