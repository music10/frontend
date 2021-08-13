import React, { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { I18nextProvider } from 'react-i18next';

import { AmplitudeContext, ApiContext, WsContext } from '../contexts';
import { AmplitudeInstance, Api, WS } from '../utils';
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
  const amplitudeValue = useMemo(() => AmplitudeInstance, []);
  const apiValue = useMemo(() => api || new Api(), [api]);
  const wsValue = useMemo(() => ws || new WS(), [ws]);
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ApiContext.Provider value={apiValue}>
          <WsContext.Provider value={wsValue}>
            <AmplitudeContext.Provider value={amplitudeValue}>
              {children}
            </AmplitudeContext.Provider>
          </WsContext.Provider>
        </ApiContext.Provider>
      </QueryClientProvider>
    </I18nextProvider>
  );
};
