import React, { FC } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { PressableProps } from 'react-native';
import { VariantProps } from '../Variant.types';
import { IconProps } from '../icons/Icon.props';
import { useVariant, VariantComponent } from '../../hooks';

interface Props extends VariantProps, PressableProps {
  text: string;
  icon: React.FC<IconProps>;
  primary?: boolean;
}

const StyledItem = styled.View<Partial<Props>>(
  ({ primary, theme, variant }) => `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 24px 15px ${variant === 'default' ? '24px' : '32px'};
  background-color: ${primary ? theme.colors.accent : theme.colors.bg};
  border: 2px solid ${
    variant === 'focused'
      ? theme.colors.main
      : primary
      ? theme.colors.accent
      : theme.colors.bg
  };
  box-shadow: ${
    !primary || variant === 'default' || !variant
      ? 'none'
      : variant === 'hover'
      ? '0px 24px 48px rgba(0, 0, 0, 0.75);'
      : '0px 8px 16px rgba(0, 0, 0, 0.75)'
  };
`,
);

const StyledText = styled.Text<Partial<Props>>(
  ({ primary, theme }) => `
  color: ${primary ? theme.colors.bg : theme.colors.main};
  font-weight: 600;
  font-size: 14px;
  margin-left: 24px;
  line-height: 24px;
`,
);

export const MenuItem: FC<Props> = ({
  primary,
  text,
  icon: Icon,
  variant: defaultVariant,
  ...props
}) => {
  const theme = useTheme();
  const { variant, setVariant } = useVariant(defaultVariant);

  return (
    <VariantComponent setVariant={setVariant} {...props}>
      <StyledItem primary={primary} variant={variant}>
        <Icon
          fill={primary ? theme.colors.bg : theme.colors.main}
          height={24}
          width={24}
        />
        <StyledText primary={primary} variant={variant}>
          {text}
        </StyledText>
      </StyledItem>
    </VariantComponent>
  );
};
