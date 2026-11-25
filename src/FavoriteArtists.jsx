import { ArtistCardInfo } from "./ArtistCardInfo"
import { useFavorites } from "./FavoritesContext"

/**
 * 
 * {% for artist in artists %}
 *   <li>
 *     {{artist.name}}
 *    </li>
 * {% endfor %}
 */

export default function FavoriteArtists() {
  const { favorites } = useFavorites()
  return (
    <>
      <h2>Mis favoritos</h2>
      {favorites.length === 0 && <p>No has agregado artistas</p>}
      <ul id="artists-list">
        {favorites.map(id =>
          <ArtistCardInfo
            key={id}
            artist={{ id: id }}
          />
        )}
      </ul>
    </>
  )
}
