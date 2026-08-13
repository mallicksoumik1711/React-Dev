import { useNavigate } from "react-router-dom";

function Alltasks() {
  const navigate = useNavigate();

  const handleNavigateToInput = () => {
    navigate("/");
  };

  return (
    <>
      <div className="h-screen">
        <h1 className="text-3xl font-bold px-10 py-4">All Tasks</h1>
        <button
          onClick={handleNavigateToInput}
          className="bg-black px-10 py-3 mx-10 rounded-md cursor-pointer active:scale-95 transition"
        >
          Add tasks
        </button>
        <div className="flex flex-wrap gap-5 p-10">
          <div className="bg-zinc-900 h-40 flex flex-col flex-wrap justify-between rounded-md p-4 w-[32%]">
            <div className="flex gap-5">
              <div className="h-20 w-20">
                <img
                  className="h-full w-full object-cover rounded-md shadow-gray-600 shadow-2xl"
                  src="https://images.unsplash.com/photo-1786381624438-da16f6cfb834?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D"
                  alt="alt"
                />
              </div>
              <div>
                <h1 className="text-lg">Title: Lorem ipsum dololit.</h1>
                <p className="text-wrap">
                  Description: Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit
                </p>
              </div>
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
