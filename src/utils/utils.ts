export const formatNumber = (x: number): string =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u2009');
