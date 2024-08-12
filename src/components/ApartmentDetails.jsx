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

function TitleSubtitle({ children }) {
  return (
    <>
      <h1 className="apartment-title">{children}</h1>
      <p className="apartment-p">{children}</p>
    </>
  )
}

export default ApartmentDetails
