import { TextInputProps } from 'react-native';
import styled from '@emotion/native';

export const Input = styled.TextInput<TextInputProps>`
  margin: 0 auto 24px;
  padding: 24px 36px;
  font-size: 18px;
  font-weight: 700;
  max-width: 500px;
  position: relative;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.main};
  &:placeholder {
    color: ${({ theme }) => theme.colors.main};
  }
  background: transparent;
`;
