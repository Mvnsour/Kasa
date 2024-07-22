import '../styles/Navbar.css'
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

      <ul>
        <Link to="/">Acueil </Link>
        <Link to="/about">A propos</Link>
      </ul>
    </nav>
  )
}

export default Navbar
