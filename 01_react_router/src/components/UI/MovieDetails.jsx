import { useParams } from "react-router-dom"

export const MovieDetails = () => {

    const params = useParams();
    console.log(params);
    

    return <h1> Hello Movies details {params.movieID}</h1>
}