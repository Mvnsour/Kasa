import { Link } from 'react-router-dom'

function ApartmentCard({ apartment }) {
  return (
    <>
      <div className="card-container">
        <Link to={`/ApartmentPage/${apartment.id}`}>
          <img
            className="apartment-cover"
            src={apartment.cover}
            alt={`${apartment.title} cover`}
          />
          <span className="apartment-title">{apartment.title}</span>
        </Link>
      </div>
    </>
  )
}

export default ApartmentCard
