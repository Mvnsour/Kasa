import '../sass/Navbar.sass'
import kasaLogo from '../assets/logo-kasa.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <div>
          <img src={kasaLogo} alt="Logo Kasa" className="logo-kasa" />
        </div>
      </Link>
      <ul className="navbar-link-container">
        <Link to="/" className="nav-link">
          Accueil
        </Link>
        <Link to="/about" className="nav-link">
          À propos
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
