import { useState } from "react"

type UsersList = {
    id: number,
    imgUrl: string,
    name: string,
    description: string,
    isActive: true
}

function DynamicUserCard() {
    const [spots, setSpots] = useState<UsersList[]>([
        {
            id: 1,
            imgUrl: "imgurl",
            name: "Nature",
            description: "description",
            isActive: true
        }
    ])
    return (
        <>
            <div className="flex flex-wrap p-10">
                <div className="bg-zinc-900 overflow-hidden rounded-md w-1/4">
                    <div className="h-50">
                        <img className="h-full w-full object-cover" src="https://images.pexels.com/photos/32730210/pexels-photo-32730210.jpeg" alt="" />
                    </div>
                    <div className="p-5">
                        <h1 className="text-2xl font-bold mb-2">Name</h1>
                        <p className="word-wrap mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum culpa provident maiores architecto rerum earum expedita optio exercitationem nulla nihil!</p>
                        <div>
                            <button className="bg-black px-10 py-2 w-full rounded-full">isActive</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DynamicUserCard