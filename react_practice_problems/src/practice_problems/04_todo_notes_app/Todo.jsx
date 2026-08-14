import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [updateTodo, setUpdateTodo] = useState(null);

  const clickHandler = () => {
    let allTodosCopy = [...allTodos];
    if (updateTodo !== null) {
      //   const allTodosCopy = [...allTodos];
      allTodosCopy[updateTodo] = todo;
      setAllTodos(allTodosCopy);
      setUpdateTodo(null);
    } else {
      //   const allTodosCopy = [...allTodos, todo];
      allTodosCopy = [...allTodos, todo];
      setAllTodos(allTodosCopy);
    }
    setTodo("");
    console.log(allTodos);
  };

  const deleteHandler = (idx) => {
    // setAllTodos((prevTodos) =>
    //   prevTodos.filter((todo, index) => idx !== index),
    // );
    setAllTodos(allTodos.filter((todo, index) => idx !== index));
  };

  const editHandler = (todo, idx) => {
    setUpdateTodo(idx);
    setTodo(allTodos[idx]);
  };

  return (
    <>
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col  w-1/2 p-10">
          <input
            type="text"
            placeholder="Enter a todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="block px-10 py-4 w-full bg-zinc-900 rounded-full mb-5 outline-none"
          />
          <button
            onClick={clickHandler}
            className="bg-black w-full py-4 rounded-full"
          >
            {updateTodo !== null ? "Update Todo" : "Add Todo"}
          </button>
        </div>
        {allTodos.length > 0
          ? allTodos.map((todo, idx) => (
              <div key={idx} className="w-1/2 p-10">
                <div className="bg-zinc-900 flex justify-between px-6 py-3 rounded-xl">
                  <h1 className="text-2xl">{todo}</h1>
                  <div className="w-fit flex flex-wrap gap-5 justify-between">
                    <button
                      onClick={() => editHandler(todo, idx)}
                      className="bg-blue-500 px-4 rounded-full cursor-pointer active:scale-95 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteHandler(idx)}
                      className="bg-red-500 px-4 rounded-full cursor-pointer active:scale-95 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          : "No todos added yet"}
      </div>
    </>
  );
}

export default Todo;
