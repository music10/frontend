import React from 'react';
import styled from '@emotion/native';

interface Props {
  guess: number;
  text: string;
}

const ResultLayout = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledTotal = styled.Text`
  font-style: italic;
  font-weight: 800;
  font-size: 64px;
  line-height: 78px;
  text-align: center;
  color: ${({ theme }) => theme.colors.bg};
  text-shadow: 0 0 2px ${({ theme }) => theme.colors.accent};
`;

const StyledText = styled.Text`
  font-style: italic;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Result: React.FC<Props> = ({ guess, text }) => (
  <ResultLayout>
    <StyledTotal>{guess} / 10</StyledTotal>
    <StyledText>{text}</StyledText>
  </ResultLayout>
);
