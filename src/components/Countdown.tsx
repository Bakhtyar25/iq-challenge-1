"use client";

import { useCountdown } from "../hooks/useCountDown";
import { END_DATE } from "@/content/data";
import CountCard from "./CountCard";

export function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(END_DATE);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 xs:grid-cols-4 md:gap-8">
        <CountCard time={days} label="days" />
        <CountCard time={hours} label="hours" />
        <CountCard time={minutes} label="minutes" />
        <CountCard time={seconds} label="seconds" />
      </div>
    </>
  );
}
