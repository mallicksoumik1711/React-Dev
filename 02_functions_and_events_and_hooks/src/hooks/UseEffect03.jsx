import { useState, useEffect } from "react";

function UseEffect03() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(100);

  const handleNum1 = () => {
    setNum1(num1 + 10);
  };

  const handleNum2 = () => {
    setNum2(num2 - 10);
  };

  useEffect(() => {
    console.log("Use effect")
  }, [num1]);

  return (
    <>
      <h1 onClick={handleNum1}>Num1: {num1}</h1>
      <h1 onClick={handleNum2}>Num2: {num2}</h1>
    </>
  );
}

export default UseEffect03;
