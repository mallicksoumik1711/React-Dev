import MiniCards from "./MiniCards";

function Card({
  img,
  status,
  dotColor,
  name,
  title,
  rating,
  distance,
  location,
  skills,
}) {
  return (
    <>
      <div className="flex flex-col flex-wrap items-center w-1/3 p-5 bg-zinc-900 rounded-xl mb-10">
        <div className="flex justify-between items-center gap-5 mb-2">
          <div className="h-56 w-64">
            <img
              className="h-full w-full object-cover rounded-xl"
              src={img}
              alt="black_hole"
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <div className="tag flex justify-center items-center gap-2 bg-zinc-700 w-1/2 rounded-xl">
              <i
                class="fa-solid fa-circle fa-2xs"
                style={{ color: dotColor }}
              ></i>
              <span>{status}</span>
            </div>
            <div className="text-2xl font-bold mb-2">{name}</div>
            <div className="text-lg mb-1">{title}</div>
            <div className="flex justify-between items-center gap-3 mb-2">
              <div>
                <i class="fa-solid fa-star"></i>
                <span>{rating} (255)</span>
              </div>
              <i class="fa-solid fa-circle fa-2xs"></i>
              <span>{distance}km</span>
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
            <span>{location}</span>
          </div>
          <i class="fa-regular fa-circle-right"></i>
        </div>
        <div className="flex justify-between w-full">
          {skills.map( (skill) => (
            <MiniCards date={skill.date} kills={skill.kills} />
          ) )}
        </div>
      </div>
    </>
  );
}

export default Card;
