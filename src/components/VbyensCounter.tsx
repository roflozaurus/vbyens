import { useEffect, useState } from "react";

function VbyensCounter() {
  const now = new Date();
  const endOfDayinMinutes = 18 * 60;
  const [seconds, setSeconds] = useState(Date.now());
  const [counter, setCounter] = useState(
    endOfDayinMinutes - (now.getHours() * 60 + now.getMinutes())
  );

  useEffect(() => {
    setCounter(endOfDayinMinutes - (now.getHours() * 60 + now.getMinutes()));
  }, [seconds]);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h2>{counter}</h2>;
}

export default VbyensCounter;
