import { useState } from "react"

type UsersList = {
    id: number,
    imgUrl: string,
    name: string,
    description: string,
    isActive: boolean
}

function DynamicUserCard() {
    const [spots, setSpots] = useState<UsersList[]>([
        {
            id: 1,
            imgUrl: "https://images.pexels.com/photos/32730210/pexels-photo-32730210.jpeg",
            name: "Nature",
            description: "description",
            isActive: true
        },
        {
            id: 2,
            imgUrl: "https://images.pexels.com/photos/32730210/pexels-photo-32730210.jpeg",
            name: "Nature",
            description: "description",
            isActive: true
        },
    ])

    const clickHandler = (id: number) => {
        setSpots((prev) => {
            // console.log(prev)
            return prev.map((spot) => {
                console.log(spot.isActive)
                return id === spot.id ? { ...spot, isActive: !spot.isActive } : spot
            })
        })
    }
    return (
        <>
            <div className="flex flex-wrap gap-10 p-10">
                {spots.map((spot) => (
                    <div key={spot.id} className={`overflow-hidden rounded-md w-1/4 ${spot.isActive ? "bg-zinc-900" : "bg-green-900"}`}>
                        <div className="h-50">
                            <img className="h-full w-full object-cover" src={spot.imgUrl} alt="" />
                        </div>
                        <div className="p-5">
                            <h1 className="text-2xl font-bold mb-2">{spot.name}</h1>
                            <p className="word-wrap mb-4">{spot.description}</p>
                            <div>
                                <button onClick={() => clickHandler(spot.id)} className="bg-black px-10 py-2 w-full rounded-full">isActive</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DynamicUserCard