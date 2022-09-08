import React, { FC, useCallback } from 'react';
import { Switch, SwitchProps } from 'react-native';
import styled from '@emotion/native';

import { Text } from './Text';
import { useTheme } from '@emotion/react';

interface Props extends SwitchProps {
  text: string;
  value: boolean;
  setValue: (value: boolean) => void;
}

const Layout = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fontFamilySemiBold};
  font-size: 14px;
`;

export const SwitchWithLabel: FC<Props> = ({
  text,
  value,
  setValue,
  ...props
}) => {
  const theme = useTheme();
  const changeValue = useCallback(() => {
    setValue(!value);
  }, [setValue, value]);

  return (
    <Layout onPress={changeValue}>
      <Label>{text}</Label>
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
    </Layout>
  );
};
