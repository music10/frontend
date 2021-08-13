import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { SwitchWithLabel } from './SwitchWithLabel';

export default {
  component: SwitchWithLabel,
  title: 'Components/SwitchWithLabel',
} as Meta;

export const Off: Story = (args) => {
  const [value, setValue] = useState(false);
  return (
    <SwitchWithLabel
      text="Some text"
      value={value}
      setValue={setValue}
      {...args}
    />
  );
};

export const On: Story = (args) => {
  const [value, setValue] = useState(true);
  return (
    <SwitchWithLabel
      text="Some text"
      value={value}
      setValue={setValue}
      {...args}
    />
  );
};
