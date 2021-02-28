import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Pressable, PressableProps } from 'react-native';
import { Variant, VariantProps } from '../components/Variant.types';

interface Return {
  variant: Variant;
  setVariant: Dispatch<SetStateAction<Variant>>;
}

export const useVariant = (defaultVariant?: Variant): Return => {
  const [variant, setVariant] = useState<Variant>(defaultVariant ?? 'default');

  return { variant, setVariant };
};

interface VariantComponentProps extends PressableProps, VariantProps {
  setVariant: Dispatch<SetStateAction<Variant>>;
}

export const VariantComponent: FC<VariantComponentProps> = ({
  setVariant,
  children,
  variant,
  ...props
}) => (
  <Pressable
    onPressIn={() => setVariant('active')}
    onPressOut={() => setVariant(variant || 'default')}
    onTouchStart={() => setVariant('hover')}
    onTouchEnd={() => setVariant(variant || 'default')}
    {...props}
  >
    {children}
  </Pressable>
);
