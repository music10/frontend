import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { FC } from 'react';

export const Link: FC<LinkProps> = (props) => (
  <RouterLink style={{ textDecoration: 'none' }} {...props} />
);
export type { LinkProps } from 'react-router-dom';
