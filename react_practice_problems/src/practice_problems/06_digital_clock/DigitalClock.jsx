import { useState, useEffect } from "react";

function DigitalClock() {

const [time, setTime] = useState(new Date())
// console.log(time.getHours(), time.getMinutes(), time.getSeconds());

useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
}, [])

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className=" p-4 rounded-md bg-zinc-900">
          <div className="text-8xl font-bold flex gap-5">
            <span className=" p-4 rounded-xl bg-zinc-950">{time.getHours()}</span>
            <span>:</span>
            <span className=" p-4 rounded-xl bg-zinc-950">{time.getMinutes()}</span>
            <span>:</span>
            <span className=" p-4 rounded-xl bg-zinc-950">{time.getSeconds()}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
