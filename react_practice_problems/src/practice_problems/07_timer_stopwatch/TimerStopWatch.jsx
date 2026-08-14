import { useState, useEffect } from "react";

function TimerStopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [running]);

  const startHandler = () => {
    if (running) {
      return;
    } else {
      setRunning(true);
    }
  };

  const stopHandler = () => {
    setRunning(false);
  };

  const restartHandler = () => {
    setSeconds(0);
  };

  const secs = seconds % 60;
  const mins = Math.floor((seconds % 3600) / 60);
  const hrs = Math.floor(seconds / 3600);
  
  return (
    <>
      <div className="flex flex-col gap-10 h-screen justify-center items-center">
        <div className=" p-4 rounded-md bg-zinc-900">
          <div className="text-8xl font-bold flex gap-5">
            <span className=" p-4 rounded-xl bg-zinc-950">{hrs}</span>
            <span>:</span>
            <span className=" p-4 rounded-xl bg-zinc-950">{mins}</span>
            <span>:</span>
            <span className=" p-4 rounded-xl bg-zinc-950">{secs}</span>
          </div>
        </div>
        <div className="flex gap-10">
          <button
            onClick={startHandler}
            className="bg-zinc-900 px-10 py-4 rounded-xl active:scale-95"
          >
            Start
          </button>
          <button
            onClick={stopHandler}
            className="bg-zinc-900 px-10 py-4 rounded-xl active:scale-95"
          >
            Stop
          </button>
          <button
            onClick={restartHandler}
            className="bg-zinc-900 px-10 py-4 rounded-xl active:scale-95"
          >
            Restart
          </button>
        </div>
      </div>
    </>
  );
}

export default TimerStopWatch;
