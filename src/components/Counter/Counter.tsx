import React, { FC } from 'react';
import styled from '@emotion/native';
import { TextProps } from 'react-native';
import { TRACKS_PER_ROUND } from '../../utils';

const StyledCounter = styled.Text`
  font-size: 16px;
  font-weight: 500;
  padding: 16px;
  margin-bottom: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.main};
`;

interface Props extends TextProps {
  current: number;
}

export const Counter: FC<Props> = ({ current, ...props }) => (
  <StyledCounter {...props}>
    {current} / {TRACKS_PER_ROUND}
  </StyledCounter>
);
