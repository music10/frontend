import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleProp, View, ViewStyle } from 'react-native';

import { BottomMenu, Link, Logo, MenuItem } from '../../components';
import { ROUTES } from '../../routes/Routes.types';
import { PlayIcon } from '../../components/icons';

const layoutStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100%',
};

const logoStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexGrow: 1,
  alignSelf: 'center',
  justifyContent: 'center',
};

export const Start = () => {
  const { t } = useTranslation();

  return (
    <View style={layoutStyle}>
      <View style={logoStyle}>
        <Logo />
      </View>
      <BottomMenu>
        <Link
          to={ROUTES.Playlists}
          component={MenuItem}
          primary
          icon={PlayIcon}
          text={t('Play')}
        />
      </BottomMenu>
    </View>
  );
};
