import { Switch, SwitchProps } from 'react-native';
import React, { Dispatch, FC, SetStateAction, useCallback } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { Text } from '../Text';

interface Props extends SwitchProps {
  text: string;
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}

const Layout = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 8px;
`;

const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.main};
  font-weight: 600;
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
