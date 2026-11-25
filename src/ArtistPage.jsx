import { useParams } from "react-router"
import { useArtist } from "./useArtist"

export default function ArtistPage() {
    const params = useParams()
    const {artist,status} = useArtist(params.id)

    if (status == "error") {
        return <h1>No encontramos al artista ID = {params.id}</h1>
    }

    if (!artist.id) {
        return <h1>CARGANDO...</h1>
    }

    return (
        <>
            <h1>{artist.name}</h1>
            <img src={artist.image} />
        </>
    )
}
