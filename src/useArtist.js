import { useState, useEffect } from "react"

// Custom Hook
export function useArtist(id) {
  const [artistFromApi, setArtistFromApi] = useState({})
  const [status, setStatus] = useState("loading")

  useEffect(() => {
    const url = `https://api.discogs.com/artists/${id}`

    fetch(url).then(response => {
      console.log(response.ok)

      if (response.ok) {
        setStatus("success")
        return response.json()
      }

      setStatus("error")
      return null
    }).then((json) => {
      if (!json) return 

      const a = {
        id: json.id,
        name: json.name,
      }

      const images = json.images
      if (images && images.length > 0) {
        a.image = images[0].uri150
      }

      setArtistFromApi(a)
    })
  }, [id])
  
  return {
    artist: artistFromApi,
    status,
  }
}
