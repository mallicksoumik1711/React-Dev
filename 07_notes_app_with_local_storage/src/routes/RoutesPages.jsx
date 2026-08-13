import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import InputFields from "../components/InputFields";
import Alltasks from "../components/AllTasks";

function RoutesPages() {
  const [allTask, setAlltask] = useState([]);

  const addTask = (newTask) => {
    setAlltask((prevTask) => [...prevTask, newTask])
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<InputFields addTask={addTask} />} />
        <Route path="/all-tasks" element={<Alltasks allTask={allTask} setAlltask={setAlltask} />} />
      </Routes>
    </>
  );
}

export default RoutesPages;
