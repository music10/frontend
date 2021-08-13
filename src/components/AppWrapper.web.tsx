import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const AppWrapper: React.FC = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);
