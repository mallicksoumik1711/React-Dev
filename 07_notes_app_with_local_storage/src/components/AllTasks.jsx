function Alltasks() {
  return (
    <>
      <div className="h-screen">
        <h1 className="text-3xl font-bold px-10 py-4">All Tasks</h1>
        <div className="flex flex-wrap gap-5 p-10">
          <div className="bg-zinc-900 h-40 w-[32%] flex flex-col flex-wrap justify-between rounded-md p-4">
            <div>
              <h1>Title</h1>
              <p>Description</p>
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-300 text-blue-800 px-6 py-1 rounded-md cursor-pointer active:scale-95 transition">
                Edit
              </button>
              <button className="bg-red-300 text-red-800 px-6 py-1 rounded-md cursor-pointer active:scale-95 transition">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Alltasks;
