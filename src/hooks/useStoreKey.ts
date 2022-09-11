import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ReturnValue<T> {
  value: T;
  trigger: () => void;
  getValue: () => Promise<string | null>;
}

export const useStoreKey = <T>(
  key: string,
  defaultValue?: T,
): ReturnValue<T> => {
  const [value, setValue] = useState<any>();

  const getValue = useCallback(async () => AsyncStorage.getItem(key), [key]);

  const updateValue = useCallback(() => {
    getValue().then((val) => setValue(val ?? defaultValue));
  }, [defaultValue, key]);

  useEffect(updateValue, [updateValue]);

  const trigger = useCallback(updateValue, [updateValue]);

  try {
    return {
      value: JSON.parse(value),
      trigger,
      getValue,
    };
  } catch {
    return { value, trigger, getValue };
  }
};
