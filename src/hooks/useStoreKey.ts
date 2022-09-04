import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStoreKey = <T>(
  key: string,
  defaultValue?: T,
): { value?: T; trigger: () => void } => {
  const [value, setValue] = useState<any>();

  const getValue = useCallback(() => {
    AsyncStorage.getItem(key).then((val) => setValue(val ?? defaultValue));
  }, [defaultValue, key]);

  useEffect(getValue, [getValue]);

  const trigger = useCallback(getValue, [getValue]);

  try {
    return { value: JSON.parse(value), trigger };
  } catch {
    return { value, trigger };
  }
};
