import { useState, useRef } from "react"
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime}) {
  const [ timeRemaining, setTimeRemaining ] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  const timer = useRef();
  const dialog = useRef();

  if(timeRemaining <= 0){
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleReset(){
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart(){
    timer.current = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 10);
    }, 10);
  }

  function handleStop(){
    clearInterval(timer.current);
    dialog.current.open();
  }
  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1? 's' : ''}
        </p>
        <button onClick={timerIsActive? handleStop : handleStart}>
          {timerIsActive? "Stop" : "Start"} Challenge
        </button>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  )
}

export default TimerChallenge