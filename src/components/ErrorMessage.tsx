import styled from '@emotion/native';

import { Text } from './Text';

export const ErrorMessage = styled(Text)`
  padding: 24px 48px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.main};
  border: 2px solid ${({ theme }) => theme.colors.danger};
  font-family: ${({ theme }) => theme.fontFamilySemiBold};
  position: relative;
  text-align: center;
`;
