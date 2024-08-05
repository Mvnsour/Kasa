import { useParams } from 'react-router-dom'
import apartmentList from '../datas/ApartmentList'


function ApartmentDetails() {
  const { id } = useParams()
  return (
    <>
      <div>Apartment n°{id}</div>
      <div className="apartment-details">
        {apartmentList.map((apartment) => (
          <img src={apartment.pictures} alt="" key={apartment.id} />
        ))}
      </div>
    </>
  )
}

export default ApartmentDetails
