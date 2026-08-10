import { useState } from "react";

function Usestate01() {
    const [arr, setArr] = useState([10, 20, 30, 40, 50]);
    const [obj, setObj] = useState({name: "alex", age: 200})
    const [num, setNum] = useState(10)

    const clickHandler = () => {
        const newArr = [...arr]
        newArr.push(100)
        setArr(newArr)
    }

    const clickHandlerObject = () => {
        const newObj = {...obj}
        newObj.name = "Changed name"
        newObj.age = 8200
        setObj({name: newObj.name, age: newObj.age})
    }

    const changeNum = () => {
        // setNum(num+1)
        // setNum(num+1)
        // setNum(num+1)
        // setNum(num+1)
        // setNum(num+1)

        // Batch Update

        setNum((prev)=>prev+1)
        setNum((prev)=>prev+1)
        setNum((prev)=>prev+1)
        setNum((prev)=>prev+1)
        setNum((prev)=>prev+1)
    }

  return (
    <>
      <h1 className="bg-red-400">Usestate demo</h1>
      <h1>{arr}</h1>
      <button onClick={clickHandler}>Click</button>
      
      <h1>{obj.name},{obj.age}</h1>
      <button onClick={clickHandlerObject}>Click</button>

      <h1>{num}</h1>
      <button onClick={changeNum}>Click</button>
    </>
  );
}

export default Usestate01;
