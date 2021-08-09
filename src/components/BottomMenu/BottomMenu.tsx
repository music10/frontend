import styled from '@emotion/native';
import { View } from 'react-native';

export const BottomMenu = styled(View)`
  padding: 32px 16px;
  background-color: ${({ theme }) => theme.colors.bg};
  position: relative;
`;
