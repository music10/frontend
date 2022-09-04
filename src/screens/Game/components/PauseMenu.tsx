import React, { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { useNavigate } from 'react-router';

import { BlurView, MenuItem, Text } from '../../../components';
import { ExitIcon, PlayIcon } from '../../../components/icons';
import { ROUTES } from '../../../routes/Routes.types';
import { TRACKS_PER_ROUND } from '../../../utils';
import { GameContext } from '../../../contexts';
import { theme } from '../../../themes';

const overlayStyle: StyleProp<ViewStyle> = {
  marginVertical: 0,
  marginHorizontal: 'auto',
  maxWidth: 520,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  top: 64,
  left: 0,
  right: 0,
  bottom: 8,
  justifyContent: 'flex-end',
};

const layoutStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 8,
  paddingLeft: 16,
  paddingRight: 16,
  paddingBottom: 32,
  backgroundColor: theme.colors.bg75,
  ...Platform.select({
    android: {
      elevation: 50,
    },
    web: {
      boxShadow: `0 -25px 50px ${theme.colors.bg}`,
    },
  }),
};

const draglineStyle: StyleProp<ViewStyle> = {
  alignSelf: 'center',
  marginBottom: 24,
  width: 42,
  height: 2,
  backgroundColor: theme.colors.main,
};
const totalStyle: StyleProp<TextStyle> = {
  padding: 16,
  marginBottom: 16,
  fontSize: 16,
  textAlign: 'center',
  color: theme.colors.main,
};

export const PauseMenu: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { number, isPause, setPause } = useContext(GameContext);

  return isPause ? (
    <View style={overlayStyle}>
      <BlurView blurRadius={15} overlayColor="transparent">
        <View style={layoutStyle}>
          <View style={draglineStyle} />
          <Text style={totalStyle}>
            {t('Completed')}: {number.current} / {TRACKS_PER_ROUND}
          </Text>
          <MenuItem
            text={t('Play')}
            icon={PlayIcon}
            primary
            onPress={() => setPause(false)}
          />
          <MenuItem
            icon={ExitIcon}
            text={t('Exit')}
            onPress={() => navigate(ROUTES.Playlists)}
          />
        </View>
      </BlurView>
    </View>
  ) : null;
};
