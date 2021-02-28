export const useShare = () => async (data: string) =>
  navigator.share({ url: data });
