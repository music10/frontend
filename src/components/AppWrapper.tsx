import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { NativeRouter } from 'react-router-native';
import { useBackHandler } from '@react-native-community/hooks';

const HandleBack: FC = ({ children }) => {
  const history = useHistory();

  useBackHandler(() => {
    history.goBack();
    return true;
  });

  return <>{children}</>;
};

export const AppWrapper: React.FC = ({ children }) => (
  <NativeRouter>
    <HandleBack>{children}</HandleBack>
  </NativeRouter>
);
