import { NavLink } from "react-router"

export function Header() {
  return (
    <header>
      <h1>
        💿 Discografíapp
      </h1>
    </header>
  )
}

export function Nav() {
  return (
    <nav className="sidebar">
      <h2 className="menu-title">Mi música</h2>
      <ul>
        <li>
          <NavLink to="/favoritos">Mis favoritos</NavLink>
        </li>
        <li>
          <NavLink to="/artistas">Todos los artistas</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export function Footer() {
  return <footer>Desarrollo en base a componentes con React · Pontificia Universidad Católica de Chile · 2026</footer>
}
