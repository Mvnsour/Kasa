import { useParams } from 'react-router-dom'
import apartmentList from '../datas/ApartmentList'
import TitleAndLocation from './TitleAndLocation'
import Collapse from './Collapse'

function ApartmentDetails() {
  const { id } = useParams()

  // Trouver l'appartement correspondant à l'id
  const apartment = apartmentList.find((apartment) => apartment.id === id)

  return (
    <div>
      <div className="apartment-details">
        <div className="apartment-pictures">
          {apartment.pictures.map((picture, index) => (
            <img
              src={picture}
              alt={apartment.title}
              key={index}
              className="aprtment-img"
            />
          ))}
        </div>
        <div className="apartment-text-container">
          {/* Passer le titre et l'ID au composant TitleAndLocation */}
          <TitleAndLocation
            title={[apartment.title]}
            location={apartment.location}
            id={id}
          />
          <Collapse title="Description" content={apartment.description} />
          <Collapse title="Équipments" content={apartment.equipments} />
        </div>
      </div>
    </div>
  )
}

export default ApartmentDetails