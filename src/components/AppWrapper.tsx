import React, { FC, useEffect } from 'react';
import { Platform } from 'react-native';
import { NativeRouter } from 'react-router-native';

import { YandexMetrica } from 'react-native-appmetrica-yandex';
import { useBackHandler } from '@react-native-community/hooks';
import { useHistory } from 'react-router';

const HandleBack: FC = ({ children }) => {
  const history = useHistory();

  useBackHandler(() => {
    history.goBack();
    return true;
  });

  return <>{children}</>;
};

export const AppWrapper: React.FC = ({ children }) => {
  useEffect(() => {
    if (Platform.OS === 'android' && process.env.APP_METRIKA_API_KEY) {
      YandexMetrica.activateWithApiKey(process.env.APP_METRIKA_API_KEY);
    }
  });

  return (
    <NativeRouter>
      <HandleBack>{children}</HandleBack>
    </NativeRouter>
  );
};
