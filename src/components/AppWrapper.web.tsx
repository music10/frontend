import React, { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const AppWrapper: FC<PropsWithChildren> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);
