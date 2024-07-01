import '../styles/Navbar.css'
import kasaLogo from '../assets/logo-kasa.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src={kasaLogo} alt="Logo Kasa" className="logo-kasa" />
      </div>
      <ul>
        <li>Accueil</li>
        <li>A Propos</li>
      </ul>
    </nav>
  )
}

export default Navbar
