import React from 'react';

import { AppWrapper, ContextProvider } from './components';
import Routes from './routes/Routes';
import { BugsnagWrapper } from './BugsnagWrapper';
import { MenuProvider } from 'react-native-popup-menu';

export default () => (
  <BugsnagWrapper>
    <ContextProvider>
      <MenuProvider>
        <AppWrapper>
          <Routes />
        </AppWrapper>
      </MenuProvider>
    </ContextProvider>
  </BugsnagWrapper>
);
