import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { Alert } from 'react-native';

import { YandexMetrica } from 'react-native-appmetrica-yandex';

export const AppWrapper: React.FC = ({ children }) => {
  useEffect(() => {
    if (Platform.OS === 'android' && process.env.APP_METRIKA_API_KEY) {
      YandexMetrica.activateWithApiKey(process.env.APP_METRIKA_API_KEY);
    }
  });

  return (
    <NativeRouter>
      {children}
    </NativeRouter>
  );
};
