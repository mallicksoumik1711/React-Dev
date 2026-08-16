import type React from "react";
import { useState } from "react";

function EventType() {
  const [form, setForm] = useState<string>("");

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const submithandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    console.log(typeof form);
    setForm("");
  };

  const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col gap-10 h-screen justify-center items-center">
        <button
          onClick={clickHandler}
          className="bg-black px-10 py-4 rounded-md"
        >
          Click
        </button>
        <input
          type="text"
          onChange={changeHandler}
          placeholder="Enter something here"
          className="px-10 py-4 bg-black rounded-md"
        />
        <form onSubmit={submithandler}>
          <input
            // type="text"
            value={form}
            onChange={formChangeHandler}
            className="bg-black px-10 py-4 rounded-l-md"
            placeholder="Enter in form"
          />
          <button type="submit" className="bg-zinc-900 px-10 py-4 rounded-r-md">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default EventType;
