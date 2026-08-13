import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function InputFields({ addTask, updateTask, editTask, setEdittask }) {
  const navigate = useNavigate();
  const [taskName, setTaskname] = useState("");
  const [imgUrl, setImgurl] = useState("");
  const [taskDecs, setTaskdesc] = useState("");

  const navigateToTasks = () => {
    navigate("/all-tasks");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!taskName || !taskDecs || !imgUrl) {
      alert("Required all fields");
      return
    }
    // const newTask = () => {
    //     return [taskName, imgUrl, taskDecs]
    // }

    const newTask = {
      taskName,
      imgUrl,
      taskDecs,
    };

    if (editTask) {
      updateTask(newTask, editTask.idx);
      setEdittask(null)
    } else {
      addTask(newTask);
      // console.log("Submit form");
      // console.log(newTask()[2])
    }

    setTaskname("");
    setTaskdesc("");
    setImgurl("");
  };

  useEffect(() => {
    if (editTask) {
      setTaskname(editTask.taskName);
      setImgurl(editTask.imgUrl);
      setTaskdesc(editTask.taskDecs);
    }
  }, [editTask]);

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-10">
        <div className="p-4 rounded-md bg-zinc-900">
          <h1 className="text-3xl font-bold mb-10">Enter tasks</h1>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Task name</label>
                <input
                  type="text"
                  placeholder="Enter task"
                  value={taskName}
                  onChange={(e) => setTaskname(e.target.value)}
                  className="border border-gray-700 shadow shadow-2xl outline-none px-6 py-4 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Image URL</label>
                <input
                  type="text"
                  placeholder="Enter Image URL"
                  value={imgUrl}
                  onChange={(e) => setImgurl(e.target.value)}
                  className="border border-gray-700 shadow shadow-2xl outline-none px-6 py-4 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Task description</label>
                <textarea
                  placeholder="Enter task details"
                  value={taskDecs}
                  onChange={(e) => setTaskdesc(e.target.value)}
                  className="border border-gray-700 shadow shadow-2xl resize-none w-2xl outline-none px-6 py-4 rounded-md"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black p-4 rounded-md active:scale-95 transition cursor-pointer"
              >
                {editTask !== null ? "Update task" : "Add task"}
              </button>
            </div>
          </form>
        </div>
        <div>
          <button
            onClick={navigateToTasks}
            className="bg-black p-4 rounded-md active:scale-95 transition cursor-pointer"
          >
            View All Tasks
          </button>
        </div>
      </div>
    </>
  );
}

export default InputFields;
