import React, { FC, useContext } from 'react';
import styled from '@emotion/native';
import { TRACKS_PER_ROUND } from '../../utils';
import { Text } from '../Text';
import { GameContext } from '../../contexts';

const StyledCounter = styled(Text)`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamilyMedium};
  padding: 16px;
  margin-bottom: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.main};
`;

export const Counter: FC = () => {
  const { number } = useContext(GameContext);

  return (
    <StyledCounter>
      {number.current} / {TRACKS_PER_ROUND}
    </StyledCounter>
  );
};
