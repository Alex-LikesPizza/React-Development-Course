import React from 'react'
import { useState, useEffect } from 'react';

function ProgressBar({max, ...props}) {
  const [ remainingTime, setRemainingTime] = useState(3000);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("intervalRunning");
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <progress {...props} value={remainingTime} max={max}/>
  )
}

export default ProgressBar