import { useEffect } from 'react';

export const useTimer = (callback: Function | null, duration: number) => {
  useEffect(() => {
    // ставим таймер на функцию callback
    const timer = setTimeout(() => {
      callback && callback();
    }, duration);

    return () => {
      // очищаем таймер и вызываем callback
      clearTimeout(timer);
      callback && callback();
    };
  }, [callback, duration]);
};
