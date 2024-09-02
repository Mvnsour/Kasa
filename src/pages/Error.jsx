import { Link } from 'react-router-dom'
import './Error.scss'

function Error() {
  return (
    <>
      <h1 className="error-title">404</h1>
      <p className="error-p">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="home-link">
        Retourner sur la page d’accueil
      </Link>
    </>
  )
}

export default Error
