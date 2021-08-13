import React, { FC, useCallback } from 'react';
import {
  Pressable,
  StyleProp,
  Switch,
  SwitchProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { Text } from '../Text';
import { theme } from '../../themes';

interface Props extends SwitchProps {
  text: string;
  value: boolean;
  setValue: (value: boolean) => void;
}

const layoutStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginVertical: 0,
  marginHorizontal: 8,
};

const labelStyle: StyleProp<TextStyle> = {
  color: theme.colors.main,
  fontFamily: theme.fontFamilySemiBold,
  fontSize: 14,
};

export const SwitchWithLabel: FC<Props> = ({
  text,
  value,
  setValue,
  ...props
}) => {
  const changeValue = useCallback(() => {
    setValue(!value);
  }, [setValue, value]);

  return (
    <Pressable style={layoutStyle} onPress={changeValue}>
      <Text style={labelStyle}>{text}</Text>
      <Switch
        trackColor={{
          false: theme.colors.main50,
          true: theme.colors.accent50,
        }}
        activeThumbColor={value ? theme.colors.accent : theme.colors.main}
        thumbColor={value ? theme.colors.accent : theme.colors.main}
        value={value}
        onValueChange={changeValue}
        {...props}
      />
    </Pressable>
  );
};
