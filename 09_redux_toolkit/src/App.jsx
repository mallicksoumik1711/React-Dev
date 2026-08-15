import "./App.css";
import {
  incrementCounter,
  decrementCounter,
} from "../redux/features/CounterSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-8xl font-bold mb-10">{counter}</h1>
        <div className="flex gap-10">
          <button
            onClick={() => dispatch(incrementCounter())}
            className="bg-zinc-950 px-10 py-4 rounded-full"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrementCounter())}
            className="bg-zinc-950 px-10 py-4 rounded-full"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
