import React, { FC } from 'react';
import { ViewProps } from 'react-native';

interface Props extends ViewProps {
  component: FC<{ index: number }>;
  number: number;
}

export const PlaceholderLoaderList: FC<Props> = ({
  component: Component,
  number,
}) => {
  return (
    <>
      {Array(number)
        .fill(true)
        .map((_, index) => (
          <Component key={index} index={index} />
        ))}
    </>
  );
};
