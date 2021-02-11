import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

const Polygraphy = (props: React.HTMLAttributes<HTMLElement>) => (
  <>
    <h1 {...props}>Header 1</h1>
    <h2 {...props}>Header 2</h2>
    <h3 {...props}>Header 3</h3>
  </>
);

export default {
  title: 'Polygraphy',
  component: Polygraphy,
} as Meta;

const Template = (props: React.HTMLAttributes<HTMLElement>) => (
  <Polygraphy {...props} />
);

export const Default = Template.bind({});
