import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increaseHandler = () => {
    if (counter >= 20) {
      return;
    }
    setCounter((prev) => prev + 1);
  };

  const decreaseHandler = () => {
    if (counter < 1) {
      return;
    }
    setCounter((prev) => prev - 1);
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl font-bold">Current Count : {counter}</h1>
        <div className="flex flex-wrap gap-5">
          <button
            onClick={increaseHandler}
            className={`bg-black px-10 py-4 rounded-xl ${counter >= 20 ? "cursor-not-allowed opacity-50" : "cursor-pointer opacity-100 active:scale-95 transition"}`}
          >
            Increase counter
          </button>
          <button
            onClick={decreaseHandler}
            className={`bg-black px-10 py-4 rounded-xl ${counter < 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer opacity-100 active:scale-95 transition"}`}
          >
            Decrease counter
          </button>
        </div>
        <button
          onClick={() => setCounter(0)}
          className="bg-black px-10 py-4 w-115 rounded-xl active:scale-95 transition cursor-pointer"
        >
          Reset to 0
        </button>
      </div>
    </>
  );
}

export default Counter;
