import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png'

const links = [
  { id: 1, path: '/', text: 'Inicio' },
  { id: 2, path: '/productos', text: 'Productos' },
  { id: 3, path: '/pedidos', text: 'Pedidos' },
  { id: 4, path: '/personalizados', text: 'Personalizados' },
  { id: 5, path: '/contacto', text: 'Contacto' },
]

function Navbar() {
  return (
    <header>
      <nav>
        <NavLink to="/" aria-label="Ir al inicio">
          <img src={logo} alt="Logo de Pastelería SM" />
        </NavLink>

        <input type="checkbox" id="menu-toggle" />

        <label htmlFor="menu-toggle" className="menu-icon" aria-label="Abrir menú">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </label>

        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
