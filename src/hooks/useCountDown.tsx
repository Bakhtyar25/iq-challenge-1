import { useEffect, useRef, useState } from "react";
import { getLocalEndDate, setLocalEndDate } from "../utils/helper";

export function useCountdown(endAt: Date) {
  const endDate = useRef(endAt);
  const previousTimeBetweenDates = useRef(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const localEndDate = getLocalEndDate();
    const timeDifference = localEndDate.getTime() - Date.now();

    endDate.current = localEndDate && timeDifference > 0 ? localEndDate : endAt;
    setLocalEndDate(endDate.current);

    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeBetweenDates = Math.ceil(
        (endDate.current.getTime() - currentDate.getTime()) / 1000
      );

      if (timeBetweenDates <= 0) {
        clearInterval(interval);
        return;
      }

      const newSeconds = timeBetweenDates % 60;
      const newMinutes = Math.floor(timeBetweenDates / 60) % 60;
      const newHours = Math.floor(timeBetweenDates / 3600) % 24;
      const newDays = Math.floor(timeBetweenDates / 86400) % 30;

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      previousTimeBetweenDates.current = timeBetweenDates;
    }, 250);

    return () => {
      clearInterval(interval);
    };
  }, [endAt]);

  return {
    seconds,
    minutes,
    hours,
    days,
  };
}
