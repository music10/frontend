import React from 'react';

import { AppWrapper, ContextProvider } from './components';
import Routes from './routes/Routes';

export default function App() {
  return (
    <AppWrapper>
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </AppWrapper>
  );
}
