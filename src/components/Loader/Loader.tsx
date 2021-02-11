import React from 'react';
import styled from '@emotion/native';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '@emotion/react';

const StyledLoader = styled.View`
  width: 200px;
  height: 200px;
  margin: auto;
`;

export const Loader: React.FC = () => {
  const theme = useTheme();
  return (
    <StyledLoader>
      <ActivityIndicator size="large" color={theme.colors.accent} />
    </StyledLoader>
  );
};
