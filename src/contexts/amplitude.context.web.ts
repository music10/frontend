import React from 'react';
import { AmplitudeClient } from 'amplitude-js';

export const AmplitudeContext = React.createContext<AmplitudeClient>(
  {} as AmplitudeClient,
);
