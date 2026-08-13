function InputFields() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-10">
        <div className="p-4 rounded-md bg-zinc-900">
          <h1 className="text-3xl font-bold mb-10">Enter tasks</h1>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Task name</label>
              <input
                type="text"
                placeholder="Enter task"
                className="border border-gray-700 shadow shadow-2xl outline-none px-6 py-4 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Image URL</label>
              <input
                type="text"
                placeholder="Enter Image URL"
                className="border border-gray-700 shadow shadow-2xl outline-none px-6 py-4 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Task description</label>
              <textarea
                placeholder="Enter task details"
                className="border border-gray-700 shadow shadow-2xl resize-none w-2xl outline-none px-6 py-4 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black p-4 rounded-md active:scale-95 transition cursor-pointer"
            >
              Add task
            </button>
          </div>
        </div>
        <div>
          <button className="bg-black p-4 rounded-md active:scale-95 transition cursor-pointer">
            View All Tasks
          </button>
        </div>
      </div>
    </>
  );
}

export default InputFields;
