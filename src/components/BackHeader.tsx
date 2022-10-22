import React, { FC, PropsWithChildren } from 'react';
import { PressableProps } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { Text } from './Text';
import { RewindIcon } from './icons';

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Back = styled.Pressable`
  margin: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 64px;
`;

const TextStyled = styled(Text)`
  margin-left: 8px;
  text-decoration-line: none;
  color: ${({ theme }) => theme.colors.main50};
`;

const RewindIconStyled = styled(RewindIcon)`
  padding: 0 8px;
`;

export const BackHeader: FC<
  PropsWithChildren<PressableProps & { text?: string }>
> = ({ text, children, ...props }) => {
  const theme = useTheme();

  return (
    <Header>
      <Back {...props}>
        <RewindIconStyled fill={theme.colors.main50} width={24} height={24} />
        <TextStyled>{text ?? 'назад'}</TextStyled>
      </Back>
      {children}
    </Header>
  );
};
