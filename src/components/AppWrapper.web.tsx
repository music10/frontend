import { Global, useTheme } from '@emotion/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const AppWrapper: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Global
        styles={{
          body: { background: theme.colors.bg, margin: 'auto', maxWidth: 520 },
          '#root': { display: 'flex', flexDirection: 'column' },
          ':focus': { outline: 'none' },
        }}
      />
      <BrowserRouter>{children}</BrowserRouter>
    </>
  );
};
