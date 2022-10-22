import React, { FC, PropsWithChildren, useEffect, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { I18nextProvider } from 'react-i18next';

import {
  AmplitudeContext,
  ApiContext,
  CoinsContext,
  FavoritesContext,
  WsContext,
} from '../contexts';
import { AmplitudeInstance, Api, WS } from '../utils';
import i18n from '../i18n';
import { useFavorites } from '../hooks/useFavorites';
import { useCoins } from '../hooks';
import { useStatistics } from '../hooks/useStatistics';
import { StatisticsContext } from '../contexts/statistics.context';

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
  const coins = useCoins();
  const statistics = useStatistics();

  useEffect(
    () => () => {
      wsValue.destructor();
      queryClient.clear();
    },
    [wsValue, queryClient],
  );

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ApiContext.Provider value={apiValue}>
          <WsContext.Provider value={wsValue}>
            <FavoritesContext.Provider value={favorites}>
              <CoinsContext.Provider value={coins}>
                <StatisticsContext.Provider value={statistics}>
                  <AmplitudeContext.Provider value={amplitudeValue}>
                    {children}
                  </AmplitudeContext.Provider>
                </StatisticsContext.Provider>
              </CoinsContext.Provider>
            </FavoritesContext.Provider>
          </WsContext.Provider>
        </ApiContext.Provider>
      </QueryClientProvider>
    </I18nextProvider>
  );
};
