import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Pressable } from 'react-native';
import { Variant } from '../components/Variant.types';

interface Return {
  variant: Variant;
  setVariant: Dispatch<SetStateAction<Variant>>;
}

export const useVariant = (defaultVariant?: Variant): Return => {
  const [variant, setVariant] = useState<Variant>(defaultVariant ?? 'default');

  return { variant, setVariant };
};

interface VariantComponentProps {
  setVariant: Dispatch<SetStateAction<Variant>>;
}

export const VariantComponent: FC<VariantComponentProps> = ({
  setVariant,
  children,
}) => (
  <Pressable
    onPressIn={() => setVariant('active')}
    onPressOut={() => setVariant('default')}
    onTouchStart={() => setVariant('hover')}
    onTouchEnd={() => setVariant('default')}
  >
    {children}
  </Pressable>
);
