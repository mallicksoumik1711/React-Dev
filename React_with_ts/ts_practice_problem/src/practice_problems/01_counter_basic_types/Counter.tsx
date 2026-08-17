import React, { useState } from "react";

function Counter() {
  const [num, setNum] = useState<number>(0)
  const [counter, setCounter] = useState<number>(num);

  const increaseHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCounter((prev) => prev + 1);
  };

  const decreaseHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCounter((prev) => prev - 1);
  };

  const resetHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCounter(0);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCounter(num)
    setNum(0)
  }
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <form onSubmit={submitHandler}>
          <input value={num} onChange={(e) => setNum(Number(e.target.value))} type="text" placeholder="Enter amount" className="bg-zinc-900 px-10 py-4 mb-10 outline-none" />
          <button className="bg-black px-6 py-4">Submit</button>
        </form>
        <div className="text-8xl font-bold mb-10">Value: {counter}</div>
        <div className="flex gap-10">
          <button
            onClick={increaseHandler}
            className="bg-zinc-900 px-10 py-4 rounded-md"
          >
            Increase
          </button>
          <button
            onClick={decreaseHandler}
            className="bg-zinc-900 px-10 py-4 rounded-md"
          >
            Decrease
          </button>
          <button
            onClick={resetHandler}
            className="bg-zinc-900 px-10 py-4 rounded-md"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
