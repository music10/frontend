import styled from '@emotion/native';

import { Text } from '../Text';

export const Wrapper = styled.View`
  margin: 16px;
  display: flex;
  flex-direction: row;
`;

export const Cover = styled.View`
  padding: 6px 0;
  margin-right: 16px;
`;

export const Description = styled.View`
  display: flex;
  flex-direction: column;
  padding: 8px;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
`;

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilyMedium};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.main50};
  margin-bottom: 8px;
`;

export const Name = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilySemiBold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.main};
`;
