import React, { FC, useContext } from 'react';
import styled from '@emotion/native';

import { Text } from '../Text';
import { GameContext } from '../../contexts';
import { TRACKS_PER_ROUND } from '../../utils';

const CounterStyled = styled(Text)`
  font-size: 16px;
  font-family: ${(props) => props.theme.fontFamilyMedium};
  padding: 16px;
  margin-bottom: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.main};
`;

export const Counter: FC = () => {
  const { number } = useContext(GameContext);

  return (
    <CounterStyled>
      {number.current} / {TRACKS_PER_ROUND}
    </CounterStyled>
  );
};
