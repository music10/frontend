import { useEffect, useState } from 'react';

interface Props {
  startFunction: Function;
  stopFunction: Function;
  duration: number;
}

type UseTimer = (args: Props) => void;

export const useTimer: UseTimer = ({
  startFunction,
  stopFunction,
  duration,
}) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    startFunction();
    setTimer(+setTimeout(stopFunction, duration));

    return () => {
      stopFunction();
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startFunction, stopFunction, duration]);
};
