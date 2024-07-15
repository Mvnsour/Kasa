import React from 'react'

function ApartmentCard({ apartment }) {
  return (
    <React.Fragment>
      <div className="card-container">
        <a href="#">
          <img
            className="apartment-cover"
            src={apartment.cover}
            alt={`${apartment.title} cover`}
          />
          <span className="apartment-title">{apartment.title}</span>
        </a>
      </div>
    </React.Fragment>
  )
}

export default ApartmentCard
