import Button from "./Button";
import { useSelector } from "react-redux";

function Card() {
  const theme = useSelector((state) => state.theme.value);
// console.log(theme)
  return (
    <>
      <div className="h-screen flex justify-center">
        <Button />
        <div className="flex justify-center items-center">
          <div
            className={`p-2 rounded-md ${theme === "dark" ? "bg-zinc-950" : "bg-gray-600"}`}
          >
            <div className="h-100">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1786733048266-906986f2ddd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                alt="Image"
              />
            </div>
            <div>
              <h1 className="text-2xl mt-5">Card title {theme}</h1>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                aspernatur.
              </p>
            </div>
            <div className="mt-5 flex justify-between">
              <button className="bg-zinc-800 px-10 py-4 rounded-xl">
                Visit
              </button>
              <button className="bg-zinc-800 px-10 py-4 rounded-xl">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
