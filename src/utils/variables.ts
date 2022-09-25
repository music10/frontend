/**
 * WS-url for server with protocol and port
 */
export const WS_HOST =
  process.env.REACT_APP_WS_HOST || 'wss://ws.musiq.dergunov.net';

/**
 * HTTP-url for server with protocol and port
 */
export const API_HOST =
  process.env.REACT_APP_API_HOST || 'https://api.musiq.dergunov.net/';

/**
 * WS-url for server with protocol and port
 */
export const AMPLITUDE_API_KEY = process.env.REACT_APP_AMPLITUDE_API_KEY || '';

export const BUGSNAG_KEY = process.env.REACT_APP_BUGSNAG_KEY ?? null;

/**
 * Track number per game
 */
export const TRACKS_PER_ROUND = 10;
