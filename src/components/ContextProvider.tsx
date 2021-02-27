import React, { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@emotion/react';
import { I18nextProvider } from 'react-i18next';
import { ApiContext, WsContext } from '../contexts';
import { Api, WS } from '../utils';
import { theme } from '../themes';
import i18n from '../i18n';

interface ContextProviderProps {
  api?: Api;
  ws?: WS;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
  api,
  ws,
}) => {
  const apiValue = useMemo(() => api || new Api(), [api]);
  const wsValue = useMemo(() => ws || new WS(), [ws]);
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <ApiContext.Provider value={apiValue}>
            <WsContext.Provider value={wsValue}>{children}</WsContext.Provider>
          </ApiContext.Provider>
        </QueryClientProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
};
