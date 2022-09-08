import styled from '@emotion/native';
import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';

import { useTheme } from '@emotion/react';

const LoaderStyled = styled.View`
  align-self: center;
  width: 200px;
  height: 200px;
  margin: auto;
`;

export const Loader: FC = () => {
  const theme = useTheme();

  return (
    <LoaderStyled>
      <ActivityIndicator size="large" color={theme.colors.accent} />
    </LoaderStyled>
  );
};
