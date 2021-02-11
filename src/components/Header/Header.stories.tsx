import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template = (props: any) => <Header {...props} />;

export const Default = Template.bind({
  text: 'Выберите плейлист',
  nav: [<a href="#">Link 1</a>, <a href="#">Link 2</a>],
});
/* eslint-disable @typescript-eslint/ban-ts-comment*/
// @ts-ignore
Default.args = {
  text: 'Выберите плейлист',
  nav: [<a href="#">Link 1</a>, <a href="#">Link 2</a>],
};
