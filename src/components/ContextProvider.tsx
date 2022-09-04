import React, { FC, PropsWithChildren, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { I18nextProvider } from 'react-i18next';

import {
  AmplitudeContext,
  ApiContext,
  FavoritesContext,
  WsContext,
} from '../contexts';
import { AmplitudeInstance, Api, WS } from '../utils';
import i18n from '../i18n';
import { useFavorites } from '../hooks/useFavorites';

interface ContextProviderProps {
  api?: Api;
  ws?: WS;
}

export const ContextProvider: FC<PropsWithChildren<ContextProviderProps>> = ({
  children,
  api,
  ws,
}) => {
  const amplitudeValue = useMemo(() => AmplitudeInstance, []);
  const apiValue = useMemo(() => api || new Api(), [api]);
  const wsValue = useMemo(() => ws || new WS(), [ws]);
  const queryClient = useMemo(() => new QueryClient(), []);
  const favorites = useFavorites();

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ApiContext.Provider value={apiValue}>
          <WsContext.Provider value={wsValue}>
            <FavoritesContext.Provider value={favorites}>
              <AmplitudeContext.Provider value={amplitudeValue}>
                {children}
              </AmplitudeContext.Provider>
            </FavoritesContext.Provider>
          </WsContext.Provider>
        </ApiContext.Provider>
      </QueryClientProvider>
    </I18nextProvider>
  );
};
