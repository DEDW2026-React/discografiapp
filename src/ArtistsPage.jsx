import { useState } from "react"
import { ArtistCardInfo } from "./ArtistCardInfo"

export default function ArtistsPage() {
  const [artists, setArtists] = useState([])
  const [search, setSearch] = useState('')

  return (
    <>
        <h2>Artistas</h2>
        <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button
            onClick={() => {
                const url = `https://api.discogs.com/database/search?q=${search}&type=artist&per_page=3&page=1`
                fetch(url).then(response => response.json()).then((json) => {
                    setArtists(json.results)
                })
            }}
        >
            Buscar
        </button>
        <ul>
            {artists.map((artist) => (
              <ArtistCardInfo
                key={artist.id}
                artist={artist}
              />
            ))}
        </ul>
    </>
  )
}
