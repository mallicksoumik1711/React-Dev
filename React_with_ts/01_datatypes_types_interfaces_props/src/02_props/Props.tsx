import { useState } from "react";
import CounterShow from "./CounterShow";
import Button from "./Button";

type SetterType = number;

function Props() {
  const [counter, setCounter] = useState<SetterType>(0);

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <CounterShow counter={counter} />
        <Button counter={counter} setCounter={setCounter} />
      </div>
    </>
  );
}

export default Props;
