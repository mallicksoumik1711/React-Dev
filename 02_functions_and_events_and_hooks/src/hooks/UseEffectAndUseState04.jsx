import { useEffect, useState } from "react";

function UseEffectAndUseState02() {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((prev) => prev + 1);
    // document.title = `counter is : ${counter}`
  };

  useEffect(()=>{
    document.title = `Counter is : ${counter}`
  },[counter])

  return (
    <>
      <h1>Current counter is: {counter}</h1>
      <button onClick={handleCounter}>Increase</button>
    </>
  );
}

export default UseEffectAndUseState02;
