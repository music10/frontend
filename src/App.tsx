import React from 'react';

import { AppWrapper, ContextProvider } from './components';
import Routes from './Routes';

export default function App() {
  return (
    <AppWrapper>
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </AppWrapper>
  );
}
