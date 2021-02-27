import { Meta, Story } from '@storybook/react/types-6-0';
import { NotFound } from './NotFound';

export default {
  component: NotFound,
  title: 'Components/NotFound',
} as Meta;

export const ByPlaylist: Story = (args) => <NotFound {...args} />;
export const ByArtist: Story = (args) => <NotFound byArtist={true} {...args} />;
