import { useParams } from 'react-router-dom'
import apartmentList from '../datas/ApartmentList'


function ApartmentDetails() {
  const { id } = useParams()
  return (
    <>
      <div>Apartment n°{id}</div>
      <div className="apartment-details">
        {/* a garder pour plus tard 
        d'abord creation du code en dur */}
        {apartmentList.map((apartment) => (
          <>
            <div>
              <img src={apartment.pictures} alt="" key={apartment.id} />
            </div>
            <div className="apartment-page-title"></div>
          </>
        ))}
      </div>
      .
    </>
  )
}

export default ApartmentDetails
