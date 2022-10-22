import React, { FC } from 'react';
import styled from '@emotion/native';

import { Text } from './Text';
import { Loader } from './Loader';

interface Props {
  guess: number;
  text: string;
}

const Layout = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Total = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilyExtraBoldItalic};
  font-size: 64px;
  line-height: 78px;
  text-align: center;
  color: ${({ theme }) => theme.colors.accent};
`;

const TextStyled = styled(Text)`
  font-style: italic;
  font-family: ${({ theme }) => theme.fontFamilyExtraBoldItalic};
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Result: FC<Props> = ({ guess, text }) => (
  <Layout>
    {guess || text ? (
      <>
        <Total>{guess} / 10</Total>
        <TextStyled>{text}</TextStyled>
      </>
    ) : (
      <Loader />
    )}
  </Layout>
);
