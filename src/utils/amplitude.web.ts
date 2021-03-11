import amplitude from 'amplitude-js';
import { AMPLITUDE_API_KEY } from './variables';

export const AmplitudeInstance = amplitude.getInstance();
AmplitudeInstance.init(AMPLITUDE_API_KEY);
