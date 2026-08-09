function Card() {
  return (
    <>
      <div className="flex flex-col flex-wrap items-center w-1/3 p-5 bg-zinc-900 rounded-xl mb-10">
        <div className="flex justify-between items-center gap-5 mb-2">
          <div className="h-56 w-64">
            <img
              className="h-full w-full object-cover rounded-xl"
              src="https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BhY2V8ZW58MHx8MHx8fDA%3D"
              alt="black_hole"
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <div className="tag flex justify-center items-center gap-2 bg-zinc-700 w-1/2 rounded-xl">
              <i
                class="fa-solid fa-circle fa-2xs"
                style={{ color: "green" }}
              ></i>
              <span>Online</span>
            </div>
            <div className="text-2xl font-bold mb-2">Mr. Bruce Wayne</div>
            <div className="text-lg mb-1">Knight of Gotham</div>
            <div className="flex justify-between items-center gap-3 mb-2">
              <div>
                <i class="fa-solid fa-star"></i>
                <span>4.85 (255)</span>
              </div>
              <i class="fa-solid fa-circle fa-2xs"></i>
              <span>16.8km</span>
            </div>
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-video"></i>
              <span>Provide video visit</span>
            </div>
          </div>
        </div>
        <div className="bg-zinc-700 w-full flex justify-between items-center p-2 rounded-xl mb-2">
          <div className="flex justify-center items-center gap-2">
            <i class="fa-solid fa-location-dot"></i>
            <span>Gotham, Dallas, US</span>
          </div>
          <i class="fa-regular fa-circle-right"></i>
        </div>
        <div className="flex justify-between w-full">
          <div className="bg-zinc-700 rounded-lg p-2">
            <span className="text-gray-200 text-xs">05 Dec</span>
            <p>12 appts</p>
          </div>
          <div className="bg-zinc-700 rounded-lg p-2">
            <span className="text-gray-200 text-xs">05 Dec</span>
            <p>12 appts</p>
          </div>
          <div className="bg-zinc-700 rounded-lg p-2">
            <span className="text-gray-200 text-xs">05 Dec</span>
            <p>12 appts</p>
          </div>
          <div className="bg-zinc-700 rounded-lg p-2">
            <span className="text-gray-200 text-xs">05 Dec</span>
            <p>12 appts</p>
          </div>
          <div className="bg-zinc-700 rounded-lg p-2">
            <span className="text-gray-200 text-xs">05 Dec</span>
            <p>12 appts</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
