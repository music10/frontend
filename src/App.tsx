import React from 'react';
import { Provider } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';
import { ThemeProvider } from '@emotion/react';

import { AppWrapper, ContextProvider } from './components';
import Routes from './routes/Routes';
import { BugsnagWrapper } from './BugsnagWrapper';
import { theme } from './themes';
import { store } from './store';

export default () => (
  <ThemeProvider theme={theme}>
    <BugsnagWrapper>
      <Provider store={store}>
        <ContextProvider>
          <MenuProvider>
            <AppWrapper>
              <Routes />
            </AppWrapper>
          </MenuProvider>
        </ContextProvider>
      </Provider>
    </BugsnagWrapper>
  </ThemeProvider>
);
