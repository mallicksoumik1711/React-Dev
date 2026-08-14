import { useState } from "react";

function ButtonToggle() {
  const [displayText, setDisplayText] = useState(true);

  const clickHandler = () => {
    setDisplayText((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center h-screen">
        <div className="bg-zinc-950 rounded-xl word-wrap w-1/2 p-10">
          <h1 className="text-5xl font-bold mb-5">Card Heading</h1>
          <button
            onClick={clickHandler}
            className={`bg-amber-700 px-10 py-4 w-1/2 font-bold rounded-md mb-5`}
          >
            {displayText ? "Hide text" : "Show text"}
          </button>
          <p className={`${displayText ? "block" : "hidden"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            amet voluptate libero saepe placeat animi id aliquam. Minima, libero
            amet.
          </p>
        </div>
      </div>
    </>
  );
}

export default ButtonToggle;
