import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [timerDays, setTimerDays] = useState<number | string>("00");
  const [timerHours, setTimerHours] = useState<number | string>("00");
  const [timerMinutes, setTimerMinutes] = useState<number | string>("00");
  const [timerSeconds, setTimerSeconds] = useState<number | string>("00");

  let interval = useRef<any>(null);

  const startTimer = (countdownDate: number) => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(interval.current);
    } else {
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }
  };

  function saveInLocalStorage(time: any) {
    localStorage.setItem("timer", time);
  }

  function getTimeFromLocalStorage() {
    return localStorage.getItem("timer");
  }

  useEffect(() => {
    const localTimer = getTimeFromLocalStorage();

    if (localTimer) {
      interval.current = setInterval(() => {
        startTimer(+localTimer);
      }, 1000);
    } else {
      const countdownDate = new Date().getTime() + 30000 * 24 * 60 * 1000;
      saveInLocalStorage(countdownDate);
      interval.current = setInterval(() => {
        startTimer(+countdownDate);
      }, 1000);
    }

    return () => clearInterval(interval.current);
  }, []);

  return (
    <div className="flex gap-5 justify-center">
      <div className="flex gap-[6px] flex-col justify-center items-center text-center">
        <div className="bg-[#DCDCDC] flex justify-center items-center leading-[30px] text-[#4D4D4D] w-[56px] h-[56px] text-[20px] rounded-full">
          {timerDays}
        </div>
        <span className="text-[20px] text-[#4A4A4A] leading-[30px]">Day</span>
      </div>
      <div className="flex gap-[6px] flex-col justify-center items-center text-center">
        <div className="bg-[#DCDCDC] flex justify-center items-center leading-[30px] text-[#4D4D4D] w-[56px] h-[56px] text-[20px] rounded-full">
          {" "}
          {timerHours}{" "}
        </div>
        <span className="text-[20px] text-[#4A4A4A] leading-[30px]">Hours</span>
      </div>
      <div className="flex gap-[6px] flex-col justify-center items-center text-center">
        <div className="bg-[#DCDCDC] flex justify-center items-center leading-[30px] text-[#4D4D4D] w-[56px] h-[56px] text-[20px] rounded-full">
          {" "}
          {timerMinutes}{" "}
        </div>
        <span className="text-[20px] text-[#4A4A4A] leading-[30px]">Min</span>
      </div>
      <div className="flex gap-[6px] flex-col justify-center items-center text-center">
        <div className="bg-[#DCDCDC] flex justify-center items-center leading-[30px] text-[#4D4D4D] w-[56px] h-[56px] text-[20px] rounded-full">
          {" "}
          {timerSeconds}{" "}
        </div>
        <span className="text-[20px] text-[#4A4A4A] leading-[30px]">Sec</span>
      </div>
    </div>
  );
};

export default Timer;
