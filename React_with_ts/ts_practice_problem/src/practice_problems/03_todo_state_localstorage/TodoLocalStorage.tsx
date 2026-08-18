import { useState, useEffect } from "react";

interface TodoCardDetail {
    taskName: string;
    imgUrl: string;
    description: string;
}

function TodoLocalStorage() {
    const [taskName, setTaskName] = useState<string>("");
    const [imgUrl, setImgUrl] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const [edit, setEdit] = useState<number>(-1)

    const savedTodos = (): TodoCardDetail[] => {
        const savedTodosFromLS = localStorage.getItem("todos")
        if (savedTodosFromLS) {
            return JSON.parse(savedTodosFromLS) as TodoCardDetail[]
        }
        return []
    }

    const [todos, setTodos] = useState<TodoCardDetail[]>(savedTodos);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!taskName || !imgUrl || !description) {
            alert("Enter valid data")
            return
        }
        if (edit > -1) {
            const copy = [...todos]
            copy[edit] = {
                taskName,
                imgUrl,
                description
            }
            setTodos(copy)
            setEdit(-1)

        } else {
            const newTodos = {
                taskName, imgUrl, description
            }
            setTodos((prevTodos) => [...prevTodos, newTodos])
        }
        setTaskName("")
        setImgUrl("")
        setDescription("")
    };

    const deleteHandler = (idx: number) => {
        setTodos((prev) => {
            return prev.filter((todo, index) => {
                return idx !== index
            })
        })
    }

    const editHandler = (todo: TodoCardDetail, idx: number) => {
        setTaskName(todo.taskName)
        setImgUrl(todo.imgUrl)
        setDescription(todo.description)
        setEdit(idx)
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <>
            <div className="flex">
                <div className="w-1/2 p-10 ">
                    <h1 className="text-2xl font-bold mb-10">Enter tasks</h1>
                    <form
                        className="flex flex-col flex-wrap gap-10"
                        onSubmit={submitHandler}
                    >
                        <input
                            type="text"
                            value={taskName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                // console.log(e.target.value)
                                return setTaskName(e.target.value)
                            }}
                            placeholder="Enter task name"
                            className="bg-transparent block w-full px-10 py-4 rounded-full outline-none border-2 border-zinc-700"
                        />
                        <input
                            type="text"
                            value={imgUrl}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                return setImgUrl(e.target.value)
                            }}
                            placeholder="Enter img url"
                            className="bg-transparent block w-full px-10 py-4 rounded-full outline-none border-2 border-zinc-700"
                        />
                        <textarea
                            value={description}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                return setDescription(e.target.value)
                            }}
                            placeholder="Enter task description"
                            className="bg-transparent block w-full px-10 py-4 rounded-full outline-none border-2 border-zinc-700 resize-none word-wrap"
                        ></textarea>
                        <button className="bg-zinc-950 py-4 rounded-full active:scale-95 transition">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="w-1/2 p-10 h-fit flex flex-wrap gap-10">
                    {todos.length > 0 ? (
                        todos.map((todo, idx) => (
                            <div key={idx} className="bg-zinc-950 overflow-hidden rounded-xl w-1/3">
                                <div className="h-60">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={todo.imgUrl}
                                        alt="Img"
                                    />
                                </div>
                                <div className="p-5">
                                    <h1 className="text-xl">{todo.taskName}</h1>
                                    <p>{todo.description}</p>
                                </div>
                                <div className="px-5 py-3 flex justify-between">
                                    <button onClick={() => editHandler(todo, idx)}>EDIT</button>
                                    <button onClick={() => deleteHandler(idx)}>DELETE</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>
                            <h1 className="text-2xl font-bold mb-10">No Todos added yet.</h1>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default TodoLocalStorage;
