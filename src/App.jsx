import { Header, Nav, Footer } from "./Layout"
import FavoriteArtists from "./FavoriteArtists"
import ArtistsPage from "./ArtistsPage"
import ArtistPage from "./ArtistPage"
import { Routes, Route, Outlet, Navigate } from "react-router"
import NotFound from "./NotFound"

function Layout() {
  // Listado de "ids" de mis artistas favoritos
  console.log("Render App")

  return (
    <div id="main-container">
      <Header />
      <Nav/>
      <section className="full-content">
        <Outlet />
      </section>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/favoritos" replace />} />
        <Route path="favoritos" element={<FavoriteArtists />} />
        <Route path="artistas" element={<ArtistsPage />} />
        <Route path="artistas/:id" element={<ArtistPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
