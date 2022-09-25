import React, { FC } from 'react';
import styled from '@emotion/native';

import { Text } from '../Text';
import { TRACKS_PER_ROUND } from '../../utils';
import { useAppSelector } from '../../store/hooks';

const CounterStyled = styled(Text)`
  flex: 0 0 50%;
  font-size: 16px;
  font-family: ${(props) => props.theme.fontFamilyMedium};
  padding: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.main};
`;

export const Counter: FC = () => {
  const { number } = useAppSelector((store) => store.game);

  return (
    <CounterStyled>
      {number} / {TRACKS_PER_ROUND}
    </CounterStyled>
  );
};
