import React from 'react'

function ApartmentCard({ apartment }) {
  return (
    <React.Fragment>
      <img
        className="apartment-cover"
        src={apartment.cover}
        alt={`${apartment.title} cover`}
      />
      <span className="apartment-title">{apartment.title}</span>)
    </React.Fragment>
  )
}

export default ApartmentCard
