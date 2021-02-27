import { Link as RouterLink, LinkProps } from 'react-router-native';
import { FC } from 'react';

export const Link: FC<LinkProps> = (props) => (
  <RouterLink style={{ textDecoration: 'none' }} {...props} />
);
export { AndroidBackButton } from 'react-router-native';
export type { LinkProps } from 'react-router-native';
