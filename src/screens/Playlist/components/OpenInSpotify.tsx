import React, { FC, useCallback, useMemo } from 'react';
import { Linking } from 'react-native';

import { MenuItem } from '../../../components';
import { SpotifyIcon } from '../../../components/icons';

interface Props {
  id: string;
}

export const OpenInSpotify: FC<Props> = ({ id }) => {
  const url = useMemo(() => `https://open.spotify.com/playlist/${id}`, [id]);
  const openLink = useCallback(async () => {
    if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url);
    }
  }, [url]);

  return (
    <MenuItem onPress={openLink} text="Открыть в Spotify" icon={SpotifyIcon} />
  );
};
