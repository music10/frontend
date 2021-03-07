export const useShare = () => async (data: string) =>
  // @ts-ignore
  navigator.share({ title: data, text: data, url: data });
