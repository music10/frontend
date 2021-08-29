import React, { useRef } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { GameContext } from '../../contexts';
import { Counter } from './Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
} as Meta;

export const Default: Story = (args) => {
  const number = useRef<number>(4);

  return (
    <GameContext.Provider
      value={{ isPause: false, number, setPause: () => void 0 }}
    >
      <Counter {...args} />
    </GameContext.Provider>
  );
};
