import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PressableProps, TextInputProps, TextProps } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { SearchIcon } from '../icons';
import { VariantProps } from '../Variant.types';
import { useVariant, VariantComponent } from '../../hooks';

const StyledSearchField = styled.View<VariantProps & PressableProps>(
  ({ variant, theme }) => `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  border: 2px solid ${
    variant === 'focused' ? theme.colors.main : 'transparent'
  };
  background: ${
    variant === 'hover' || variant === 'focused'
      ? theme.colors.main20
      : theme.colors.main10
  };
  border-radius: 0;`,
);

const StyledTextInput = styled.TextInput<VariantProps & TextProps>(
  ({ theme, variant }) => `
  width: 100%;
  padding: 8px;
  color: ${variant === 'active' ? theme.colors.main80 : theme.colors.main50};
  margin-left: 16px;
  font-size: 18px;`,
);

export const SearchField: FC<VariantProps & TextInputProps> = ({
  variant: defaultVariant,
  ...props
}) => {
  const { t } = useTranslation('translation');
  const theme = useTheme();
  const { variant, setVariant } = useVariant(defaultVariant);

  return (
    <VariantComponent setVariant={setVariant}>
      <StyledSearchField variant={variant}>
        <SearchIcon fill={theme.colors.main50} width={24} height={24} />
        <StyledTextInput
          variant={variant}
          placeholder={t('SearchInSpotify')}
          style={{ borderWidth: 0 }}
          {...props}
        />
      </StyledSearchField>
    </VariantComponent>
  );
};
