import type React from "react";

type CounterProperties = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

function Button({ counter, setCounter }: CounterProperties) {
  return (
    <>
      <div className="mt-10 flex gap-10">
        <button
          className={`bg-amber-500 px-10 py-4 rounded-xl ${counter >= 10 ? "opacity-50 cursor-not-allowed" : "opacity-100 active:scale-95"}`}
          onClick={() => {
            if (counter >= 10) return;
            setCounter((prev) => prev + 1);
          }}
        >
          Increase
        </button>
        <button
          className={`bg-amber-500 px-10 py-4 rounded-xl ${counter <= 0 ? "opacity-50 cursor-not-allowed" : "opacity-100 active:scale-95"}`}
          onClick={() => {
            if (counter <= 0) {
              return;
            }
            setCounter(counter - 1);
          }}
        >
          Decrease
        </button>
      </div>
    </>
  );
}

export default Button;
