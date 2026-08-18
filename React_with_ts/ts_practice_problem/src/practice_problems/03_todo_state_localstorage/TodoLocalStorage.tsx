function TodoLocalStorage() {
    return (
        <>
            <div className="flex">
                <div className="w-1/2 p-10 ">
                    <h1 className="text-2xl font-bold mb-10">Enter tasks</h1>
                    <form className="flex flex-col flex-wrap gap-10">
                        <input type="text" placeholder="Enter task name" className="bg-transparent block w-full px-10 py-4 rounded-full outline-none border-2 border-zinc-700" />
                        <input type="text" placeholder="Enter img url" className="bg-transparent block w-full px-10 py-4 rounded-full outline-none border-2 border-zinc-700" />
                        <textarea placeholder="Enter task description" className="bg-transparent block w-full px-10 py-4 rounded-full outline-none border-2 border-zinc-700 resize-none"></textarea>
                        <button className="bg-zinc-950 py-4 rounded-full">Submit</button>
                    </form>
                </div>
                <div className="w-1/2 p-10 flex flex-wrap gap-5 ">
                    <div className="bg-zinc-950 w-1/3 overflow-hidden rounded-xl">
                        <div className="h-60">
                            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1773332585754-f1436987743b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
                        </div>
                        <div className="p-5">
                            <h1 className="text-xl">Name</h1>
                            <p>desc</p>
                        </div>
                        <div className="px-5 py-2 flex justify-between">
                            <button>EDIT</button>
                            <button>DELETE</button>
                        </div>
                    </div>
                    <div className="bg-zinc-950 w-1/3 overflow-hidden rounded-xl">
                        <div className="h-60">
                            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1773332585754-f1436987743b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
                        </div>
                        <div className="p-5">
                            <h1 className="text-xl">Name</h1>
                            <p>desc</p>
                        </div>
                        <div className="px-5 py-2 flex justify-between">
                            <button>EDIT</button>
                            <button>DELETE</button>
                        </div>
                    </div>
                    <div className="bg-zinc-950 w-1/3 overflow-hidden rounded-xl">
                        <div className="h-60">
                            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1773332585754-f1436987743b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
                        </div>
                        <div className="p-5">
                            <h1 className="text-xl">Name</h1>
                            <p>desc</p>
                        </div>
                        <div className="px-5 py-2 flex justify-between">
                            <button>EDIT</button>
                            <button>DELETE</button>
                        </div>
                    </div>
                    <div className="bg-zinc-950 w-1/3 overflow-hidden rounded-xl">
                        <div className="h-60">
                            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1773332585754-f1436987743b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
                        </div>
                        <div className="p-5">
                            <h1 className="text-xl">Name</h1>
                            <p>desc</p>
                        </div>
                        <div className="px-5 py-2 flex justify-between">
                            <button>EDIT</button>
                            <button>DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoLocalStorage