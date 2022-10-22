export const formatNumber = (x: number): string =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u2009');

export const declOfNum = (number: number, titles: string[]): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};
