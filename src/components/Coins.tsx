import React, { FC, useContext } from 'react';
import styled from '@emotion/native';

import { Text } from './Text';
import { CoinsIcon } from './icons/Coins';
import { formatNumber } from '../utils';
import { useTheme } from '@emotion/react';
import { CoinsContext } from '../contexts';

const CoinsStyled = styled.View`
  margin: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 64px;
`;

const StyledText = styled(Text)`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamilySemiBold};
  color: ${({ theme }) => theme.colors.main};
`;

export const Coins: FC = () => {
  const { coins } = useContext(CoinsContext);
  const theme = useTheme();

  return (
    <CoinsStyled>
      <StyledText>{formatNumber(coins ?? 0)}</StyledText>
      <CoinsIcon fill={theme.colors.main} />
    </CoinsStyled>
  );
};
