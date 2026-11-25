import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext()

function getFavoritesFromStorage() {
  const item = localStorage.getItem("favorites")
  if (!item) {
    return []
  }

  try {
    const json = JSON.parse(item)
    if (Array.isArray(json)) {
      return json
    }
    return []
  } catch(e) {
    console.error(e)
    return []
  }
}

function saveFavoritesToLocalStorage(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites))
}

export function FavoritesProvider({ children }) {
  // Lógica de negocio del context
  // Nuestro caso:
  //. 1. useState para favoritos
  const [favorites, setFavorites] = useState(getFavoritesFromStorage())

  console.log(favorites)

  //. 2. una función para agregar/eliminar de favoritos
  function cambiar(id) {
    let newFavorites;

    if (favorites.includes(id)) {
      newFavorites = favorites.filter(f => f !== id)
    } else {
      newFavorites = [...favorites, id]
    }

    saveFavoritesToLocalStorage(newFavorites)
    setFavorites(newFavorites)
  }

  // { "favorites": favorites } es equivalente a { favorites }
  return (
    <FavoritesContext.Provider value={{ favorites, cambiar }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const value = useContext(FavoritesContext)
  return value
}
