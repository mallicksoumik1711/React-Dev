import { useState } from "react";

function InputCharacterCounter() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col flex-wrap h-screen justify-center items-center gap-10">
        <div className="flex flex-col w-1/2 gap-5 bg-zinc-900 rounded-xl p-5">
          <label className="text-5xl font-bold p-5">Input here</label>
          <input
            type="text"
            placeholder="Enter something"
            value={text}
            onChange={(e) => {
              setCount(count + 1);
              if (count >= 10) {
                alert(`Limit exceeded, ${count} characters already exists`);
                return
              }
              setText(e.target.value);
            }}
            className="p-5 bg-zinc-950 rounded-xl outline-none"
          />
        </div>
        <div className="w-1/2 word-wrap bg-zinc-900 p-5 rounded-xl">{text}</div>
      </div>
    </>
  );
}

export default InputCharacterCounter;
