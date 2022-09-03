import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useNavigate } from 'react-router';

import { BottomMenu, Logo, MenuItem } from '../../components';
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
  const navigate = useNavigate();

  return (
    <View style={layoutStyle}>
      <View style={logoStyle}>
        <Logo />
      </View>
      <BottomMenu>
        <MenuItem
          text={t('Play')}
          icon={PlayIcon}
          primary
          onPress={() => navigate(ROUTES.Playlists)}
        />
      </BottomMenu>
    </View>
  );
};
