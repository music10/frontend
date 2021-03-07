import React, { FC } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { style } from './Link.styles';

export const Link: FC<LinkProps> = (props) => (
  <RouterLink style={style} {...props} />
);
export type { LinkProps } from 'react-router-dom';
