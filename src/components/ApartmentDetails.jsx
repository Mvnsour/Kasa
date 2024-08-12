import { useParams } from 'react-router-dom'
import apartmentList from '../datas/ApartmentList'
import TitleSubtitle from './TitleSubtitle'

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
            <>
              <img src={apartment.pictures} alt="" key={apartment.id} />
            </>
            <div className="apartment-text-container">
              <TitleSubtitle>{apartment.title}</TitleSubtitle>
              <TitleSubtitle>{apartment.location}</TitleSubtitle>
            </div>
          </>
        ))}
      </div>
      .
    </>
  )
}

export default ApartmentDetails
