import React from 'react';

import { AppWrapper, ContextProvider } from './components';
import Routes from './routes/Routes';

export default () => (
  <ContextProvider>
    <AppWrapper>
      <Routes />
    </AppWrapper>
  </ContextProvider>
);
