import styled from '@emotion/native';

import { Text } from '../Text';

export const Wrapper = styled.View`
  margin: 16px 8px;
  flex-grow: 0;
`;

export const Track = styled.View`
  display: flex;
  flex-direction: row;
  padding: 8px;
`;

export const Number = styled(Text)`
  align-self: center;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 40px;
  font-family: ${({ theme }) => theme.fontFamilyMedium};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.main50};
`;
export const Description = styled.View`
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
`;
export const Artist = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilyMedium};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.main50};
`;
export const Name = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilySemiBold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.main};
`;
