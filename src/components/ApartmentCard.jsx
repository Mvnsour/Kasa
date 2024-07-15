import React from 'react'
import { Link } from 'react-router-dom'

function ApartmentCard({ apartment }) {
  return (
    <React.Fragment>
      <div className="card-container">
        <Link to={`/apartment/${apartment.id}`}>
          <img
            className="apartment-cover"
            src={apartment.cover}
            alt={`${apartment.title} cover`}
          />
          <span className="apartment-title">{apartment.title}</span>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default ApartmentCard
