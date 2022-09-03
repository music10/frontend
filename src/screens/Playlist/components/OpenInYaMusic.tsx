import React, { FC, useCallback } from 'react';
import { Linking } from 'react-native';

import { MenuItem } from '../../../components';
import { YaMusicIcon } from '../../../components/icons';

interface Props {
  url?: string;
}

export const OpenInYaMusic: FC<Props> = ({ url }) => {
  const openLink = useCallback(async () => {
    if (url) {
      await Linking.openURL(url);
    }
  }, [url]);

  return url ? (
    <MenuItem
      onPress={openLink}
      text="Открыть в Яндекс.Музыке"
      icon={YaMusicIcon}
    />
  ) : null;
};
