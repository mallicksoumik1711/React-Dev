import { useParams } from "react-router-dom"

function FetchFromDynamicRouting() {
    const params = useParams()
    console.log(params)
    return(
        <>
        <h1 className="text-center text-8xl font-bold">Fetched value from dynamic routing is: {params.haha} </h1>
        </>
    )
}

export default FetchFromDynamicRouting