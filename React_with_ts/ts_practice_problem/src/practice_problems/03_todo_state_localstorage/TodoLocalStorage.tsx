import { useState } from "react";

interface TodoCardDetail {
    taskName: string;
    imgUrl: string;
    description: string;
}

function TodoLocalStorage() {
    const [taskName, setTaskName] = useState<string>("");
    const [imgUrl, setImgUrl] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const [todos, setTodos] = useState<TodoCardDetail[]>([]);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(taskName)
        const newTodos = {
            taskName, imgUrl, description
        }
        setTodos((prevTodos) => [...prevTodos, newTodos])
    };

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
                            className="bg-transparent block w-full px-10 py-4 rounded-full outline-none border-2 border-zinc-700 resize-none"
                        ></textarea>
                        <button className="bg-zinc-950 py-4 rounded-full active:scale-95 transition">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="w-1/2 p-10 flex flex-wrap gap-10 h-fit">
                    {todos.length > 0 ? (
                        todos.map((todo, idx) => (
                            <div key={idx} className="bg-zinc-950 w-1/3 overflow-hidden rounded-xl">
                                <div className="h-60">
                                    <img
                                        className="h-full w-full object-cover"
                                        src="https://images.unsplash.com/photo-1773332585754-f1436987743b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                                        alt=""
                                    />
                                </div>
                                <div className="p-5">
                                    <h1 className="text-xl">Name</h1>
                                    <p>desc</p>
                                </div>
                                <div className="px-5 py-3 flex justify-between">
                                    <button>EDIT</button>
                                    <button>DELETE</button>
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
