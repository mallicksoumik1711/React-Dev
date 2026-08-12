import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPhotos = async () => {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=10`,
    );
    const data = await response.json();
    // console.log(data);
    setPhotos(data);
  };

  // const clickHandler = () => {
  //   console.log("Clicked");
  //   fetchPhotos();
  // };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      {/* <button
        className="bg-green-500 p-5 rounded-md mb-10"
        onClick={clickHandler}
      >
        Get Data
      </button> */}

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {photos.length > 0
          ? photos.map((photo, idx) => (
              <div key={idx}>
                <a href={photo.url} target="_blank">
                  <div className="h-40 w-40 overflow-hidden rounded-xl">
                    <img
                      className="h-full w-full object-cover"
                      src={photo.download_url}
                      alt="Photos"
                    />
                  </div>
                  <span>{photo.author}</span>
                </a>
              </div>
            ))
          : "No User available"}
      </div>

      <div className="pt-10 flex justify-center items-center gap-5">
        <button
          onClick={prevPage}
          className={`bg-amber-500 text-black px-6 py-3 rounded-md ${page===1 ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer active:scale-95"}`}
        >
          Prev
        </button>
        Page {page}
        <button
          onClick={nextPage}
          className={`bg-amber-500 text-black px-6 py-3 rounded-md cursor-pointer active:scale-95`}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
