import React, { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router';
import { NativeRouter } from 'react-router-native';
import { useBackHandler } from '@react-native-community/hooks';

const HandleBack: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  useBackHandler(() => {
    navigate(-1);
    return true;
  });

  return <>{children}</>;
};

export const AppWrapper: FC<PropsWithChildren> = ({ children }) => (
  <NativeRouter>
    <HandleBack>{children}</HandleBack>
  </NativeRouter>
);
