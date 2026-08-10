import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(e)
    console.log(input);
    setInput("")
  };

  return (
    <>
      <h1 className="text-center text-5xl font-bold mt-10">Form handeling</h1>
      <form onSubmit={submitHandler}>
        <input
          className="bg-zinc-900 outline-none flex mx-auto mt-10 p-5 w-1/3 rounded-md"
          type="text"
          placeholder="Enter something"
          value={input}
          onChange={(e) => {
            console.log(e.target.value);
            setInput(e.target.value);
          }}
        />
        <button
          className="flex mx-auto mt-10 bg-zinc-900 px-10 py-4 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
