import { Link } from "react-router"
import { useFavorites } from "./FavoritesContext"

export default function ArtistCard({ id, name, image }) {
  const { favorites, cambiar } = useFavorites()

  return (
    <li className="artist-card">
      {image ? <img src={image} alt={name} /> : <div className="empty"></div>}
      <span className="artist-name">{name}</span>
      <button onClick={() => {
        cambiar(id)
      }}>
        {favorites.includes(id) ? 'Quitar' : 'Agregar a Favoritos'}
      </button>
      <Link to={`/artistas/${id}`}>Ver</Link>
    </li>
  )
}
