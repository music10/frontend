import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Text, View } from 'react-native';
import { theme } from '../../themes';
import { BlurView } from './BlurView';

export default {
  title: 'Components/BlurView',
} as Meta;

export const Default: Story = (args) => (
  <View>
    <Text style={{ color: theme.colors.accent }}>Some blurred text</Text>
    <BlurView
      {...args}
      overlayColor="transparent"
      blurRadius={2}
      style={{
        backgroundColor: 'rgba(255,255,255,0.5)',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
      }}
    />
  </View>
);
