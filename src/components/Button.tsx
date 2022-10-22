import styled from '@emotion/native';

export const Button = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ theme }) => theme.colors.bg};
`;
