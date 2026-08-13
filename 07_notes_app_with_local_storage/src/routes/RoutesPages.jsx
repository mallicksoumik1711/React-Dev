import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import InputFields from "../components/InputFields";
import Alltasks from "../components/AllTasks";

function RoutesPages() {
  const [allTask, setAlltask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );
  const [editTask, setEdittask] = useState(null);

  const addTask = (newTask) => {
    setAlltask((prevTask) => [...prevTask, newTask]);
    console.log(allTask);
  };

  const updateTask = (updatedTask, idx) => {
    setAlltask((prevTask) => {
      return prevTask.map((task, index) => {
        return idx === index ? updatedTask : task;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(allTask));
  }, [allTask]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <InputFields
              addTask={addTask}
              updateTask={updateTask}
              editTask={editTask}
              setEdittask={setEdittask}
            />
          }
        />
        <Route
          path="/all-tasks"
          element={
            <Alltasks
              allTask={allTask}
              setAlltask={setAlltask}
              setEdittask={setEdittask}
            />
          }
        />
      </Routes>
    </>
  );
}

export default RoutesPages;
