import React from 'react';

import { AppWrapper, ContextProvider } from './components';
import Routes from './routes/Routes';
import { BugsnagWrapper } from './BugsnagWrapper';

export default () => (
  <BugsnagWrapper>
    <ContextProvider>
      <AppWrapper>
        <Routes />
      </AppWrapper>
    </ContextProvider>
  </BugsnagWrapper>
);
