import { useEffect, useState } from "react";
import "./Main.css";

function Main() {
  const WORK_TIME = 25 * 60;   // 25 minutes in seconds
  const BREAK_TIME = 5 * 60;  // 5 minutes in seconds

  const [time, setTime] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work"); // work | break

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            switchMode();
            return mode === "work" ? BREAK_TIME : WORK_TIME;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, mode]);

  function switchMode() {
    setMode((prev) => (prev === "work" ? "break" : "work"));
  }

  function resetTimer() {
    setIsRunning(false);
    setMode("work");
    setTime(WORK_TIME);
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  return (
    <div className="container">
      <h1>{mode === "work" ? "Work Time" : "Break Time"}</h1>
      <h2>{formatTime(time)}</h2>

      <div className="buttons">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Main;