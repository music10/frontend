import React from 'react';
import { Amplitude } from '@amplitude/react-native';

export const AmplitudeContext = React.createContext<Amplitude>({} as Amplitude);
