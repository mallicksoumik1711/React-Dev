import { useState, useEffect } from "react";

function UseEffect02() {

    const [photos, setPhotos] = useState([])

    const clickHandler = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(response)
        console.log(data[0].name)
        setPhotos(data)
    }
  
    useEffect(() => {
        clickHandler
    }, [])

  return (
    <>
      <h1>UseEffect</h1>
      <button onClick={clickHandler}>Get Photos</button>

      <div>
        {photos.map((photo, idx)=>(
            <div key={idx}>
                {photo.name}
            </div>
        ))}
      </div>
    </>
  );
}

export default UseEffect02;
