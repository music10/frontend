/**
 * WS-url for server with protocol and port
 */
export const WS_HOST =
  process.env.REACT_APP_WS_HOST || 'wss://ws.music.dergunov.net';

/**
 * HTTP-url for server with protocol and port
 */
export const API_HOST =
  process.env.REACT_APP_API_HOST || 'https://api.music.dergunov.net';

/**
 * Track number per game
 */
export const TRACKS_PER_ROUND = 10;

/**
 * Track duration in ms
 */
export const TRACK_DURATION = 10000;
