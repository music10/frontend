import { PressableProps } from 'react-native';
import styled, { css } from '@emotion/native';

export interface ButtonProps extends PressableProps {
  primary?: boolean;
}

export const Button = styled.Pressable<ButtonProps>`
  padding: 24px 96px;
  font-size: 24px;
  font-weight: 700;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.main};
  & + & {
    margin-top: 12px;
  }
  ${({ primary, theme }) =>
    primary
      ? css`
          border: 2px solid ${theme.colors.accent};
          color: ${theme.colors.bg};
          background: ${theme.colors.accent};
         }
        `
      : css`
          border: 2px solid ${theme.colors.main};
          color: ${theme.colors.main};
          background: transparent;
        `}
  &:disabled {
    opacity: 0.7;
    border: 2px solid ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.main};
    background: transparent;
  }
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  text-align: center;
`;
