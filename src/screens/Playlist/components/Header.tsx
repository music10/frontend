import React, { FC } from 'react';
import { Pressable, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { useNavigate } from 'react-router';

import { Text } from '../../../components';
import { RewindIcon } from '../../../components/icons';
import { ROUTES } from '../../../routes/Routes.types';
import { theme } from '../../../themes';

const backStyle: StyleProp<ViewStyle> = {
  marginVertical: 0,
  marginHorizontal: 16,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 64,
};

const textStyle: StyleProp<TextStyle> = {
  marginLeft: 8,
  textDecorationLine: 'none',
  color: theme.colors.main50,
};

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <Pressable style={backStyle} onPress={() => navigate(ROUTES.Playlists)}>
      <RewindIcon
        fill={theme.colors.main50}
        width={24}
        height={24}
        style={{ paddingHorizontal: 8 }}
      />
      <Text style={textStyle}>назад</Text>
    </Pressable>
  );
};
