import ArtistCard from "./ArtistCard"
import { useArtist } from "./useArtist"

export function ArtistCardInfo({ artist }) {
  const { artist: artistFromApi } = useArtist(artist.id)
  // #1: const data = useArtist(artist.id)
  // #2: const artistFromApi = data.artist

  return (
    <ArtistCard
      id={artistFromApi.id}
      name={artistFromApi.name}
      image={artistFromApi.image}
    />
  )
}
