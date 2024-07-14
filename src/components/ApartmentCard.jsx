function ApartmentCard({ apartment }) {
  return (
    <>
      <img
        className="apartment-cover"
        src={apartment.cover}
        alt={`${apartment.title} cover`}
      />
      <span className="apartment-title">{apartment.title}</span>)
    </>
  )
}

export default ApartmentCard
