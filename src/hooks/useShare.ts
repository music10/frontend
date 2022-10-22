import Share from 'react-native-share';
import { Bugsnag } from '../utils';

export const useShare = () => async (data: string) =>
  Share.open({ title: 'Musiq', url: data }).catch((e) => {
    if (e.message !== 'User did not share') {
      Bugsnag.notify(e);
    }
  });
