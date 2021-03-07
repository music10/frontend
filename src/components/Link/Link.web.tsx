import React, { FC } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

export const Link: FC<LinkProps> = (props) => <RouterLink {...props} />;
export type { LinkProps } from 'react-router-dom';
