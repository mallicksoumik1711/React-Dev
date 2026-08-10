function Events() {
  const clickHandler = () => {
    console.log("Button is clicked", Math.floor(Math.random() * 10));
  };
  return (
    <>
      <h1>onClick</h1>
      <button onClick={clickHandler}>Click</button>
      <br />

      <h1>onDoubleClick</h1>
      <button
        onDoubleClick={() => {
          console.log(
            "Button is double clicked",
            Math.floor(Math.random() * 10),
          );
        }}
      >
        Double Click
      </button>
      <br />

      <h1>onMouseEnter</h1>
      <div
        style={{ backgroundColor: "red", height: "200px", width: "200px" }}
        onMouseEnter={function (e) {
          console.log(e.clientX);
        }}
      >
        Just entering cursor it will show clintX
      </div>
      <br />

      <h1>onChange</h1>
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="text"
        placeholder="enter something"
      />
      <br />

      <h1>onMouseMove</h1>
      <div
        style={{ backgroundColor: "red", height: "200px", width: "200px" }}
        onMouseMove={function (e) {
          console.log(e.clientX, e.clientY);
        }}
      >
        Move Mopuse here continously
      </div>
      <br />
    </>
  );
}

export default Events;
