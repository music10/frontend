import React from 'react';

import { AppWrapper, ContextProvider } from './components';
import Routes from './routes/Routes';
import { BugsnagWrapper } from './BugsnagWrapper';
import { MenuProvider } from 'react-native-popup-menu';
import { ThemeProvider } from '@emotion/react';
import { theme } from './themes';

export default () => (
  <ThemeProvider theme={theme}>
    <BugsnagWrapper>
      <ContextProvider>
        <MenuProvider>
          <AppWrapper>
            <Routes />
          </AppWrapper>
        </MenuProvider>
      </ContextProvider>
    </BugsnagWrapper>
  </ThemeProvider>
);
