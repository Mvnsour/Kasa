import apartmentList from '../datas/ApartmentList'

function HostAndRating({ host, picture, rating }) {
  return (
    <div className="host-rating-container">
      <h3>{host}</h3>
      <div>
        <img src={picture} alt={`${host} badge`} className="host-picture" />
      </div>
      <div></div>
    </div>
  )
}

export default HostAndRating
