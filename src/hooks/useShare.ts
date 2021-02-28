import Share from 'react-native-share';

export const useShare = () => async (data: string) => Share.open({ url: data });
