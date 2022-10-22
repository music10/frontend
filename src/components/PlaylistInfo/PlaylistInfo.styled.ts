import styled from '@emotion/native';
import { Text } from '../Text';

export const Wrapper = styled.View`
  margin: 80px 16px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.Pressable`
  padding: 8px;
  border-width: 2px;
  border-color: transparent;
`;

export const TitleWrap = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilyMedium};
  font-size: 14px;
  line-height: 17px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.main50};
`;

export const Name = styled(Text)`
  margin-top: 8px;
  font-family: ${({ theme }) => theme.fontFamilySemiBold};
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.main80};
`;
