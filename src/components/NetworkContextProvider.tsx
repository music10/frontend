import React, { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApiContext, WsContext } from '../contexts';
import { Api, WS } from '../utils';

interface NetworkContextProviderProps {
  api?: Api;
  ws?: WS;
}

export const NetworkContextProvider: React.FC<NetworkContextProviderProps> = ({
  children,
  api,
  ws,
}) => {
  const apiValue = useMemo(() => api || new Api(), [api]);
  const wsValue = useMemo(() => ws || new WS(), [ws]);
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <ApiContext.Provider value={apiValue}>
        <WsContext.Provider value={wsValue}>{children}</WsContext.Provider>
      </ApiContext.Provider>
    </QueryClientProvider>
  );
};
