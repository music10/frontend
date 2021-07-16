import { Amplitude } from '@amplitude/react-native';
import { AMPLITUDE_API_KEY } from './variables';

export const AmplitudeInstance = Amplitude.getInstance();
console.log('AMPLITUDE_API_KEY', AMPLITUDE_API_KEY);
AmplitudeInstance.init(AMPLITUDE_API_KEY).catch(console.error);
