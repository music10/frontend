import React, { useRef, useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Animated, Button, View } from 'react-native';
import { Progress } from './Progress';

export default {
  component: Progress,
  title: 'Components/Progress',
} as Meta;

export const Default: Story = (args) => {
  const [state, setState] = useState<'start' | 'stop'>('stop');

  return (
    <>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Button title="Start" onPress={() => setState('start')} />{' '}
        <Button title="Stop" onPress={() => setState('stop')} />
      </View>
      <Progress state={state} {...args} />
    </>
  );
};
